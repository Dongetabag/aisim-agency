import { Deliverable } from '@/store/cartStore'

export const deliverables: Deliverable[] = [
  // AI & AUTOMATION SERVICES (High-value differentiators)
  {
    id: 'ai-sales-agent',
    name: 'AI Sales Agent Setup',
    description: 'Complete AI-powered sales agent that qualifies leads, books calls, and nurtures prospects 24/7',
    price: 4999,
    category: 'AI Automation',
    estimatedDelivery: '5-7 business days',
    features: [
      'Custom AI agent trained on your business',
      'Lead qualification automation',
      'Calendar integration (Calendly/Cal)',
      'CRM integration (HubSpot, Pipedrive)',
      'Email & SMS follow-ups',
      'Performance dashboard',
      '30 days support included'
    ],
    badge: 'Popular',
  },
  {
    id: 'n8n-automation-suite',
    name: 'n8n Automation Suite',
    description: 'Custom workflow automations for your entire business operations using n8n',
    price: 2999,
    category: 'AI Automation',
    estimatedDelivery: '7-10 business days',
    features: [
      '5 custom automation workflows',
      'Lead capture & routing',
      'Email automation sequences',
      'Social media auto-posting',
      'Data sync between platforms',
      'Webhook integrations',
      'Documentation & training'
    ],
  },
  {
    id: 'ai-content-engine',
    name: 'AI Content Engine',
    description: 'Automated content creation system that generates SEO-optimized blogs, social posts, and newsletters',
    price: 3499,
    category: 'AI Automation',
    estimatedDelivery: '7-10 business days',
    features: [
      'AI-powered content generator',
      'SEO keyword integration',
      'Auto-scheduling system',
      'Multi-platform publishing',
      'Brand voice customization',
      'Content calendar automation',
      '50 articles/month capacity'
    ],
    badge: 'Best Value',
  },
  {
    id: 'chatbot-setup',
    name: 'AI Chatbot Implementation',
    description: 'Custom trained chatbot for customer support, lead gen, and FAQ handling',
    price: 1999,
    category: 'AI Automation',
    estimatedDelivery: '3-5 business days',
    features: [
      'Custom AI chatbot',
      'Website widget installation',
      'Knowledge base training',
      'Lead capture forms',
      'Human handoff system',
      'Analytics dashboard',
      'Multi-language support'
    ],
  },
  {
    id: 'ai-voice-agent',
    name: 'AI Voice Agent',
    description: 'AI phone agent that handles inbound calls, qualifies leads, and schedules appointments',
    price: 5999,
    category: 'AI Automation',
    estimatedDelivery: '10-14 business days',
    features: [
      'Custom voice agent training',
      'Natural conversation flow',
      'Call routing & transfer',
      'Appointment scheduling',
      'CRM integration',
      'Call recording & transcription',
      'Unlimited call capacity'
    ],
    badge: 'Premium',
  },
  {
    id: 'crm-automation',
    name: 'CRM Automation Package',
    description: 'Complete CRM setup with automated lead scoring, follow-ups, and pipeline management',
    price: 2499,
    category: 'AI Automation',
    estimatedDelivery: '5-7 business days',
    features: [
      'CRM platform setup (HubSpot/Pipedrive)',
      'Custom pipeline configuration',
      'Automated lead scoring',
      'Email sequence automation',
      'Task automation rules',
      'Reporting dashboards',
      'Team training session'
    ],
  },
  // TRADITIONAL AGENCY SERVICES
  {
    id: 'brand-identity',
    name: 'Brand Identity Package',
    description: 'Complete brand identity including logo, color palette, typography, and brand guidelines',
    price: 2499,
    category: 'Branding',
    estimatedDelivery: '7-10 business days',
    features: [
      'Custom logo design (3 concepts)',
      'Brand color palette',
      'Typography selection',
      'Brand guidelines document',
      'Social media asset pack',
      'Unlimited revisions'
    ],
  },
  {
    id: 'web-design',
    name: 'Website Design',
    description: 'Professional, responsive website design with modern UI/UX principles',
    price: 3499,
    category: 'Web Design',
    estimatedDelivery: '10-14 business days',
    features: [
      'Responsive design (mobile, tablet, desktop)',
      'Up to 10 pages',
      'Wireframes & mockups',
      'Interactive prototypes',
      'Design system',
      '2 rounds of revisions'
    ],
  },
  {
    id: 'web-development',
    name: 'Website Development',
    description: 'Full-stack website development with modern technologies',
    price: 5999,
    category: 'Development',
    estimatedDelivery: '14-21 business days',
    features: [
      'React/Next.js frontend',
      'Backend API integration',
      'Content management system',
      'SEO optimization',
      'Performance optimization',
      '3 months support included'
    ],
  },
  {
    id: 'landing-page',
    name: 'High-Converting Landing Page',
    description: 'Conversion-optimized landing page with A/B testing setup',
    price: 1499,
    category: 'Web Design',
    estimatedDelivery: '5-7 business days',
    features: [
      'Custom landing page design',
      'Mobile responsive',
      'A/B testing setup',
      'Analytics integration',
      'Lead capture forms',
      'Fast loading optimization'
    ],
  },
  {
    id: 'content-strategy',
    name: 'Content Strategy Package',
    description: 'Comprehensive content strategy and production for your brand',
    price: 1999,
    category: 'Content',
    estimatedDelivery: '7-10 business days',
    features: [
      'Content audit & analysis',
      'Content calendar (3 months)',
      '10 blog posts or articles',
      'Social media content templates',
      'SEO optimization',
      'Content style guide'
    ],
  },
  {
    id: 'seo-audit',
    name: 'SEO Audit & Optimization',
    description: 'Complete SEO audit with actionable optimization recommendations',
    price: 1299,
    category: 'SEO',
    estimatedDelivery: '5-7 business days',
    features: [
      'Technical SEO audit',
      'Keyword research',
      'Competitor analysis',
      'On-page optimization',
      'SEO strategy document',
      '3 months monitoring'
    ],
  },
  {
    id: 'social-media',
    name: 'Social Media Package',
    description: 'Complete social media strategy and content creation',
    price: 1799,
    category: 'Marketing',
    estimatedDelivery: '7-10 business days',
    features: [
      'Social media strategy',
      '30 social media posts',
      'Platform-specific optimizations',
      'Hashtag research',
      'Engagement tactics guide',
      'Analytics setup'
    ],
  },
  {
    id: 'email-marketing',
    name: 'Email Marketing Campaign',
    description: 'Professional email marketing templates and automation setup',
    price: 1499,
    category: 'Marketing',
    estimatedDelivery: '7-10 business days',
    features: [
      'Email template design (5 templates)',
      'Automation workflow setup',
      'A/B testing framework',
      'Segmentation strategy',
      'Copywriting & content',
      'Analytics integration'
    ],
  },
  {
    id: 'app-design',
    name: 'Mobile App Design',
    description: 'Native or cross-platform mobile app UI/UX design',
    price: 4499,
    category: 'App Design',
    estimatedDelivery: '14-18 business days',
    features: [
      'User research & personas',
      'User journey mapping',
      'Wireframes & mockups',
      'Interactive prototypes',
      'Design system',
      'Developer handoff files'
    ],
  },
  // CONSULTATION & STRATEGY
  {
    id: 'ai-strategy-call',
    name: 'AI Strategy Consultation',
    description: '90-minute deep-dive strategy session to identify AI automation opportunities in your business',
    price: 499,
    category: 'Consultation',
    estimatedDelivery: '1-2 business days',
    features: [
      '90-minute video call',
      'Business process audit',
      'AI opportunity identification',
      'ROI projections',
      'Implementation roadmap',
      'Recording & summary doc'
    ],
  },
  {
    id: 'tech-audit',
    name: 'Tech Stack Audit',
    description: 'Comprehensive audit of your current tech stack with optimization recommendations',
    price: 799,
    category: 'Consultation',
    estimatedDelivery: '3-5 business days',
    features: [
      'Full tech stack review',
      'Performance analysis',
      'Security assessment',
      'Cost optimization',
      'Integration opportunities',
      'Detailed report & recommendations'
    ],
  },
]

export const categories = ['All', 'AI Automation', 'Branding', 'Web Design', 'Development', 'Content', 'SEO', 'Marketing', 'App Design', 'Consultation']



