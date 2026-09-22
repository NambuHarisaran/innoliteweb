import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';
import Contact from '../components/sections/Contact.jsx';

export default function ContactPage() {
  return (
    <div className="pt-24 bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-body text-sm text-gray-500">
          <Link
            to="/"
            className="flex items-center gap-1.5 font-medium transition-colors hover:text-orange"
          >
            <HomeIcon className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="font-semibold text-navy">Contact</span>
        </nav>
      </div>
      <Contact />
    </div>
  );
}
