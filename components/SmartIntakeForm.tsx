'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Check, ArrowRight, Sparkles, Plus, X, CreditCard } from 'lucide-react'
import { deliverables, categories } from '@/data/deliverables'
import { useCartStore, Deliverable } from '@/store/cartStore'
import { motion, AnimatePresence } from 'framer-motion'

interface FormData {
  projectType: string
  industry: string
  budget: string
  timeline: string
  goals: string[]
  description: string
  companyName: string
  email: string
  additionalNeeds: string
}

export default function SmartIntakeForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const addItem = useCartStore(state => state.addItem)
  
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    industry: '',
    budget: '',
    timeline: '',
    goals: [],
    description: '',
    companyName: '',
    email: '',
    additionalNeeds: '',
  })
  
  const [recommendedDeliverables, setRecommendedDeliverables] = useState<Deliverable[]>([])
  const [selectedDeliverables, setSelectedDeliverables] = useState<string[]>([])

  useEffect(() => {
    const productId = searchParams.get('product')
    if (productId) {
      const product = deliverables.find(d => d.id === productId)
      if (product) {
        setSelectedDeliverables([productId])
        setCurrentStep(3) // Jump to deliverables selection
      }
    }
  }, [searchParams])

  // Intelligent matching algorithm
  useEffect(() => {
    if (currentStep === 3 && formData.projectType && formData.budget) {
      const recommendations = recommendDeliverables(formData)
      setRecommendedDeliverables(recommendations)
      if (recommendations.length > 0 && selectedDeliverables.length === 0) {
        // Auto-select top recommendation
        setSelectedDeliverables([recommendations[0].id])
      }
    }
  }, [currentStep, formData.projectType, formData.budget])

  const recommendDeliverables = (data: FormData): Deliverable[] => {
    let scored: { deliverable: Deliverable; score: number }[] = []

    deliverables.forEach((deliverable) => {
      let score = 0

      // Budget matching
      const budgetNum = parseInt(data.budget)
      if (budgetNum >= deliverable.price * 0.8 && budgetNum <= deliverable.price * 2) {
        score += 3
      } else if (budgetNum >= deliverable.price) {
        score += 2
      }

      // Project type matching
      const projectTypeLower = data.projectType.toLowerCase()
      if (projectTypeLower.includes('brand') && deliverable.category === 'Branding') score += 3
      if (projectTypeLower.includes('web') && (deliverable.category === 'Web Design' || deliverable.category === 'Development')) score += 3
      if (projectTypeLower.includes('app') && deliverable.category === 'App Design') score += 3
      if (projectTypeLower.includes('content') && deliverable.category === 'Content') score += 3
      if (projectTypeLower.includes('seo') && deliverable.category === 'SEO') score += 3

      // Goals matching
      data.goals.forEach(goal => {
        const goalLower = goal.toLowerCase()
        if (goalLower.includes('brand') && deliverable.category === 'Branding') score += 1
        if (goalLower.includes('web') && (deliverable.category === 'Web Design' || deliverable.category === 'Development')) score += 1
        if (goalLower.includes('content') && deliverable.category === 'Content') score += 1
        if (goalLower.includes('seo') && deliverable.category === 'SEO') score += 1
        if (goalLower.includes('social') && deliverable.category === 'Marketing') score += 1
      })

      // Timeline matching
      if (data.timeline) {
        const timelineNum = parseInt(data.timeline)
        const deliveryDays = parseInt(deliverable.estimatedDelivery.split('-')[0])
        if (timelineNum >= deliveryDays && timelineNum <= deliveryDays * 2) score += 2
      }

      if (score > 0) {
        scored.push({ deliverable, score })
      }
    })

    return scored
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map(item => item.deliverable)
  }

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const toggleGoal = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }))
  }

  const toggleDeliverable = (id: string) => {
    setSelectedDeliverables(prev =>
      prev.includes(id)
        ? prev.filter(d => d !== id)
        : [...prev, id]
    )
  }

  const handleAddToCart = () => {
    selectedDeliverables.forEach(id => {
      const deliverable = deliverables.find(d => d.id === id)
      if (deliverable) {
        addItem(deliverable, {
          projectType: formData.projectType,
          companyName: formData.companyName,
          email: formData.email,
        })
      }
    })
    router.push('/cart')
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const goals = [
    'Build a strong brand identity',
    'Create a professional website',
    'Improve online visibility',
    'Generate more leads',
    'Engage with social media',
    'Optimize for search engines',
    'Launch a mobile app',
    'Improve content marketing',
  ]

  const totalPrice = selectedDeliverables.reduce((sum, id) => {
    const deliverable = deliverables.find(d => d.id === id)
    return sum + (deliverable?.price || 0)
  }, 0)

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gray-100 px-8 py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Step {currentStep} of 4</span>
          <span className="text-sm text-gray-500">{Math.round((currentStep / 4) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      <div className="p-8">
        <AnimatePresence mode="wait">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell Us About Your Project</h2>
                <p className="text-gray-600">Help us understand what you're looking to achieve.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => updateFormData('companyName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your Company Name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What type of project are you working on? *
                </label>
                <input
                  type="text"
                  value={formData.projectType}
                  onChange={(e) => updateFormData('projectType', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="e.g., New website, Brand refresh, Mobile app, etc."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => updateFormData('industry', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select an industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                  <option value="education">Education</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="food-beverage">Food & Beverage</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </motion.div>
          )}

          {/* Step 2: Goals and Requirements */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">What are your goals?</h2>
                <p className="text-gray-600">Select all that apply. We'll use this to recommend the best solutions.</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {goals.map((goal) => (
                  <button
                    key={goal}
                    onClick={() => toggleGoal(goal)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      formData.goals.includes(goal)
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{goal}</span>
                      {formData.goals.includes(goal) && (
                        <Check className="w-5 h-5 text-primary-600" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => updateFormData('description', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us more about your project, target audience, and any specific requirements..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range *
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => updateFormData('budget', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select budget</option>
                    <option value="1000">$1,000 - $2,500</option>
                    <option value="2500">$2,500 - $5,000</option>
                    <option value="5000">$5,000 - $10,000</option>
                    <option value="10000">$10,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline (days) *
                  </label>
                  <input
                    type="number"
                    value={formData.timeline}
                    onChange={(e) => updateFormData('timeline', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="e.g., 30"
                    min="1"
                    required
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Recommended Deliverables */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center mb-2">
                  <Sparkles className="w-6 h-6 text-primary-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">Recommended Deliverables</h2>
                </div>
                <p className="text-gray-600">
                  Based on your project details, here's what we recommend. Select the deliverables you'd like to purchase.
                </p>
              </div>

              <div className="space-y-4">
                {recommendedDeliverables.length > 0 ? (
                  recommendedDeliverables.map((deliverable) => (
                    <div
                      key={deliverable.id}
                      className={`border-2 rounded-lg p-6 transition-all cursor-pointer ${
                        selectedDeliverables.includes(deliverable.id)
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleDeliverable(deliverable.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">
                              {deliverable.name}
                            </h3>
                            {selectedDeliverables.includes(deliverable.id) && (
                              <Check className="w-5 h-5 text-primary-600 ml-2" />
                            )}
                          </div>
                          <p className="text-gray-600 mb-3">{deliverable.description}</p>
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <span>Estimated delivery: {deliverable.estimatedDelivery}</span>
                          </div>
                          <ul className="grid grid-cols-2 gap-2 mb-4">
                            {deliverable.features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-start text-sm text-gray-600">
                                <Check className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="ml-6 text-right">
                          <div className="text-2xl font-bold text-primary-600">
                            ${deliverable.price.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>Loading recommendations...</p>
                  </div>
                )}
              </div>

              {recommendedDeliverables.length > 0 && (
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">
                        {selectedDeliverables.length} deliverable{selectedDeliverables.length !== 1 ? 's' : ''} selected
                      </p>
                      <p className="text-sm text-gray-600">Total: ${totalPrice.toLocaleString()}</p>
                    </div>
                    <button
                      onClick={handleAddToCart}
                      disabled={selectedDeliverables.length === 0}
                      className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center"
                    >
                      Add to Cart
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Step 4: Review and Submit */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Your Selection</h2>
                <p className="text-gray-600">Review your selected deliverables before proceeding to checkout.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Project Information</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Company:</strong> {formData.companyName}</p>
                    <p><strong>Project Type:</strong> {formData.projectType}</p>
                    <p><strong>Budget:</strong> ${formData.budget}</p>
                    <p><strong>Timeline:</strong> {formData.timeline} days</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Selected Deliverables</h3>
                  <div className="space-y-2">
                    {selectedDeliverables.map(id => {
                      const deliverable = deliverables.find(d => d.id === id)
                      return deliverable ? (
                        <div key={id} className="flex justify-between text-sm">
                          <span>{deliverable.name}</span>
                          <span className="font-semibold">${deliverable.price.toLocaleString()}</span>
                        </div>
                      ) : null
                    })}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-300 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary-600">${totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes or Requirements
                </label>
                <textarea
                  value={formData.additionalNeeds}
                  onChange={(e) => updateFormData('additionalNeeds', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>

              <button
                onClick={handleAddToCart}
                disabled={selectedDeliverables.length === 0}
                className="w-full bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center text-lg"
              >
                <CreditCard className="mr-2 w-5 h-5" />
                Proceed to Checkout
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            disabled={
              (currentStep === 1 && (!formData.companyName || !formData.email || !formData.projectType)) ||
              (currentStep === 2 && (!formData.budget || !formData.timeline)) ||
              currentStep === 4
            }
            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center"
          >
            Next
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

