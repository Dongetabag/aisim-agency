import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">AiSim Agency</h3>
            <p className="text-gray-400">
              Transforming businesses with intelligent digital solutions and agency-quality deliverables.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/products" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/products?category=branding" className="hover:text-white transition-colors">Branding</Link></li>
              <li><Link href="/products?category=web-design" className="hover:text-white transition-colors">Web Design</Link></li>
              <li><Link href="/products?category=development" className="hover:text-white transition-colors">Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Started</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/intake" className="hover:text-white transition-colors">Smart Intake Form</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Browse Products</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AiSim Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}



