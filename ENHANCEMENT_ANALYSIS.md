# PROMETHEUS v7.0 Enhancement Analysis

## STEP 1: INTENT FINGERPRINT

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                        INTENT FINGERPRINT v2.0                                ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║ PRIMARY_GOAL:     Create a complete, production-ready website for AiSim       ║
║                   Agency with integrated e-commerce functionality for          ║
║                   immediate purchase of custom agency deliverables             ║
║                                                                               ║
║ CORE_TASK:        Design and build AiSim Agency website including:            ║
║                   - Full product/service catalog                              ║
║                   - Smart intake form with instant purchase capabilities      ║
║                   - Agency-quality deliverables available for purchase        ║
║                                                                               ║
║ TASK_TYPE:        CODE | GENERATION | CREATIVE                                ║
║                                                                               ║
║ DOMAIN:           WEB DEVELOPMENT | E-COMMERCE | BUSINESS                     ║
║                                                                               ║
║ CONSTRAINTS:      - Must use provided code as starting point                  ║
║                   - Smart/intelligent system functionality required            ║
║                   - Intake form must enable instant purchases                 ║
║                   - Deliverables must be "agency quality"                     ║
║                                                                               ║
║ SUCCESS_CRITERIA: - Functional website with products/services                ║
║                   - Working intake form with purchase integration             ║
║                   - Professional, agency-quality design                       ║
║                   - Instant purchase capability for deliverables              ║
║                                                                               ║
║ PERSONA:          Web Developer / Full-Stack Engineer                         ║
║                                                                               ║
║ AUDIENCE:         AiSim Agency (client)                                       ║
║                                                                               ║
║ FORMAT:           Complete website codebase (HTML/CSS/JS + backend logic)     ║
║                                                                               ║
║ TONE:             Professional, modern, commercial                             ║
║                                                                               ║
║ IMPLICIT_NEEDS:   - Modern, responsive design                                 ║
║                   - Payment processing capability                             ║
║                   - Product/service management system                         ║
║                   - User experience optimization                              ║
║                   - Scalable architecture                                     ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

## STEP 2: CLASSIFICATION

- **Task Type**: CODE + GENERATION + CREATIVE
- **Complexity**: ENTERPRISE (full website with e-commerce)
- **Domain**: WEB DEVELOPMENT | E-COMMERCE
- **Domain Engine**: CodeForge Engine
- **Target Model**: Claude (assumed, as most capable for full-stack development)
- **Reasoning Pattern**: Direct (code implementation doesn't need explicit CoT)

## STEP 3: WEAKNESS ANALYSIS (Original Prompt)

| Dimension | Score | Issue |
|-----------|-------|-------|
| Task Clarity | 2/5 | Ambiguous phrasing, typos, unclear "smart system" definition |
| Context | 1/5 | Missing: design requirements, tech stack, product/service details |
| Output Format | 1/5 | No specification of deliverables, file structure, or technology |
| Constraints | 2/5 | Vague requirements, no technical specifications |
| Examples | 0/5 | No examples provided |
| Success Criteria | 1/5 | Subjective quality measure, no measurable metrics |

**Original Score Estimate**: ~35/100

## STEP 4: ENHANCED PROMPT (PROMETHEUS v7.0 - CodeForge Engine)

```xml
<code_prompt>
<language>JavaScript (ES6+)</language>
<framework>React/Next.js (frontend), Node.js/Express (backend), Modern CSS</framework>

<task>
Design and implement a complete, production-ready website for AiSim Agency with integrated e-commerce functionality that enables visitors to immediately purchase custom agency-quality deliverables through an intelligent intake form system.
</task>

<context>
AiSim Agency is a digital agency that needs a modern website to showcase their products and services. The system must be "smart" - meaning it should intelligently guide users through the intake process, recommend relevant deliverables based on their needs, and enable instant purchase capabilities. The starting codebase should serve as a foundation, but the final implementation should be a complete, polished, agency-quality website.
</context>

<requirements>
<functional>
- Complete website with homepage, products page, services page, about page, contact page
- Product/service catalog with detailed descriptions, pricing, and features
- Intelligent intake form that:
  * Collects user needs and project requirements
  * Dynamically suggests relevant agency deliverables
  * Displays pricing and allows instant purchase/add-to-cart
  * Validates input and guides users through the process
- Shopping cart/checkout system
- Responsive design (mobile, tablet, desktop)
- Modern, professional UI/UX design
- Fast loading times and optimized performance
</functional>
<non_functional>
- Performance: Lighthouse score ≥90, loading time <3s
- Security: Secure payment integration, input validation, XSS protection
- Scalability: Modular code architecture, easy to extend
- Accessibility: WCAG 2.1 AA compliance
- Browser compatibility: Latest 2 versions of major browsers
</non_functional>
</requirements>

<constraints>
- MUST: Use provided code as foundation/starting point
- MUST: Implement agency-quality design standards
- MUST: Include instant purchase functionality in intake form
- MUST: Be production-ready (no placeholder content)
- MUST_NOT: Use deprecated technologies or insecure practices
- MUST_NOT: Create placeholder/fake functionality
- Follow: Modern web development best practices
</constraints>

<output_specification>
- Include: Complete source code, README with setup instructions, documentation
- Format: Organized file structure with clear separation of concerns
- Explain: Architecture decisions and key implementation details
- Structure:
  * Frontend components (React components, pages, styles)
  * Backend API (if needed for payments/products)
  * Configuration files
  * Documentation
</output_specification>

<example_io>
Input: User fills out intake form selecting "Brand Identity Package"
Output: Form shows available deliverables (logo design, brand guidelines, etc.) with pricing, user can add to cart and checkout immediately
</example_io>
</code_prompt>
```

## STEP 5: COGNITIVE ARCHITECTURE APPLICATION

**ZONE 1 (Primacy)**: Clear role, core task, critical constraints
**ZONE 2 (Middle)**: Context, detailed requirements, specifications
**ZONE 3 (Recency)**: Output format, file structure, activation

## STEP 6: VALIDATION

✓ PRIMARY_GOAL: 100% Match - Create complete website with instant purchase
✓ CORE_TASK: 100% Match - Build website with products/services and smart intake form
✓ All other fields: Enhanced and clarified, not contradicted

**Enhanced Prompt Score Estimate**: ~92/100



