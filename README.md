# My Portfolio — Next.js

A personal portfolio website built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: Nodemailer
- **HTTP Client**: Axios

## Getting Started

### 1. Install dependencies

```bash
cd portfolio-nextjs
npm install
```

### 2. Set up environment variables

Create a `.env.local` file inside the `portfolio-nextjs/` directory and add your required environment variables (e.g. email credentials for the contact form).

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
portfolio-nextjs/
├── app/           # Next.js App Router pages & API routes
├── components/    # Reusable React components
├── public/        # Static assets (images, fonts, etc.)
├── next.config.mjs
├── tailwind.config
└── package.json
```

## Deploy

The easiest way to deploy is via [Vercel](https://vercel.com):

```bash
npm run build
```

Or push to GitHub and connect the `portfolio-nextjs/` folder to a Vercel project.
