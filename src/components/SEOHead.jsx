import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import seoData, { SITE_URL, SITE_NAME, DEFAULT_IMAGE } from '../data/seo.js';

/**
 * SEOHead — dynamically updates <head> meta tags per route.
 *
 * Manages: <title>, meta description, keywords, canonical, Open Graph,
 * Twitter Card tags, and JSON-LD structured data.
 *
 * Drop this into App.jsx once — it reads the current pathname and applies
 * the matching seoData entry automatically.
 */
export default function SEOHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = seoData[pathname] || seoData['/'];

    // ── Title ──────────────────────────────────────────────
    document.title = seo.title;

    // ── Helper: set or create a <meta> tag ────────────────
    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // ── Standard meta ─────────────────────────────────────
    setMeta('name', 'description', seo.description);
    setMeta('name', 'keywords', seo.keywords);

    // ── Canonical ─────────────────────────────────────────
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', seo.canonical);

    // ── Open Graph ────────────────────────────────────────
    setMeta('property', 'og:title', seo.og.title);
    setMeta('property', 'og:description', seo.og.description);
    setMeta('property', 'og:image', seo.og.image);
    setMeta('property', 'og:type', seo.og.type);
    setMeta('property', 'og:url', seo.canonical);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:locale', 'en_IN');

    // ── Twitter Card ──────────────────────────────────────
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', seo.og.title);
    setMeta('name', 'twitter:description', seo.og.description);
    setMeta('name', 'twitter:image', seo.og.image);

    // ── JSON-LD Structured Data ───────────────────────────
    // Remove any previously injected LD+JSON
    const existingLD = document.getElementById('seo-jsonld');
    if (existingLD) existingLD.remove();

    const ldScript = document.createElement('script');
    ldScript.id = 'seo-jsonld';
    ldScript.type = 'application/ld+json';

    // Build JSON-LD graph
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'Nexus Innolite Technologies Private Limited',
      alternateName: 'InnoLite Technologies',
      url: SITE_URL,
      logo: `${SITE_URL}/1.png`,
      image: DEFAULT_IMAGE,
      description:
        'Hands-on training in AI, Robotics, Web Development, Drone Technology, and Embedded Systems in Madurai, Tamil Nadu.',
      telephone: '+91-98421-81701',
      email: 'innolitetechnology@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '653, 14th East Cross Street, Anna Nagar',
        addressLocality: 'Madurai',
        addressRegion: 'Tamil Nadu',
        postalCode: '625020',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 9.9252,
        longitude: 78.1198,
      },
      sameAs: [
        'https://www.linkedin.com/in/nexus-innolite-b96372422',
        'https://www.instagram.com/innolite_technologies',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '200',
        bestRating: '5',
      },
    };

    // Page-specific schema additions
    const schemas = [orgSchema];

    if (pathname === '/') {
      // WebSite schema for sitelinks search box
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
      });
    }

    if (pathname === '/courses') {
      // ItemList of courses
      const courseItems = [
        'Artificial Intelligence (AI)',
        'Robotics',
        'Java Development',
        'Python Development',
        'Website Development',
        'Mobile App Development',
        'Data Analytics & Power BI',
        'UI/UX Design',
        'PCB Designing & Embedded Systems',
        'Drone Technology',
      ];
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Courses at InnoLite Technologies',
        numberOfItems: courseItems.length,
        itemListElement: courseItems.map((name, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name,
        })),
      });
    }

    if (pathname === '/contact') {
      // Local Business for contact page
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'InnoLite Technologies',
        image: DEFAULT_IMAGE,
        telephone: '+91-98421-81701',
        email: 'innolitetechnology@gmail.com',
        url: `${SITE_URL}/contact`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '653, 14th East Cross Street, Anna Nagar',
          addressLocality: 'Madurai',
          addressRegion: 'Tamil Nadu',
          postalCode: '625020',
          addressCountry: 'IN',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
      });
    }

    ldScript.textContent = JSON.stringify(
      schemas.length === 1 ? schemas[0] : schemas,
    );
    document.head.appendChild(ldScript);

    // ── Cleanup on unmount ────────────────────────────────
    return () => {
      const ld = document.getElementById('seo-jsonld');
      if (ld) ld.remove();
    };
  }, [pathname]);

  return null; // This component renders nothing visible
}
