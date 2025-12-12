# AiSim Agency Website

A modern, intelligent e-commerce platform for purchasing agency-quality digital deliverables instantly.

## Features

- **Smart Intake Form**: Intelligent form that analyzes user needs and recommends relevant deliverables
- **Instant Purchase**: Purchase agency-quality products directly from the intake form
- **Product Catalog**: Complete catalog of deliverables with detailed descriptions and pricing
- **Shopping Cart**: Full cart functionality with quantity management
- **Responsive Design**: Mobile-first, fully responsive design
- **Modern Tech Stack**: Built with Next.js 14, React, TypeScript, and Tailwind CSS

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/
├── app/                  # Next.js App Router pages
│   ├── page.tsx         # Homepage
│   ├── products/        # Products catalog
│   ├── services/        # Services page
│   ├── intake/          # Smart intake form
│   ├── cart/            # Shopping cart
│   ├── checkout/        # Checkout page
│   ├── about/           # About page
│   └── contact/         # Contact page
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── SmartIntakeForm.tsx
├── store/              # State management
│   └── cartStore.ts    # Cart state with Zustand
├── data/               # Static data
│   └── deliverables.ts # Product/service definitions
└── public/             # Static assets
```

## Key Features Explained

### Smart Intake Form

The intelligent intake form uses a recommendation algorithm that:
- Analyzes project type and industry
- Matches budget constraints
- Considers timeline requirements
- Scores and ranks relevant deliverables
- Enables instant purchase

### Product System

Each deliverable includes:
- Detailed description
- Feature list
- Pricing
- Estimated delivery time
- Category classification

### Cart System

- Persistent cart storage (localStorage)
- Quantity management
- Price calculations
- Easy checkout flow

## Customization

### Adding Products

Edit `data/deliverables.ts` to add new products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  description: 'Description',
  price: 1999,
  category: 'Category',
  estimatedDelivery: '7-10 business days',
  features: ['Feature 1', 'Feature 2'],
}
```

### Styling

Colors and styling can be customized in `tailwind.config.js`.

## Deployment

This project can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## License

Copyright © 2024 AiSim Agency. All rights reserved.



