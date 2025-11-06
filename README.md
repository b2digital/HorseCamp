# HorseCamp

Squelette de l'application HorseCamp construit avec Next.js 15, React, Tailwind CSS et Supabase. Il reprend les grandes lignes de l'expérience TenUp pour faciliter la recherche de stages, randonnées, concours et clubs équestres.

## Démarrage

```bash
npm install
npm run dev
```

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
