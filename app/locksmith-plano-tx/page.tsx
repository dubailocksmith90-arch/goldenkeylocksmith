import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, SITE_URL, BUSINESS_NAME, RATING, REVIEW_COUNT, serviceAreas } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Locksmith Plano TX | 24/7 Emergency | (917) 203-4678',
  description:
    'Locksmith in Plano TX — Legacy, West Plano, East Plano. 24/7 house lockout $65–$125, car lockout $50–$100, rekeying $15–$35/lock. Licensed & insured. Call (917) 203-4678.',
  alternates: { canonical: `${SITE_URL}/locksmith-plano-tx` },
  keywords: 'locksmith plano tx, plano locksmith, locksmith plano, emergency locksmith plano tx, locksmith plano texas, locksmith 75074, locksmith 75024, locksmith 75025',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Locksmith', 'LocalBusiness'],
  '@id': `${SITE_URL}/locksmith-plano-tx/#business`,
  name: `${BUSINESS_NAME} — Plano TX`,
  url: `${SITE_URL}/locksmith-plano-tx`,
  telephone: '+19172034678',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Plano',
    addressRegion: 'TX',
    postalCode: '75074',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 33.0198, longitude: -96.6989 },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' }],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: RATING, reviewCount: REVIEW_COUNT, bestRating: '5' },
  priceRange: '$$',
  areaServed: { '@type': 'City', name: 'Plano', containedIn: 'TX' },
}

const faqs = [
  {
    q: 'How quickly can you respond to a lockout in Plano TX?',
    a: 'Plano is about 25–40 minutes from our Casa Linda base. We dispatch the nearest available technician immediately — Northern Plano (Legacy, 75024/75025) and all ZIP codes including 75074, 75075, 75023.',
  },
  {
    q: 'What does a locksmith cost in Plano TX?',
    a: 'House lockout in Plano TX: $65–$125. Car lockout: $50–$100. Rekeying: $15–$35 per lock. Car key programming: $75–$250. We always quote before starting — no hidden fees.',
  },
  {
    q: 'Do you serve Legacy and West Plano?',
    a: 'Yes. We serve all of Plano — Legacy Town Center (75024/75025), West Plano, East Plano, Central Plano, Toyota HQ area, and the Collin Creek corridor. Call us anywhere in Plano TX.',
  },
  {
    q: 'Can you program a car key for a Toyota or Honda in Plano?',
    a: 'Yes. We carry on-site key programming equipment for Toyota, Honda, Ford, Chevrolet, Nissan, and most other makes. No tow truck needed — we come to you in Plano.',
  },
  {
    q: 'Is there an emergency locksmith in Plano TX available at night?',
    a: 'Yes. We answer 24/7 — midnight, weekends, and holidays included. Emergency locksmith service in Plano TX with a small after-hours fee of $25–$50 between 10pm–6am.',
  },
  {
    q: 'Do you do smart lock installation in Plano?',
    a: 'Yes. Smart lock installation is very popular in Plano. We install Schlage Encode, August Smart Lock, Yale Assure, and Kwikset Halo at homes and businesses throughout Plano TX.',
  },
]

export default function LocksmithPlanoTXPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Locksmith Plano TX' }]} />
      <PageHero
        badge="📍 Plano TX"
        title="Locksmith in Plano TX — 24/7 Emergency"
        subtitle="Licensed, bonded & insured locksmith serving all of Plano TX. Legacy, West Plano, East Plano. House lockout, car lockout, rekeying, car keys & more."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'All Services', href: '/emergency-locksmith', variant: 'outline' },
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">
                  Locksmith Service in Plano TX
                </h2>
                <p className="text-gray-600 mb-4">
                  Golden&apos;s Casa Linda Keys serves the full city of Plano TX — from the
                  upscale Legacy Town Center and Shops at Legacy area in the north to the
                  established East Plano neighborhoods near the Garland border. Plano is one of
                  the fastest-growing cities in the DFW metro, and we&apos;re proud to serve
                  its residents and businesses.
                </p>

                <h3 className="font-bold text-navy-DEFAULT mt-6 mb-3">Plano Neighborhoods</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Legacy', 'Legacy Town Center', 'West Plano', 'East Plano', 'Central Plano', 'Haggard Park Area', 'Toyota HQ Area', 'Collin Creek Area'].map((n) => (
                    <span key={n} className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full">{n}</span>
                  ))}
                </div>

                <h3 className="font-bold text-navy-DEFAULT mb-3">Plano ZIP Codes</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['75023', '75024', '75025', '75074', '75075'].map((z) => (
                    <span key={z} className="bg-navy-DEFAULT/5 text-navy-DEFAULT font-mono text-sm px-3 py-1.5 rounded-full">{z}</span>
                  ))}
                </div>

                <h3 className="font-bold text-navy-DEFAULT mb-3">Landmarks &amp; Major Roads</h3>
                <p className="text-gray-600 text-sm mb-4">
                  We serve areas around Shops at Legacy, Toyota North American HQ, Collin Creek
                  Mall area, US-75, Dallas North Tollway, and the Spring Creek and Parker Road
                  corridors throughout Plano.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">Services in Plano TX</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: 'House Lockout Plano', href: '/house-lockout' },
                    { title: 'Car Lockout Plano', href: '/car-lockout' },
                    { title: 'Rekeying Plano', href: '/rekeying' },
                    { title: 'Smart Lock Install Plano', href: '/smart-lock-installation' },
                    { title: 'Car Key Replacement Plano', href: '/car-key-replacement' },
                    { title: 'Deadbolt Install Plano', href: '/deadbolt-installation' },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-navy-DEFAULT">
                      <svg aria-hidden="true" className="w-4 h-4 text-gold-DEFAULT" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <ServiceSidebar
              pricing={[
                { label: 'House Lockout', price: '$65–$125' },
                { label: 'Car Lockout', price: '$50–$100' },
                { label: 'Rekeying (per lock)', price: '$15–$35' },
                { label: 'Car Key Replace', price: '$75–$250' },
              ]}
              relatedServices={[
                { name: 'Locksmith Dallas TX', href: '/locksmith-dallas-tx' },
                { name: 'Locksmith Richardson TX', href: '/locksmith-richardson-tx' },
                { name: 'Locksmith Garland TX', href: '/locksmith-garland-tx' },
                { name: 'Emergency Locksmith', href: '/emergency-locksmith' },
              ]}
              areas
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-xl font-extrabold text-navy-DEFAULT mb-6">All Service Areas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {serviceAreas.map((area) => (
              <Link key={area.name} href={area.href} className="flex flex-col items-center p-3 bg-white rounded-xl border border-gray-100 hover:border-gold-DEFAULT transition-all text-center">
                <span className="font-bold text-navy-DEFAULT text-sm">{area.name}</span>
                <span className="text-gray-400 text-xs">{area.zip}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl font-extrabold text-navy-DEFAULT text-center mb-8">Plano TX Locksmith FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Need a Locksmith in Plano TX?"
        subtitle="24/7 service across all Plano TX. Licensed & insured. Fast response."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/emergency-locksmith"
        secondaryLabel="Emergency Service"
      />
    </>
  )
}
