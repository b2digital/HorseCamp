# HorseCamp

codex/create-next.js-base-for-horsecamp-application
Base de projet Next.js 15 pour l&apos;application web & mobile HorseCamp.

## 🚀 Démarrage
codex/setup-horsecamp-next.js-project-structure-atgofi
Squelette de l'application HorseCamp construit avec Next.js 15, React, Tailwind CSS et Supabase. Il reprend les grandes lignes de l'expérience TenUp pour faciliter la recherche de stages, randonnées, concours et clubs équestres.

Squelette de l'application HorseCamp construit avec Next.js 15, React 19 et Tailwind CSS, le tout couplé à Supabase. Il reprend les grandes lignes de l'expérience TenUp pour faciliter la recherche de stages, randonnées, concours et clubs équestres.
main

## Démarrage
main

```bash
npm install
npm run dev
```

codex/create-next.js-base-for-horsecamp-application
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
=======
L'application est accessible sur [http://localhost:3000](http://localhost:3000).

## Structure principale

```
app/
  (public)/
    page.tsx                # Accueil (stage / rando / concours / club)
    recherche/              # Page recherche + filtres dynamiques + carte
    evenement/[slug]/       # Fiche événement détaillée
    organisateur/[id]/      # Profil organisateur
    ajouter/                # Formulaire ajout annonce
    tableau-de-bord/        # Dashboard organisateur (mock)
    admin/                  # Interface admin (mock)
components/                # UI réutilisable (SearchBar, FilterChips, ...)
lib/                        # Supabase, Stripe, requêtes, utilitaires
pages/api/stripe/webhook   # Webhook Stripe (Premium)
supabase/schema.sql        # Script SQL d'initialisation
```

## Supabase

- Configurez les variables d'environnement suivantes :
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`

- Exemple d'utilisation des données Supabase dans `lib/queries.ts` via `getPublishedEvents()`.
- Les types générés sont disponibles dans `types/supabase.ts`.
- Le script `supabase/schema.sql` crée les tables `events`, `organizers`, `leads`, `reviews` et `users`.

## Stripe

- Ajoutez `STRIPE_SECRET_KEY` et `STRIPE_WEBHOOK_SECRET` pour activer le webhook `pages/api/stripe/webhook.ts`.
- `lib/stripe.ts` instancie un client Stripe prêt pour les abonnements Premium.

## Mapbox

- Renseignez `NEXT_PUBLIC_MAPBOX_TOKEN` pour activer `MapResults.tsx`.
- La carte est chargée uniquement côté client avec des marqueurs stylés.

## Capacitor & PWA

- Ajoutez un manifest et les icônes pour transformer l'app en PWA, puis utilisez Capacitor pour générer les projets iOS/Android.

## Prochaines étapes

- Brancher Supabase Auth pour restreindre les espaces organisateur / admin.
- Remplacer les `mockEvents` par `getPublishedEvents()` et des fetchers RLS.
- Implémenter les Edge Functions pour notifications et modération.
- Intégrer Stripe Checkout pour basculer en Premium.
main
