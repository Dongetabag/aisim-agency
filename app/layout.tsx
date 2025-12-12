import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AiSim Agency - AI Automation & Digital Solutions',
  description: 'Deploy AI sales agents, content engines, and workflow automations that work 24/7. Agency-quality AI solutions ready to implement today.',
  keywords: 'AI automation, AI sales agent, n8n automation, AI chatbot, AI voice agent, digital agency, workflow automation, business automation',
  authors: [{ name: 'AiSim Agency' }],
  creator: 'AiSim Agency',
  publisher: 'AiSim Agency',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aisim.agency',
    siteName: 'AiSim Agency',
    title: 'AiSim Agency - AI Automation & Digital Solutions',
    description: 'Deploy AI sales agents, content engines, and workflow automations that work 24/7. Agency-quality AI solutions ready to implement today.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AiSim Agency - AI Automation Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AiSim Agency - AI Automation & Digital Solutions',
    description: 'Deploy AI sales agents, content engines, and workflow automations that work 24/7.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#4F46E5" />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />

        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'AiSim Agency',
              url: 'https://aisim.agency',
              logo: 'https://aisim.agency/logo.png',
              description: 'AI automation and digital agency providing sales agents, content engines, and workflow automations.',
              sameAs: [
                'https://twitter.com/aisimagency',
                'https://linkedin.com/company/aisimagency',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-XXX-XXX-XXXX',
                contactType: 'sales',
                email: 'hello@aisimagency.com',
              },
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'USD',
                lowPrice: '499',
                highPrice: '5999',
                offerCount: '18',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}



