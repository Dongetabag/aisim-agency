import Link from 'next/link'
import { ArrowRight, Zap, Shield, Sparkles, Bot, Workflow, MessageSquare, Phone, TrendingUp, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-primary-300 text-sm font-medium">AI-Powered Agency Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Automate Your Business
              <span className="block bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">With AI Agents</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Deploy AI sales agents, content engines, and workflow automations that work 24/7.
              Agency-quality solutions ready to purchase and implement today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/intake"
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg shadow-primary-500/30 flex items-center justify-center"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/products"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                View All Services
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>10x Productivity</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span>100+ Clients Served</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>48hr Deployment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Automation Services</h2>
            <p className="text-xl text-gray-600">Deploy intelligent systems that work around the clock</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-all border border-gray-200 group">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Sales Agent</h3>
              <p className="text-gray-600 mb-4">
                24/7 lead qualification, appointment booking, and nurture sequences powered by AI.
              </p>
              <div className="text-2xl font-bold text-primary-600">$4,999</div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-all border border-gray-200 group">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Workflow className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">n8n Automation Suite</h3>
              <p className="text-gray-600 mb-4">
                Custom workflow automations connecting all your tools and eliminating manual tasks.
              </p>
              <div className="text-2xl font-bold text-primary-600">$2,999</div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-all border border-gray-200 group">
              <div className="bg-gradient-to-br from-violet-500 to-violet-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Content Engine</h3>
              <p className="text-gray-600 mb-4">
                Auto-generate SEO blogs, social posts, and newsletters with your brand voice.
              </p>
              <div className="text-2xl font-bold text-primary-600">$3,499</div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-all border border-gray-200 group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Chatbot</h3>
              <p className="text-gray-600 mb-4">
                Custom-trained support chatbot for lead gen and customer service automation.
              </p>
              <div className="text-2xl font-bold text-primary-600">$1,999</div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-all border border-gray-200 group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Voice Agent</h3>
              <p className="text-gray-600 mb-4">
                AI phone agent that handles inbound calls, qualifies leads, and books appointments.
              </p>
              <div className="text-2xl font-bold text-primary-600">$5,999</div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 hover:shadow-xl transition-all border-2 border-primary-200 group relative">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Best Value
              </div>
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Strategy Call</h3>
              <p className="text-gray-600 mb-4">
                90-min deep-dive to identify AI opportunities and build your automation roadmap.
              </p>
              <div className="text-2xl font-bold text-primary-600">$499</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products?category=AI%20Automation"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg"
            >
              View All AI Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose AiSim Agency?</h2>
            <p className="text-xl text-gray-600">We deliver results, not just deliverables</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">48-Hour Deployment</h3>
              <p className="text-gray-600">
                Most AI automations are live within 48 hours. No months-long enterprise timelines.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ROI Guaranteed</h3>
              <p className="text-gray-600">
                Our AI solutions pay for themselves. Average clients see 10x ROI within 90 days.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Done-For-You</h3>
              <p className="text-gray-600">
                We handle everything from setup to training. You just reap the benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 relative">
              <div className="text-6xl text-primary-200 absolute top-4 left-6">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 mb-6 pt-8">
                  The AI Sales Agent paid for itself in the first week. We went from 2 booked calls per week to 15+. Game changer.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    JM
                  </div>
                  <div>
                    <div className="font-semibold">Jason Martinez</div>
                    <div className="text-sm text-gray-500">CEO, TechFlow Solutions</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 relative">
              <div className="text-6xl text-primary-200 absolute top-4 left-6">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 mb-6 pt-8">
                  Their n8n automations saved us 40+ hours per week. The ROI calculation they showed us was conservative.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
                    SK
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Kim</div>
                    <div className="text-sm text-gray-500">Operations Director, ScaleUp</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 relative">
              <div className="text-6xl text-primary-200 absolute top-4 left-6">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 mb-6 pt-8">
                  Best agency experience I've had. Fast delivery, clear communication, and the results speak for themselves.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold">
                    MP
                  </div>
                  <div>
                    <div className="font-semibold">Michael Park</div>
                    <div className="text-sm text-gray-500">Founder, GrowthLab</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Book a free AI strategy call and discover how we can 10x your productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/intake?product=ai-strategy-call"
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg shadow-primary-500/30 inline-flex items-center justify-center"
            >
              Book Strategy Call - $499
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/products"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              Browse All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}



