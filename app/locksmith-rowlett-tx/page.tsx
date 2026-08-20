import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, SITE_URL, BUSINESS_NAME, RATING, REVIEW_COUNT, serviceAreas } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Locksmith Rowlett TX | 24/7 | ZIP 75088 | (917) 203-4678',
  description:
    'Locksmith in Rowlett TX — Waterview, Lake Ray Hubbard, ZIP 75088/75089. 24/7 house lockout $65–$125, rekeying $15–$35/lock, car lockout $50–$100. Licensed. Call (917) 203-4678.',
  alternates: { canonical: `${SITE_URL}/locksmith-rowlett-tx` },
  keywords: 'locksmith rowlett tx, rowlett locksmith, locksmith rowlett, locksmith 75088, rowlett texas locksmith, locksmith in rowlett tx, emergency locksmith rowlett',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Locksmith', 'LocalBusiness'],
  '@id': `${SITE_URL}/locksmith-rowlett-tx/#business`,
  name: `${BUSINESS_NAME} — Rowlett TX`,
  url: `${SITE_URL}/locksmith-rowlett-tx`,
  telephone: '+19172034678',
  address: { '@type': 'PostalAddress', addressLocality: 'Rowlett', addressRegion: 'TX', postalCode: '75088', addressCountry: 'US' },
  geo: { '@type': 'GeoCoordinates', latitude: 32.9026, longitude: -96.5637 },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' }],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: RATING, reviewCount: REVIEW_COUNT, bestRating: '5' },
  priceRange: '$$',
  areaServed: { '@type': 'City', name: 'Rowlett', containedIn: 'TX' },
}

const faqs = [
  {
    q: 'How quickly can you respond to a lockout in Rowlett TX?',
    a: 'Rowlett is about 25–45 minutes from our Casa Linda base. We dispatch the nearest available technician immediately — ZIP codes 75088 and 75089, Waterview, Main Street, and all Rowlett neighborhoods.',
  },
  {
    q: 'What does a locksmith cost in Rowlett TX?',
    a: 'House lockout in Rowlett: $65–$125. Car lockout: $50–$100. Rekeying: $15–$35/lock. Car key programming: $75–$250. Free phone estimates — call (917) 203-4678.',
  },
  {
    q: 'Do you serve ZIP code 75088 in Rowlett?',
    a: 'Yes — 75088 is our primary Rowlett ZIP code. We serve all of Rowlett including 75088 and 75089, from Waterview and Lake Ray Hubbard to the Main Street corridor and Liberty Grove.',
  },
  {
    q: 'Can you help if I am locked out near Lake Ray Hubbard?',
    a: 'Absolutely. Whether you are at a lakefront home, boat ramp, or park near Lake Ray Hubbard, we come to your exact location and get you back in quickly.',
  },
  {
    q: 'Do you service the Waterview neighborhood in Rowlett?',
    a: 'Yes. Waterview is one of our most frequently served communities in Rowlett. We handle lockouts, rekeying, car keys, and all locksmith services throughout Waterview and surrounding areas.',
  },
]

export default function LocksmithRowlettTXPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Locksmith Rowlett TX' }]} />
      <PageHero
        badge="📍 Rowlett TX"
        title="Locksmith in Rowlett TX — 24/7 Emergency"
        subtitle="Licensed, bonded & insured locksmith serving all of Rowlett TX. Waterview, Main Street, Lake Ray Hubbard area. House lockout, car lockout, rekeying & more."
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
                  Locksmith Service in Rowlett TX
                </h2>
                <p className="text-gray-600 mb-4">
                  Golden&apos;s Casa Linda Keys serves all of Rowlett TX — from the established
                  Waterview master-planned community to the charming Main Street Historic District
                  and the beautiful lakefront neighborhoods along Lake Ray Hubbard. Rowlett
                  residents count on us for fast, professional locksmith service at any hour.
                </p>

                <h3 className="font-bold text-navy-DEFAULT mt-6 mb-3">Rowlett Neighborhoods</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Waterview', 'Main Street Area', 'Lake Ray Hubbard Shoreline', 'Central Rowlett', 'Liberty Grove Area', 'Country Club Estates'].map((n) => (
                    <span key={n} className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full">{n}</span>
                  ))}
                </div>

                <h3 className="font-bold text-navy-DEFAULT mb-3">Rowlett ZIP Codes</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['75088', '75089'].map((z) => (
                    <span key={z} className="bg-navy-DEFAULT/5 text-navy-DEFAULT font-mono text-sm px-3 py-1.5 rounded-full">{z}</span>
                  ))}
                </div>

                <h3 className="font-bold text-navy-DEFAULT mb-3">Landmarks &amp; Major Roads</h3>
                <p className="text-gray-600 text-sm mb-4">
                  We serve the areas around Lake Ray Hubbard shoreline, Liberty Grove Road,
                  Miller Road, Rowlett Road, and George Bush Turnpike (SH 190) throughout Rowlett.
                  We respond to both sides of the lake quickly from our East Dallas base.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">Services in Rowlett TX</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: 'House Lockout Rowlett', href: '/house-lockout' },
                    { title: 'Car Lockout Rowlett', href: '/car-lockout' },
                    { title: 'Rekeying Rowlett', href: '/rekeying' },
                    { title: 'Car Key Replacement Rowlett', href: '/car-key-replacement' },
                    { title: 'Deadbolt Installation Rowlett', href: '/deadbolt-installation' },
                    { title: 'Smart Lock Install Rowlett', href: '/smart-lock-installation' },
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
                { name: 'Locksmith Garland TX', href: '/locksmith-garland-tx' },
                { name: 'Locksmith Mesquite TX', href: '/locksmith-mesquite-tx' },
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
          <h2 className="text-2xl font-extrabold text-navy-DEFAULT text-center mb-8">Rowlett TX Locksmith FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Need a Locksmith in Rowlett TX?"
        subtitle="24/7 service across all Rowlett TX. Licensed & insured. Fast 25–45 min response."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/emergency-locksmith"
        secondaryLabel="Emergency Service"
      />
    </>
  )
}
