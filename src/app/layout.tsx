import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const viewport: Viewport = {
  themeColor: '#274a44',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://materializemarketing.com'),
  title: {
    default: 'Materialize Marketing - Web Development, Digital Marketing & E-Commerce',
    template: '%s | Materialize Marketing',
  },
  description:
    'Materialize Marketing is a senior US-based team building custom web platforms, e-commerce storefronts, and executing end-to-end digital marketing strategies and solutions to turn traffic into compounding revenue.',
  keywords: [
    'web development',
    'digital marketing strategies',
    'paid advertising management',
    'growth marketing solutions',
    'e-commerce development',
    'landing pages',
    'website maintenance',
    'hosting',
    'UI/UX design',
    'US agency',
    'Next.js development',
    'Shopify Plus',
    'Meta Ads management',
    'Google Ads agency',
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
              url: 'https://materializemarketing.com',
              description:
                'Custom web development, e-commerce solutions, landing pages and funnels with hosting, maintenance and UI/UX.',
              foundingDate: '2013',
              areaServed: 'US',
              telephone: '+1-415-555-0134',
              email: 'hello@materializemarketing.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '548 Market St, Ste 300',
                addressLocality: 'San Francisco',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
            }),
          }}
        />
      </head>
      <body id="top" className="bg-paper font-body text-ink antialiased selection:bg-lime selection:text-ink">
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
