# Socius

Socius is a modern social media web application built with [Next.js](https://nextjs.org) and TypeScript. It allows users to create posts, comment, like, follow other users, and receive notifications. The app leverages Prisma ORM with PostgreSQL for data management and Clerk for authentication.

## Features

- User authentication and profile management with Clerk
- Create, read, update, and delete posts
- Comment on posts
- Like posts with unique user likes
- Follow and unfollow other users
- Real-time notifications for likes, comments, and follows
- Responsive UI with Tailwind CSS and Radix UI components
- Image upload support via Uploadthing

## Tech Stack

- [Next.js](https://nextjs.org) (React framework)
- [TypeScript](https://www.typescriptlang.org)
- [Prisma](https://www.prisma.io) ORM with PostgreSQL
- [Clerk](https://clerk.com) for authentication
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Radix UI](https://www.radix-ui.com) for accessible UI components
- [Uploadthing](https://uploadthing.com) for file uploads

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- PostgreSQL database
- Clerk account and API keys

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd socius
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:

```env
DATABASE_URL=your_postgresql_database_url
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
CLERK_API_KEY=your_clerk_api_key
CLERK_JWT_KEY=your_clerk_jwt_key
```

4. Run Prisma migrations to set up the database schema:

```bash
npx prisma migrate dev
```

5. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Deployment

The easiest way to deploy Socius is using [Vercel](https://vercel.com), the creators of Next.js.

- Connect your GitHub repository to Vercel.
- Set the environment variables in the Vercel dashboard.
- Deploy the app with automatic builds and previews.

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learn More

To learn more about the technologies used in this project, check out:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Clerk Documentation](https://docs.clerk.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)

## License

This project is licensed under the MIT License.
