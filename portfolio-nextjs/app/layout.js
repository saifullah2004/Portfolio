import './globals.css';

export const metadata = {
  title: 'Muhammad Saifullah | Full-Stack Developer',
  description:
    'Portfolio of Muhammad Saifullah — a passionate Full-Stack Developer specializing in the MERN stack, PHP/MySQL, and AI-powered applications.',
  keywords: ['Muhammad Saifullah', 'Full Stack Developer', 'MERN Stack', 'React', 'Next.js', 'Portfolio'],
  openGraph: {
    title: 'Muhammad Saifullah | Full-Stack Developer',
    description: 'Building high-performance and scalable web applications.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
