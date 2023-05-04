This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.js`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Movie Search App

## Features

- Search for movies by title
- Bookmark movies
- Review bookmarked movies
- Mark bookmarked movies as “watched”
- Work on desktop and mobile browsers
- Allow removing movies from saved section

## APIs Used

- [RapidAPI Movies Endpoint](https://rapidapi.com/rapidapi/api/movie-database-alternative)

## Technologies Used

- NextJS
- Chakra UI
- Local Storage

## Deployment

This app is deployed on [Vercel](https://vercel.com/docs) using the hobby plan.

## Future Improvements

- Implement authentication and user accounts to allow multiple users to save their own bookmarks.
- Use a real database to store bookmarks instead of local storage.
- Use a different movie database API with more features and details.
- Allow users to rate movies and sort by rating.
- Implement additional search filters (e.g. by genre, release year, etc.).
