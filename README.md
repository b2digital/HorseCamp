# HorseCamp

Base de projet Next.js 15 pour l&apos;application web & mobile HorseCamp.

## 🚀 Démarrage

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir l&apos;interface inspirée de TenUp.

## 🧱 Structure principale

- `app/` : pages App Router (accueil, recherche, fiches événements, espaces organisateur & admin).
- `components/` : composants UI réutilisables (barre de recherche, filtres, carte, cartes événement...).
- `lib/` : configuration Supabase, requêtes serveur, données mock.
- `types/` : types TypeScript partagés (événements, supabase).
- `pages/api/stripe/webhook.ts` : webhook Stripe prêt à connecter.
- `supabase/migrations/` : scripts SQL d&apos;initialisation de la base.

## 🔑 Variables d&apos;environnement

Créez un fichier `.env.local` à la racine avec vos secrets :

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
NEXT_PUBLIC_MAPBOX_TOKEN=...
STRIPE_SECRET_KEY=...
STRIPE_WEBHOOK_SECRET=...
```

## 🗺️ Connexion à Supabase

- `lib/supabase/server.ts` expose `createServerSupabaseClient()` pour les composants serveur.
- `lib/events.ts` contient `getEvents()` qui lit les annonces publiées et les mappe vers `EventCard`.
- Les pages utilisent des données mock (`lib/mock/events.ts`) si la connexion Supabase échoue pour permettre une démo immédiate.

Pour tester la requête sur la table `events`, importez `getEvents()` dans n&apos;importe quel composant serveur et assurez-vous d&apos;avoir défini l&apos;URL et la clé Supabase. Exemple minimal :

```ts
const events = await getEvents('stage');
```

## 💳 Stripe

Le webhook `pages/api/stripe/webhook.ts` gère les événements `checkout.session.completed`. Ajoutez votre clé secrète et le secret du webhook puis reliez la logique métier (activation premium) dans Supabase.

## 🗄️ Base de données

Le fichier [`supabase/migrations/20240601_init.sql`](supabase/migrations/20240601_init.sql) crée les tables `events`, `organizers`, `leads`, `reviews`, `users` ainsi que les index utiles.

## 🛠️ Capacitor & PWA

Next.js 15 génère une PWA installable. Ajoutez Capacitor (non inclus ici) pour empaqueter l&apos;app mobile et utilisez les mêmes composants responsive.

## ✅ Étapes suivantes

1. Connecter Supabase Auth pour distinguer organisateurs et admins.
2. Brancher Supabase Storage pour l&apos;upload photo depuis `/ajouter`.
3. Alimenter les dashboards avec de vraies statistiques (views, leads, conversions Stripe).
4. Déployer sur Vercel et configurer les Edge Functions pour les notifications/modérations automatiques.
