'use client'

import { Suspense } from 'react'
import { Sparkles, Loader2 } from 'lucide-react'
import SmartIntakeForm from '@/components/SmartIntakeForm'

function IntakeFormLoading() {
  return (
    <div className="bg-white rounded-lg shadow-xl p-12 text-center">
      <Loader2 className="w-8 h-8 text-primary-600 animate-spin mx-auto mb-4" />
      <p className="text-gray-600">Loading intake form...</p>
    </div>
  )
}

export default function IntakePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Smart Project Intake Form
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us about your project, and we'll intelligently match you with the perfect
            agency-quality deliverables. Purchase instantly when you're ready.
          </p>
        </div>

        <Suspense fallback={<IntakeFormLoading />}>
          <SmartIntakeForm />
        </Suspense>
      </div>
    </div>
  )
}
