import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, SITE_URL, BUSINESS_NAME, RATING, REVIEW_COUNT } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Key Duplication Dallas TX | Same-Day from $3 | (917) 203-4678',
  description:
    'Key duplication near you in Dallas TX. House keys from $3, transponder car keys from $20, mailbox key copy, push-to-start fobs. Same-day. Licensed locksmith. Call (917) 203-4678.',
  alternates: { canonical: `${SITE_URL}/key-duplication` },
  keywords: 'key duplication dallas tx, key duplication service near me, house key copy near me, keys made near me, key copies near me, mailbox key copy near me, how much does it cost to duplicate a house key',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/key-duplication/#service`,
  name: 'Key Duplication Dallas TX',
  description: 'Same-day key duplication in Dallas TX — house keys from $3, transponder car keys from $20, mailbox keys, push-to-start fobs.',
  url: `${SITE_URL}/key-duplication`,
  provider: {
    '@type': 'Locksmith',
    name: BUSINESS_NAME,
    telephone: '+19172034678',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: RATING, reviewCount: REVIEW_COUNT, bestRating: '5' },
  },
  offers: { '@type': 'Offer', priceRange: '$3–$200', priceCurrency: 'USD' },
  areaServed: { '@type': 'City', name: 'Dallas', containedIn: 'TX' },
  availableChannel: {
    '@type': 'ServiceChannel',
    servicePhone: { '@type': 'ContactPoint', telephone: '+19172034678', contactType: 'customer service', availableLanguage: 'English' },
  },
}

const faqs = [
  {
    q: 'How much does key duplication cost?',
    a: "Standard house keys cost $3–$15 each. Car keys with transponder chips cost $20–$80 for a copy (programming included). Push-to-start fob copies run $75–$200. Prices depend on key type and complexity.",
  },
  {
    q: 'Can you copy a "do not duplicate" key?',
    a: 'Legally, "do not duplicate" stamped on a key is an honor system — we can physically copy most keys. However, patented restricted keys (like Medeco or Mul-T-Lock) require authorization and cannot be duplicated by us. We recommend using restricted keys for maximum security.',
  },
  {
    q: 'Can you duplicate a worn or damaged key?',
    a: "It depends on the level of wear. If the cuts are still identifiable, we can often copy it. However, copying a heavily worn key may produce an unreliable copy. We recommend rekeying the lock to get fresh, accurate new keys instead.",
  },
  {
    q: 'Do you make car key copies with programming included?',
    a: 'Yes. We cut and program transponder car key copies on-site. You get a fully working key, not just a cut key. This works for most Toyota, Honda, Ford, Chevrolet, Nissan, and many other vehicles.',
  },
  {
    q: 'Can you copy mailbox or padlock keys?',
    a: 'Yes — we copy mailbox keys, padlock keys, cabinet keys, and most other standard key types. Bring your original key and we can usually make a copy in minutes.',
  },
  {
    q: 'How much does it cost to duplicate a house key in Dallas?',
    a: 'A standard house key copy costs $3–$15 in Dallas TX. High-security or restricted keys cost more. We carry cutting equipment on every service vehicle so you get your key copy on the spot.',
  },
  {
    q: 'Where can I get a key made near me in Dallas TX?',
    a: "Call (917) 203-4678 and we'll come to you anywhere in Dallas TX. We're a mobile locksmith — no need to drive to a hardware store. We cut and program keys on-site, same day.",
  },
]

export default function KeyDuplicationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Key Duplication' }]} />
      <PageHero
        badge="🗝️ Key Duplication"
        title="Key Duplication in Dallas TX — Same Day"
        subtitle="Fast, accurate key copies for all key types — house, car, transponder, mailbox, and more. Starting at $3 for standard keys. Licensed locksmith with on-site cutting equipment."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'Rekeying Services', href: '/rekeying', variant: 'outline' },
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">
                  Key Types We Duplicate
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'House & Door Keys', icon: '🏠', desc: 'Standard residential keys — front door, back door, deadbolt. Copies from $3–$15.', price: '$3–$15' },
                    { title: 'Transponder Car Keys', icon: '🚗', desc: 'Chip keys with programming for Toyota, Honda, Ford, and most major brands.', price: '$20–$80' },
                    { title: 'Push-to-Start Key Fobs', icon: '📲', desc: 'Modern proximity key fobs programmed on-site for your specific vehicle.', price: '$75–$200' },
                    { title: 'Mailbox Keys', icon: '📬', desc: 'Apartment and condo mailbox keys. Quick in-and-out service.', price: '$5–$20' },
                    { title: 'Padlock Keys', icon: '🔒', desc: 'Master Lock, American Lock, and most standard padlock keys duplicated quickly.', price: '$3–$15' },
                    { title: 'Cabinet & Office Keys', icon: '🗄️', desc: 'Filing cabinet, desk drawer, and commercial cabinet keys.', price: '$5–$20' },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:border-gold-DEFAULT transition-all"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="text-3xl">{card.icon}</div>
                        <span className="bg-gold-DEFAULT/10 text-gold-dark text-xs font-bold px-2 py-1 rounded">
                          {card.price}
                        </span>
                      </div>
                      <h3 className="font-bold text-navy-DEFAULT mb-2">{card.title}</h3>
                      <p className="text-gray-600 text-sm">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">
                  Key Duplication Pricing
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-navy-DEFAULT text-white">
                        <th className="text-left px-4 py-3 rounded-tl-lg">Key Type</th>
                        <th className="text-left px-4 py-3 rounded-tr-lg">Price per Key</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: 'Standard house/door key', price: '$3 – $15' },
                        { type: 'Mailbox or cabinet key', price: '$5 – $20' },
                        { type: 'Transponder chip key (cut + programmed)', price: '$20 – $80' },
                        { type: 'Laser-cut / sidewinder car key', price: '$50 – $150' },
                        { type: 'Push-to-start key fob', price: '$75 – $200' },
                        { type: 'High-security (Medeco, Mul-T-Lock)', price: 'Call for quote' },
                      ].map((row, i) => (
                        <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 text-gray-700">{row.type}</td>
                          <td className="px-4 py-3 font-bold text-navy-DEFAULT">{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <ServiceSidebar
              pricing={[
                { label: 'Standard Key', price: '$3–$15' },
                { label: 'Transponder Key', price: '$20–$80' },
                { label: 'Push-to-Start Fob', price: '$75–$200' },
                { label: 'Mailbox/Cabinet', price: '$5–$20' },
              ]}
              relatedServices={[
                { name: 'Car Key Replacement', href: '/car-key-replacement' },
                { name: 'Transponder Key Programming', href: '/transponder-key-programming' },
                { name: 'Rekeying Services', href: '/rekeying' },
                { name: 'Residential Locksmith', href: '/residential-locksmith' },
              ]}
              areas
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT text-center mb-8">
            Key Duplication FAQs
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Need a Key Copy in Dallas?"
        subtitle="Same-day key duplication for all key types. House keys from $3, transponder keys from $20."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/rekeying"
        secondaryLabel="Rekeying Services"
      />
    </>
  )
}
