import type { NextApiRequest, NextApiResponse } from 'next';
import { buffer } from 'micro';
import { getStripeClient } from '@/lib/stripe';

export const config = {
  api: {
    bodyParser: false,
  },
};

const relevantEvents = new Set(['checkout.session.completed', 'customer.subscription.updated']);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const stripe = getStripeClient();
  const signature = req.headers['stripe-signature'];

  if (!signature) {
    return res.status(400).send('Missing signature header');
  }

  const buf = await buffer(req);

  let event;

  try {
    event = stripe.webhooks.constructEvent(buf.toString(), signature, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Stripe webhook signature verification failed', message);
    return res.status(400).send(`Webhook Error: ${message}`);
  }

  if (relevantEvents.has(event.type)) {
    console.log('Received event', event.type);
    // TODO: Persist the subscription status in Supabase using Edge Functions or server actions.
  }

  res.json({ received: true });
}
