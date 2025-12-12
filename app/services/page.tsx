import Link from 'next/link'
import { ArrowRight, Palette, Code, Smartphone, Megaphone, Search, FileText } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Palette,
      title: 'Branding & Identity',
      description: 'Complete brand identity packages that define your business\'s visual and emotional presence.',
      link: '/products?category=Branding',
    },
    {
      icon: Code,
      title: 'Web Design & Development',
      description: 'Modern, responsive websites built with the latest technologies and best practices.',
      link: '/products?category=Web Design',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Design',
      description: 'Native and cross-platform mobile applications designed for exceptional user experiences.',
      link: '/products?category=App Design',
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Comprehensive marketing strategies including social media, email campaigns, and content creation.',
      link: '/products?category=Marketing',
    },
    {
      icon: Search,
      title: 'SEO & Optimization',
      description: 'Search engine optimization services to improve your online visibility and rankings.',
      link: '/products?category=SEO',
    },
    {
      icon: FileText,
      title: 'Content Strategy',
      description: 'Strategic content planning and creation to engage your audience and drive results.',
      link: '/products?category=Content',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. 
            Each service is available as an instant purchase through our smart intake system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
                >
                  View Products
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/intake"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  )
}



