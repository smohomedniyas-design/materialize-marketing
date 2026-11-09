import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const viewport: Viewport = {
  themeColor: '#122522',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://materializem.com'),
  title: {
    default: 'Materialize Marketing - Web Design, Local SEO & Marketing for Small Businesses',
    template: '%s | Materialize Marketing',
  },
  description:
    'Materialize Marketing helps US small businesses turn online visitors into paying customers. Custom websites from $25/mo, local Google ranking, social media management, and 24/7 AI lead capture.',
  keywords: [
    'small business web design',
    'local marketing agency',
    'DFW web design',
    'Prosper Texas marketing',
    'local SEO Google business profile',
    'social media management',
    'AI voice receptionist',
    'small business websites',
    'affordable website hosting',
  ],
  authors: [{ name: 'Materialize Marketing' }],
  creator: 'Materialize Marketing',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://materializemarketing.com/',
    siteName: 'Materialize Marketing',
    title: "Materialize Marketing - Let's Build the Infrastructure.",
    description:
      'Custom web development, e-commerce, landing pages, UI/UX, hosting & maintenance. US-based. Launch results, not opinions.',
    images: [
      {
        url: 'https://materializemarketing.com/og.png',
        width: 1200,
        height: 630,
        alt: 'Materialize Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Materialize Marketing - Let's Build the Infrastructure.",
    description:
      'Custom web development, e-commerce, landing pages, UI/UX, hosting & maintenance. US-based.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Materialize Marketing',
              url: 'https://materializem.com',
              description:
                'Custom web design, local SEO, social media management, and AI automations for American small businesses.',
              areaServed: 'US',
              telephone: '+1-469-215-7794',
              email: 'hello@materializem.com',
              parentOrganization: {
                '@type': 'Organization',
                name: 'Sands Planning Group',
                url: 'https://www.sandspg.com/',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Prosper',
                addressRegion: 'TX',
                postalCode: '75078',
                addressCountry: 'US',
              },
            }),
          }}
        />
      </head>
      <body id="top" className="bg-white font-body text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-lime focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
