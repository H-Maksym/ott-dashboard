This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Arhitecture

src/
app/
layout.tsx
page.tsx
dashboard/
page.tsx
shared/
api/ (HTTP clients to third-party APIs)
lib/ (utils)
ui/ (component UI layer)
widgets/
filters/ (filter widgets)
charts/ (chart wrappers)
entities/
resources/ (resource entities, data normalization)
features/
apply-filters/ (the logic of applying filters)

Features:

- shared/api — a place for fetch functions to various sources.

- entities/resources — data normalization, mapping of various APIs into a single structure.

- widgets/charts — wrappers for Metabase iframe + custom controllers.

- widgets/filters — a set of filter components (date, resource, range, etc.).

- features/apply-filters — logic for collecting filter status and preparing data for requests.

shared -> можна імпортувати звідусіль
entities -> можна імпортувати зверху (features, widgets, pages)
features -> можна імпортувати у widgets та pages
shared -> can be imported from anywhere
entities -> can be imported from above (features, widgets, pages)
features -> can be imported into widgets and pages
widgets -> can be imported only in pages
pages -> not imported ANYWHERE (route isolation)

# axios - For HTTP requests (you can fetch, but it is better to add a wrapper):

# dayjs - To manage dates:

STAGE: Setting up ESLint + Prettier

1. We install all the necessary packages
   npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier \
   @typescript-eslint/eslint-plugin @typescript-eslint/parser \
   eslint-plugin-import eslint-import-resolver-typescript

Explanation:

eslint-config-prettier - disables rules that conflict with prettier.

eslint-plugin-prettier - Runs prettier as a lint rule.

eslint-plugin-import — order of imports and checking of resolving.

eslint-import-resolver-typescript — allows import "@/..." from tsconfig paths.
