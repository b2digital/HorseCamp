import type { NextApiRequest, NextApiResponse } from 'next';
codex/create-next.js-base-for-horsecamp-application
import Stripe from 'stripe';

export const config = {
  api: {
    bodyParser: false
  }
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2023-10-16'
});

async function buffer(readable: NextApiRequest) {
  const chunks: Uint8Array[] = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

import { Readable } from 'stream';
import { getStripeClient } from '@/lib/stripe';

export const config = {
  api: {
    bodyParser: false,
  },
};

const relevantEvents = new Set(['checkout.session.completed', 'customer.subscription.updated']);
main

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

codex/create-next.js-base-for-horsecamp-application
  const buf = await buffer(req);
  const signature = req.headers['stripe-signature'];

  if (!signature) {
    return res.status(400).send('Missing Stripe signature header');
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(buf, signature, process.env.STRIPE_WEBHOOK_SECRET ?? '');
  } catch (err) {
    console.error(err);
    return res.status(400).send(`Webhook Error: ${(err as Error).message}`);
  }

  switch (event.type) {
    case 'checkout.session.completed':
      // TODO: persistez l\'information de paiement dans Supabase pour activer le statut premium
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);

  const stripe = getStripeClient();
  const signature = req.headers['stripe-signature'];

  if (!signature) {
    return res.status(400).send('Missing signature header');
  }

  const buf = await readRequestBody(req);

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
main
  }

  res.json({ received: true });
}
codex/create-next.js-base-for-horsecamp-application


async function readRequestBody(readable: Readable): Promise<Buffer> {
  const chunks: Uint8Array[] = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}
main
