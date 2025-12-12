'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Check, ArrowRight, Sparkles, CreditCard } from 'lucide-react'
import SmartIntakeForm from '@/components/SmartIntakeForm'

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
        
        <SmartIntakeForm />
      </div>
    </div>
  )
}

