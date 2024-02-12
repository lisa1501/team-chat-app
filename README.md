# Fullstack Discord Clone: Next.js 13, React, Socket.io, Prisma, Tailwind, MySQL 
<br>

[Click here to see it in action!](https://team-chat-app-production-59d7.up.railway.app/sign-in?redirect_url=https%3A%2F%2Fteam-chat-app-production-59d7.up.railway.app%2F)
<br>
Features:

- Real-time messaging using Socket.io
- Send attachments as messages using UploadThing
- Delete & Edit messages in real time for all users
- Create Text, Audio and Video call Channels
- 1:1 conversation between members
- 1:1 video calls between members
- Member management (Kick, Role change Guest / Moderator)
- Unique invite link generation & full working invite system
- Infinite loading for messages in batches of 10 (tanstack/query)
- Server creation and customization
- Beautiful UI using TailwindCSS and ShadcnUI
- Full responsivity and mobile UI
- Light / Dark mode
- Websocket fallback: Polling with alerts
- ORM using Prisma
- MySQL database using Planetscale
- Authentication with Clerk
  
### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/lisa1501/Discord-Clone.git
```

### Install packages

```shell
npm i
```
- Create a .env file in the current directory. It should contain the following information.
```bash
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_************
    CLERK_SECRET_KEY=sk_test_*******************

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

    # This was inserted by `prisma init`:
    # Environment variables declared in this file are automatically made available to Prisma.
    # See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

    # Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
    # See the documentation for all the connection string options: https://pris.ly/d/connection-strings

    DATABASE_URL='mysql://****************************************************************'
    UPLOADTHING_SECRET=sk_live_••••••••••••••••••••••••••••••••••••••••••
    UPLOADTHING_APP_ID=•••••••••••••••••

    LIVEKIT_API_KEY=•••••••••••••••••
    LIVEKIT_API_SECRET=••••••••••••••••••••••••••••••••••
    NEXT_PUBLIC_LIVEKIT_URL=wss://•••••••-•••••••-•••••••.livekit.cloud
    
```
### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## 
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
