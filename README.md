# GTM Growth System - Landing Page (Next.js)

Landing page standalone pour GTM Growth System, construite avec Next.js 14, React 18, TypeScript et Tailwind CSS.

## 🚀 Installation

```bash
npm install
```

## 🛠️ Développement

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

## 📦 Build Production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
landing-page-nextjs/
├── public/
│   └── images/          # Toutes les images de la landing page
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Layout principal avec metadata
│   │   ├── page.tsx     # Page d'accueil (landing page complète)
│   │   └── globals.css  # Styles CSS globaux avec Tailwind
│   ├── components/
│   │   ├── button.tsx   # Composant Button avec variants
│   │   ├── logo.tsx     # Logo GTM
│   │   └── theme-switcher.tsx  # Switcher de thème dark/light
│   └── lib/
│       └── utils.ts     # Utilitaires (cn pour className)
├── tailwind.config.ts   # Configuration Tailwind CSS
├── tsconfig.json        # Configuration TypeScript
└── package.json
```

## 🎨 Fonctionnalités

- ✅ Next.js 14 avec App Router
- ✅ TypeScript strict
- ✅ Tailwind CSS avec dark mode
- ✅ Composants UI modernes (Radix UI + shadcn/ui)
- ✅ Theme switcher (light/dark/system)
- ✅ Images optimisées avec next/image
- ✅ SEO optimisé avec metadata
- ✅ Responsive design

## 🎯 Sections de la landing page

1. **Hero Section** - Présentation principale avec stats clés
2. **Problem Section** - Les 4 problèmes principaux
3. **Features Section** - Les 4 fonctionnalités principales
4. **CTA Section** - Call-to-action pour réserver une session

## 🔧 Personnalisation

### Modifier les couleurs
Édite `src/app/globals.css` pour changer les variables CSS :

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  /* ... */
}
```

### Ajouter des sections
Édite `src/app/page.tsx` pour ajouter de nouvelles sections à la landing page.

### Modifier le logo
Remplace `public/images/gtm logo.svg` par ton nouveau logo.

## 📝 Notes

- La page complète de ton projet d'origine a été extraite et simplifiée
- Toutes les dépendances à Convex, TanStack Router, etc. ont été retirées
- Les liens "#contact", "#pricing", etc. sont des ancres - tu peux les personnaliser
- Le projet est prêt pour déploiement sur Vercel, Netlify ou autre

## 🚀 Déploiement

### Vercel (recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload le dossier .next vers Netlify
```

## 📞 Contact

Pour toute question : contact@gtmgrowthsystem.com
