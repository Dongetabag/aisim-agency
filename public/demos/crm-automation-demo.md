# CRM Automation Package - Demo
## Client: AISim Agency

---

## CRM Platform: HubSpot

---

## Custom Pipeline Configuration

### Sales Pipeline

| Stage | Probability | Actions Triggered |
|-------|-------------|-------------------|
| New Lead | 10% | Welcome email, Lead scoring, Assign owner |
| Contacted | 20% | Log activity, Start nurture sequence |
| Qualified | 40% | Create deal, Notify sales, Schedule task |
| Meeting Booked | 60% | Send prep email, Create Notion doc, Slack alert |
| Proposal Sent | 75% | Track opens, Follow-up reminder (48h) |
| Negotiation | 85% | Manager notification, Update forecast |
| Closed Won | 100% | Celebration Slack, Onboarding trigger, Invoice |
| Closed Lost | 0% | Loss reason survey, Re-engagement (90 days) |

---

## Automated Lead Scoring Model

### Demographic Scoring

| Attribute | Condition | Points |
|-----------|-----------|--------|
| Company Size | 50+ employees | +25 |
| Company Size | 10-49 employees | +15 |
| Company Size | 1-9 employees | +5 |
| Revenue | $1M+ | +30 |
| Revenue | $500K-$1M | +20 |
| Revenue | $100K-$500K | +10 |
| Industry | Technology | +15 |
| Industry | Professional Services | +15 |
| Industry | E-commerce | +12 |
| Job Title | C-Level | +25 |
| Job Title | VP/Director | +20 |
| Job Title | Manager | +10 |
| Location | US/Canada | +10 |

### Behavioral Scoring

| Action | Points |
|--------|--------|
| Visited pricing page | +20 |
| Viewed 5+ pages | +15 |
| Downloaded resource | +15 |
| Watched demo video | +20 |
| Opened email (each) | +2 |
| Clicked email link | +5 |
| Replied to email | +25 |
| Filled out form | +30 |
| Requested demo | +40 |
| Attended webinar | +25 |
| Returned to site (within 7 days) | +15 |

### Lead Tiers

| Score Range | Tier | Action |
|-------------|------|--------|
| 80+ | Hot | Immediate sales call, Priority routing |
| 50-79 | Warm | Accelerated nurture, Sales follow-up in 24h |
| 25-49 | Cool | Standard nurture sequence |
| 0-24 | Cold | Long-term nurture, Marketing focus |

---

## Email Automation Sequences

### Sequence 1: New Lead Welcome (Hot)

**Trigger:** Lead score 80+ OR form submission on pricing page

**Day 0 - Immediate**
```
Subject: Quick question about your automation goals

Hi {{first_name}},

Thanks for checking out AISim Agency. I noticed you were looking at our
[pricing/AI services] - sounds like you might be exploring automation for
your business.

Quick question: What's the main challenge driving your interest right now?

- Lead response time
- Manual data entry
- Inconsistent follow-ups
- Something else

Just hit reply - I read every response personally.

Best,
Alex
AISim Agency
```

**Day 1**
```
Subject: How TechFlow increased conversions 340% (case study)

Hi {{first_name}},

Thought you might find this interesting - one of our clients, TechFlow
Solutions, was struggling with the same challenges most businesses face:

❌ Leads going cold because follow-ups took too long
❌ Sales team wasting time on unqualified prospects
❌ Inconsistent customer experience

After implementing our AI Sales Agent:

✅ Response time dropped from 4 hours to 30 seconds
✅ Qualified lead rate jumped from 20% to 85%
✅ Revenue increased 340% in 6 months

[Read the full case study →]

Curious if this could work for {{company}}?

Book a 15-minute call and I'll show you exactly how.

[Book a Call →]

Best,
Alex
```

**Day 3**
```
Subject: The $4,999 solution that replaces a $65K hire

Hi {{first_name}},

Most business owners I talk to have the same concern:

"AI automation sounds great, but is it really worth the investment?"

Here's the math we show our clients:

Traditional SDR:
- Salary: $50,000-$70,000
- Benefits: $10,000-$15,000
- Training: $5,000+
- Time to productivity: 3-6 months
- Availability: 40 hrs/week

AI Sales Agent:
- Setup: $4,999 (one-time)
- Ongoing: ~$200/month
- Time to productivity: 1 week
- Availability: 24/7/365

ROI typically hits within 30 days.

But don't take my word for it - let me show you the numbers for your
specific situation.

[Get Your Custom ROI Analysis →]

Best,
Alex
```

**Day 7**
```
Subject: Last chance: Free strategy session this week

Hi {{first_name}},

I have a few strategy call slots left this week, and I wanted to offer
one to you before they fill up.

In 30 minutes, we'll cover:

1. Your current sales/support process
2. Which automations would have the biggest impact
3. Custom ROI projection for {{company}}
4. Implementation timeline

No pitch, no pressure - just a roadmap you can use whether you work
with us or not.

[Grab Your Spot →]

After this week, my calendar is booked out for 3 weeks.

Best,
Alex
```

---

### Sequence 2: Nurture Sequence (Warm/Cool)

**Trigger:** Lead score 25-79

**Week 1:** Educational content about AI automation
**Week 2:** Case study + ROI calculator
**Week 3:** Common objections addressed
**Week 4:** Webinar invitation
**Week 6:** Re-engagement with new content
**Week 8:** Direct offer with urgency

---

## Task Automation Rules

### Rule 1: New Qualified Lead
```yaml
trigger:
  - lead_score >= 50
  - lifecycle_stage: "Lead"
actions:
  - create_task:
      title: "Follow up with {{first_name}} from {{company}}"
      owner: "Round robin - Sales Team"
      due: "+1 business day"
      priority: "High"
      notes: "Score: {{lead_score}}. Source: {{original_source}}"
  - update_property:
      lifecycle_stage: "Marketing Qualified Lead"
  - slack_notification:
      channel: "#new-leads"
      message: "🔥 New qualified lead: {{first_name}} {{last_name}} from {{company}} (Score: {{lead_score}})"
```

### Rule 2: Meeting No-Show
```yaml
trigger:
  - meeting_outcome: "No Show"
actions:
  - send_email:
      template: "Meeting Reschedule"
      delay: "30 minutes"
  - create_task:
      title: "Call {{first_name}} - missed meeting"
      owner: "{{deal_owner}}"
      due: "+4 hours"
      priority: "High"
  - update_property:
      last_contact_attempt: "{{now}}"
      no_show_count: "+1"
```

### Rule 3: Deal Stalled
```yaml
trigger:
  - deal_stage: ["Proposal Sent", "Negotiation"]
  - days_in_stage: "> 7"
actions:
  - create_task:
      title: "Deal stalled: {{deal_name}}"
      owner: "{{deal_owner}}"
      due: "Today"
      priority: "High"
  - slack_notification:
      channel: "#sales-alerts"
      message: "⚠️ Deal stalled: {{deal_name}} (${{amount}}) - {{days_in_stage}} days with no activity"
  - send_internal_email:
      to: "sales-manager@aisim.agency"
      subject: "Deal Review Needed: {{deal_name}}"
```

### Rule 4: Closed Won Celebration
```yaml
trigger:
  - deal_stage: "Closed Won"
actions:
  - slack_notification:
      channel: "#wins"
      message: "🎉 DEAL CLOSED!\n*{{deal_name}}*\n💰 ${{amount}}\n👤 {{deal_owner}}\n\nCongrats! 🚀"
  - create_task:
      title: "Send onboarding email to {{contact_name}}"
      owner: "{{deal_owner}}"
      due: "Today"
  - trigger_workflow: "Client Onboarding"
  - update_property:
      customer_since: "{{now}}"
      lifecycle_stage: "Customer"
```

---

## Reporting Dashboard

### Weekly Automated Report

**Sent:** Every Monday at 8:00 AM
**Recipients:** sales@aisim.agency, leadership@aisim.agency

```
📊 WEEKLY SALES REPORT - AISim Agency
Week of {{week_start}} to {{week_end}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PIPELINE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
New Leads:          {{new_leads}} ({{new_leads_change}}% vs last week)
Qualified Leads:    {{qualified_leads}}
Meetings Booked:    {{meetings_booked}}
Proposals Sent:     {{proposals_sent}}
Deals Won:          {{deals_won}}
Deals Lost:         {{deals_lost}}

REVENUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Closed This Week:   ${{closed_revenue}}
Pipeline Value:     ${{pipeline_value}}
Forecast (30 days): ${{forecast}}

TOP DEALS IN PIPELINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. {{deal_1_name}} - ${{deal_1_amount}} ({{deal_1_stage}})
2. {{deal_2_name}} - ${{deal_2_amount}} ({{deal_2_stage}})
3. {{deal_3_name}} - ${{deal_3_amount}} ({{deal_3_stage}})

TEAM PERFORMANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{#each team_members}}
{{name}}: {{deals_closed}} closed (${{revenue}}) | {{meetings}} meetings
{{/each}}

STALLED DEALS (Action Required)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{#each stalled_deals}}
⚠️ {{name}} - ${{amount}} - {{days_stalled}} days in {{stage}}
{{/each}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generated automatically by AISim CRM Automation
```

---

## Integration Map

```
                    ┌─────────────────┐
                    │    HubSpot      │
                    │   (Central)     │
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
    ┌────▼────┐        ┌─────▼─────┐       ┌────▼────┐
    │ Website │        │  Calendly  │       │  Stripe  │
    │  Forms  │        │ (Meetings) │       │(Payments)│
    └────┬────┘        └─────┬─────┘       └────┬────┘
         │                   │                   │
         └───────────────────┼───────────────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
    ┌────▼────┐        ┌─────▼─────┐       ┌────▼────┐
    │  Slack   │        │  SendGrid  │       │  Notion  │
    │ (Alerts) │        │  (Email)   │       │ (Docs)   │
    └─────────┘        └───────────┘       └─────────┘
```

---

## Implementation Checklist

- [x] HubSpot account setup/audit
- [x] Custom properties created
- [x] Pipeline stages configured
- [x] Lead scoring model implemented
- [x] Email sequences built (5 sequences)
- [x] Task automation rules (12 rules)
- [x] Reporting dashboards (3 dashboards)
- [x] Slack integration
- [x] Calendar integration
- [x] Team training completed
- [x] Documentation delivered

---

## Included Support

- Team training session (60 minutes)
- Admin documentation
- 30-day optimization period
- Quarterly review calls
- Email support

---

*Demo generated by AISim Agency. Setup: 5-7 business days. Price: $2,499*
