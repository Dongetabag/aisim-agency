'use client'

import Link from 'next/link'
import { Download, Eye, Bot, Workflow, Sparkles, MessageSquare, Phone, Database, Palette, Search, Share2, Mail, FileText, ArrowRight } from 'lucide-react'

const demos = [
  {
    id: 'ai-sales-agent',
    name: 'AI Sales Agent',
    description: 'Complete agent configuration with system prompts, sample conversations, lead scoring matrix, and integration setup.',
    icon: Bot,
    color: 'from-primary-500 to-primary-600',
    file: '/demos/ai-sales-agent-demo.md',
    price: '$4,999',
    highlights: ['System prompts', 'Sample conversations', 'Lead scoring', 'CRM integration'],
  },
  {
    id: 'n8n-automation',
    name: 'n8n Automation Suite',
    description: '5 complete workflow automations for lead capture, email nurture, social posting, meeting booking, and client onboarding.',
    icon: Workflow,
    color: 'from-cyan-500 to-cyan-600',
    file: '/demos/n8n-automation-suite-demo.json',
    price: '$2,999',
    highlights: ['5 workflow templates', '14+ integrations', 'Full documentation', 'Implementation guide'],
  },
  {
    id: 'ai-content-engine',
    name: 'AI Content Engine',
    description: 'Sample blog articles, LinkedIn posts, Twitter threads, and email newsletters with brand voice configuration.',
    icon: Sparkles,
    color: 'from-violet-500 to-violet-600',
    file: '/demos/ai-content-engine-demo.md',
    price: '$3,499',
    highlights: ['Blog article', 'LinkedIn posts', 'Twitter thread', 'Email newsletter'],
  },
  {
    id: 'ai-chatbot',
    name: 'AI Chatbot Implementation',
    description: 'Chatbot configuration, sample conversations, widget customization, and analytics dashboard metrics.',
    icon: MessageSquare,
    color: 'from-green-500 to-green-600',
    file: '/demos/ai-chatbot-demo.md',
    price: '$1,999',
    highlights: ['Chat scripts', 'Widget config', 'Human handoff', 'Analytics'],
  },
  {
    id: 'ai-voice-agent',
    name: 'AI Voice Agent',
    description: 'Voice agent scripts, call flow logic, objection handling, and phone system integration setup.',
    icon: Phone,
    color: 'from-orange-500 to-orange-600',
    file: '/demos/ai-voice-agent-demo.md',
    price: '$5,999',
    highlights: ['Call scripts', 'Routing logic', 'Objection handling', 'Transcripts'],
  },
  {
    id: 'crm-automation',
    name: 'CRM Automation Package',
    description: 'Complete HubSpot setup with pipeline configuration, lead scoring, email sequences, and automated reporting.',
    icon: Database,
    color: 'from-blue-500 to-blue-600',
    file: '/demos/crm-automation-demo.md',
    price: '$2,499',
    highlights: ['Pipeline setup', 'Lead scoring', 'Email sequences', 'Reporting'],
  },
  {
    id: 'brand-identity',
    name: 'Brand Identity Package',
    description: 'Logo concepts, color palette, typography system, brand voice guidelines, and social media assets.',
    icon: Palette,
    color: 'from-pink-500 to-pink-600',
    file: '/demos/brand-identity-demo.md',
    price: '$2,499',
    highlights: ['Logo concepts', 'Color palette', 'Typography', 'Brand voice'],
  },
  {
    id: 'seo-audit',
    name: 'SEO Audit & Optimization',
    description: 'Technical audit, keyword analysis, competitor research, and 90-day action plan with traffic projections.',
    icon: Search,
    color: 'from-emerald-500 to-emerald-600',
    file: '/demos/seo-audit-demo.md',
    price: '$1,299',
    highlights: ['Technical audit', 'Keyword research', 'Action plan', 'Projections'],
  },
  {
    id: 'social-media',
    name: 'Social Media Package',
    description: '30 social posts across LinkedIn, Twitter, and Instagram with hashtag strategy and engagement playbook.',
    icon: Share2,
    color: 'from-indigo-500 to-indigo-600',
    file: '/demos/social-media-demo.md',
    price: '$1,799',
    highlights: ['30 posts', 'Hashtag strategy', 'Content calendar', 'Analytics'],
  },
  {
    id: 'email-marketing',
    name: 'Email Marketing Campaign',
    description: '5 email templates with automation workflows, A/B testing framework, and segmentation strategy.',
    icon: Mail,
    color: 'from-red-500 to-red-600',
    file: '/demos/email-marketing-demo.md',
    price: '$1,499',
    highlights: ['5 templates', 'Automations', 'A/B testing', 'Segmentation'],
  },
  {
    id: 'content-strategy',
    name: 'Content Strategy Package',
    description: 'Content audit, 3-month calendar, 10 blog articles, SEO optimization, and distribution strategy.',
    icon: FileText,
    color: 'from-amber-500 to-amber-600',
    file: '/demos/content-strategy-demo.md',
    price: '$1,999',
    highlights: ['10 articles', 'Content calendar', 'SEO strategy', 'Style guide'],
  },
]

export default function DemosPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sample Deliverables
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See exactly what you get before you buy. Each demo shows real output
            from our services, customized for AISim Agency as the example client.
          </p>
        </div>

        {/* Demos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo) => {
            const Icon = demo.icon
            return (
              <div
                key={demo.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className={`h-2 bg-gradient-to-r ${demo.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${demo.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg font-bold text-gray-900">{demo.price}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {demo.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {demo.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {demo.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={demo.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                    >
                      <Eye className="w-4 h-4" />
                      Preview
                    </a>
                    <a
                      href={demo.file}
                      download
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${demo.color} text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium`}
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Your Custom Deliverables?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            These demos show what's possible. Your deliverables will be customized
            specifically for your business, industry, and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
