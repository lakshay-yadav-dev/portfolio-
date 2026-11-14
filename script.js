/**
 * PortfoliX — Client Script
 * Powers real interactive portfolio preview switcher, order modals, Telegram checkout, and FAQ accordion.
 * No fake purchase notifications, no AI fluff.
 */

// Realistic Data for 4 Professions
const portfolioProfiles = {
  developer: {
    professionLabel: 'Software Engineer',
    name: 'Lakshay Yadav',
    role: 'Full-Stack & Systems Engineer',
    location: 'Bengaluru, India (Open to Remote)',
    tagline: '5 years building high-throughput web APIs, distributed microservices, and reliable frontend tooling. Ex-Fintech contractor.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    availabilityBadge: 'Available for Senior SDE Roles',
    skills: ['TypeScript', 'Go (Golang)', 'React / Next.js', 'PostgreSQL', 'Docker', 'AWS', 'Redis', 'Kafka'],
    stats: [
      { label: 'Experience', val: '5+ Years' },
      { label: 'Production Services', val: '14 Shipped' },
      { label: 'GitHub Activity', val: '1,200+ Commits/yr' }
    ],
    projects: [
      {
        title: 'Distributed Cache Proxy',
        desc: 'In-memory caching microservice built in Go with connection pooling and LRU eviction, reducing database query load by 42%.',
        tags: ['Go', 'Redis', 'Docker'],
        linkText: 'View GitHub Repo'
      },
      {
        title: 'Fintech Automated Invoice Engine',
        desc: 'Webhook-driven billing microservice processing GST-compliant invoicing with idempotency keys and automated reconciliation.',
        tags: ['TypeScript', 'Node.js', 'PostgreSQL'],
        linkText: 'View Architecture'
      },
      {
        title: 'Developer Documentation Hub',
        desc: 'Static documentation generator built on Next.js with instant fuzzy client-side search and automatic OpenAPI spec rendering.',
        tags: ['React', 'Next.js', 'Tailwind'],
        linkText: 'Live Demo'
      }
    ]
  },
  analyst: {
    professionLabel: 'Data & BI Analyst',
    name: 'Sneha Mukherjee',
    role: 'Senior Data & Business Intelligence Analyst',
    location: 'Mumbai, India',
    tagline: 'Translating complex user behavior into revenue decisions. Specializing in SQL data pipelines, cohort retention modeling, and executive KPI dashboards.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    availabilityBadge: 'Available for Contract & Full-Time',
    skills: ['SQL (PostgreSQL / BigQuery)', 'Python (Pandas, NumPy)', 'Tableau', 'Power BI', 'dbt', 'Excel Modeling', 'Google Analytics 4'],
    stats: [
      { label: 'Analytics Exp', val: '4.5 Years' },
      { label: 'Pipelines Built', val: '28 Models' },
      { label: 'Business Impact', val: '₹3.4Cr Identified' }
    ],
    projects: [
      {
        title: 'E-Commerce 90-Day Retention Cohort Model',
        desc: 'Built an end-to-end SQL and Tableau pipeline tracking repurchase behavior across 140k customers to optimize paid CAC.',
        tags: ['SQL', 'Tableau', 'Cohort Analysis'],
        linkText: 'View Case Study'
      },
      {
        title: 'B2B Customer Churn Prediction Engine',
        desc: 'Supervised regression pipeline in Python identifying at-risk SaaS subscriptions 30 days prior to contract renewal.',
        tags: ['Python', 'Pandas', 'Predictive Modeling'],
        linkText: 'View Methodology'
      },
      {
        title: 'Supply Chain Dispatch Telemetry',
        desc: 'Real-time Power BI dashboard for operations team reducing order-to-dispatch latency from 24 hours to under 30 minutes.',
        tags: ['Power BI', 'SQL Server', 'ETL'],
        linkText: 'View Dashboard Deck'
      }
    ]
  },
  designer: {
    professionLabel: 'Product & UI/UX Designer',
    name: 'Tanvi Kulkarni',
    role: 'Senior Product & Interaction Designer',
    location: 'Pune, India',
    tagline: 'Designing structured digital products and scalable design systems. 5 years collaborating closely with frontend engineers to ship high-converting web and mobile apps.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    availabilityBadge: 'Taking Design Projects for Q2',
    skills: ['Figma', 'Design Systems', 'Mobile App UI (iOS & Android)', 'Prototyping', 'User Research', 'Information Architecture'],
    stats: [
      { label: 'Design Experience', val: '5+ Years' },
      { label: 'Shipped Apps', val: '8 Products' },
      { label: 'Figma Library', val: '120+ Components' }
    ],
    projects: [
      {
        title: 'PayPulse Mobile Banking Redesign',
        desc: 'Redesigned peer-to-peer money transfers and KYC onboarding, resulting in a 24% reduction in signup abandonment.',
        tags: ['Figma', 'Fintech', 'Mobile UX'],
        linkText: 'View Figma Prototype'
      },
      {
        title: 'Origin — SaaS Design System',
        desc: 'Comprehensive multi-brand tokenized design system built for a B2B enterprise suite with 40+ engineering contributors.',
        tags: ['Design System', 'Tokens', 'Accessibility'],
        linkText: 'View Component Specs'
      },
      {
        title: 'TeleHealth Doctor Consultation Portal',
        desc: 'Clean electronic health records (EHR) interface and prescription flow designed for quick clinic consultations.',
        tags: ['SaaS Web', 'Usability Testing'],
        linkText: 'Read UX Case Study'
      }
    ]
  },
  freelancer: {
    professionLabel: 'Independent Consultant',
    name: 'Vikramaditya Rao',
    role: 'Technical Growth & Funnel Consultant',
    location: 'Gurgaon / Remote',
    tagline: 'Helping early-stage B2B SaaS and agency founders build repeatable customer acquisition funnels, technical integrations, and landing pages that convert.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    availabilityBadge: 'Booking Strategy Sprints',
    skills: ['Funnel Architecture', 'Landing Page CRO', 'HubSpot / Zapier Integrations', 'Technical Copywriting', 'Webflow / CMS'],
    stats: [
      { label: 'Client Engagements', val: '35+ Startups' },
      { label: 'Average Pipeline Lift', val: '+40%' },
      { label: 'Consulting History', val: '6 Years' }
    ],
    projects: [
      {
        title: 'B2B SaaS Demo Funnel Architecture',
        desc: 'Restructured inbound demo booking flow and qualification form for a Series-A analytics vendor, doubling qualified pipeline.',
        tags: ['CRO', 'B2B SaaS', 'Analytics'],
        linkText: 'View Results Summary'
      },
      {
        title: 'Automated CRM Lead Routing System',
        desc: 'Engineered zero-code webhook workflows connecting lead capture forms to HubSpot, Slack, and Google Sheets for 12 reps.',
        tags: ['Automation', 'HubSpot', 'Zapier'],
        linkText: 'View Workflow Map'
      },
      {
        title: 'Agency Rebranding & Portfolio Strategy',
        desc: 'Repositioned high-ticket design firm, authored case studies, and launched a custom web showcase closing ₹28L in new contracts.',
        tags: ['Positioning', 'Copywriting'],
        linkText: 'Read Case Breakdown'
      }
    ]
  }
};

let currentProfession = 'developer';

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initProfessionTabs();
  renderPreview(currentProfession);
  initFaqAccordion();
  initModals();
  initMobileMenu();
  setupSmoothScroll();
  initPricingCountdown();
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// -------------------------------------------------------------------
// PROFESSION PREVIEW SWITCHER
// -------------------------------------------------------------------
function initProfessionTabs() {
  const tabs = document.querySelectorAll('[data-profession]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active-tab'));
      tab.classList.add('active-tab');
      currentProfession = tab.dataset.profession;
      renderPreview(currentProfession);
    });
  });
}

function renderPreview(key) {
  const container = document.getElementById('portfolioPreviewTarget');
  if (!container) return;

  const data = portfolioProfiles[key] || portfolioProfiles.developer;

  // Build clean HTML
  const skillsHTML = data.skills
    .map(s => `<span class="px-2.5 py-1 text-xs rounded-md bg-white/[0.05] border border-white/[0.08] text-slate-300 font-mono">${s}</span>`)
    .join('');

  const statsHTML = data.stats
    .map(st => `
      <div class="px-4 py-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-left">
        <p class="text-xs text-slate-400 font-medium">${st.label}</p>
        <p class="text-base font-bold text-white mt-0.5">${st.val}</p>
      </div>
    `).join('');

  const projectsHTML = data.projects.map(p => `
    <div class="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] transition text-left space-y-2">
      <div class="flex items-center justify-between">
        <h5 class="text-sm font-semibold text-white">${p.title}</h5>
        <span class="text-xs text-indigo-400 font-medium">${p.linkText} →</span>
      </div>
      <p class="text-xs text-slate-400 leading-relaxed">${p.desc}</p>
      <div class="flex flex-wrap gap-1.5 pt-1">
        ${p.tags.map(t => `<span class="text-[11px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-mono">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="p-4 sm:p-8 space-y-6 sm:space-y-8 text-left bg-[#0f1118]">
      
      <!-- Portfolio Header Mockup -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div class="flex items-start sm:items-center gap-3.5 sm:gap-4">
          <img src="${data.avatar}" alt="${data.name}" class="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-white/20 shadow-md shrink-0" />
          <div class="min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <h4 class="text-base sm:text-lg font-bold text-white tracking-tight">${data.name}</h4>
              <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                ${data.availabilityBadge}
              </span>
            </div>
            <p class="text-xs sm:text-sm text-indigo-400 font-medium mt-0.5">${data.role}</p>
            <p class="text-[11px] sm:text-xs text-slate-400 mt-0.5">${data.location}</p>
          </div>
        </div>

        <div class="flex items-center flex-wrap gap-2 shrink-0 w-full sm:w-auto pt-1 sm:pt-0">
          <a href="https://www.linkedin.com/in/lakshay-yadav-0879028b/" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-semibold flex items-center gap-1.5 transition" title="LinkedIn Profile">
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 0 0-1.66 1.64 1.64 1.64 0 0 0 1.66 1.63 1.64 1.64 0 0 0 1.65-1.63 1.64 1.64 0 0 0-1.65-1.64z"/></svg>
            <span>LinkedIn</span>
          </a>
          <button class="px-3.5 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-xs font-semibold text-slate-200 border border-white/[0.1] transition">
            Resume (PDF)
          </button>
          <button class="trigger-get-portfolio px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition" data-plan="professional">
            Contact
          </button>
        </div>
      </div>

      <!-- Tagline / Bio -->
      <div class="space-y-3">
        <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
          ${data.tagline}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          ${statsHTML}
        </div>
      </div>

      <!-- Skills Matrix -->
      <div class="space-y-2">
        <h5 class="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">Core Competencies & Stack</h5>
        <div class="flex flex-wrap gap-2">
          ${skillsHTML}
        </div>
      </div>

      <!-- Projects Section -->
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <h5 class="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">Selected Projects & Deliverables</h5>
          <span class="text-xs text-slate-400">All content editable via personal admin login</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          ${projectsHTML}
        </div>
      </div>

      <!-- Preview Footer Note -->
      <div class="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <span class="flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Sample URL: <strong class="text-slate-300 font-mono">${data.name.toLowerCase().replace(/[^a-z]/g, '')}.folio.live</strong> (Custom domain supported)</span>
        </span>
        <button class="trigger-get-portfolio text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-4">
          Order this portfolio setup for ₹3,500 →
        </button>
      </div>

    </div>
  `;

  // Attach button event inside rendered markup
  container.querySelectorAll('.trigger-get-portfolio').forEach(b => {
    b.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(document.getElementById('orderModal'));
    });
  });

  refreshIcons();
}

// -------------------------------------------------------------------
// FAQ ACCORDION
// -------------------------------------------------------------------
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      items.forEach(other => other.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}

// ===================================================================
// OFFER COUNTDOWN TIMER (DEADLINE: 16-11-2026, 23:59:59 IST)
// Price: ₹3,200 until 16-11-2026; automatically reverts to ₹3,500 after.
// ===================================================================
const OFFER_DEADLINE_MS = new Date('2026-11-16T23:59:59+05:30').getTime();
let isOfferActive = true;

// 1-Click UPI Payment Configuration
const UPI_CONFIG = {
  pa: 'ydvlakshay@fam',
  pn: 'Lakshay Yadav',
  paEncoded: 'ydvlakshay%40fam',
  pnEncoded: 'Lakshay%20Yadav'
};

function buildUpiUri(amount) {
  return `upi://pay?pa=${UPI_CONFIG.paEncoded}&pn=${UPI_CONFIG.pnEncoded}&am=${amount}&cu=INR`;
}

function initPricingCountdown() {
  updateCountdownTicker();
  setInterval(updateCountdownTicker, 1000);
}

function updateCountdownTicker() {
  const now = new Date().getTime();
  const diff = OFFER_DEADLINE_MS - now;

  if (diff <= 0) {
    if (isOfferActive) {
      expireOfferPricing();
    }
    return;
  }

  isOfferActive = true;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const pad = (n) => String(n).padStart(2, '0');

  // Digital clock boxes
  const dEl = document.getElementById('timerDays');
  const hEl = document.getElementById('timerHours');
  const mEl = document.getElementById('timerMinutes');
  const sEl = document.getElementById('timerSeconds');

  if (dEl) dEl.innerText = pad(days);
  if (hEl) hEl.innerText = pad(hours);
  if (mEl) mEl.innerText = pad(minutes);
  if (sEl) sEl.innerText = pad(seconds);

  // Micro indicators
  const card2Text = document.getElementById('card2TimerText');
  if (card2Text) {
    card2Text.innerText = `Hurry! ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  const navCount = document.getElementById('navCountdownText');
  if (navCount) {
    navCount.innerText = `Ends in ${days}d ${hours}h ${minutes}m`;
  }

  const heroCount = document.getElementById('heroCountdownText');
  if (heroCount) {
    heroCount.innerText = `Ends in ${days}d ${hours}h (Hurry Up!)`;
  }
}

function expireOfferPricing() {
  isOfferActive = false;

  // 1. Update PRICING_PLANS dictionary
  PRICING_PLANS.professional.offerPrice = '₹3,500';
  PRICING_PLANS.professional.originalPrice = '₹3,500';
  PRICING_PLANS.professional.savings = 'Standard Plan';
  PRICING_PLANS.professional.amount = 3500;

  // 2. Hide countdown grid, show expired badge
  const countdownGrid = document.getElementById('countdownGrid');
  if (countdownGrid) countdownGrid.classList.add('hidden');

  const expiredBadge = document.getElementById('timerExpiredBadge');
  if (expiredBadge) expiredBadge.classList.remove('hidden');

  const timerMessage = document.getElementById('timerMessage');
  if (timerMessage) {
    timerMessage.innerHTML = 'Special Offer ended on 16 Nov 2026. Standard pricing of <strong class="text-white">₹3,500</strong> is now active.';
  }

  // 3. Update Card 2 (Professional)
  const card2OfferPrice = document.getElementById('card2OfferPrice');
  if (card2OfferPrice) card2OfferPrice.innerText = '₹3,500';

  const card2OriginalPrice = document.getElementById('card2OriginalPrice');
  if (card2OriginalPrice) card2OriginalPrice.classList.add('hidden');

  const card2DiscountBadge = document.getElementById('card2DiscountBadge');
  if (card2DiscountBadge) card2DiscountBadge.classList.add('hidden');

  const card2TimerTag = document.getElementById('card2TimerTag');
  if (card2TimerTag) card2TimerTag.classList.add('hidden');

  const card2RibbonText = document.getElementById('card2RibbonText');
  if (card2RibbonText) card2RibbonText.innerText = '⭐ Most Popular Choice';

  const card2DirectUpiLink = document.getElementById('card2DirectUpiLink');
  if (card2DirectUpiLink) {
    card2DirectUpiLink.href = buildUpiUri(3500);
  }
  const card2DirectUpiText = document.getElementById('card2DirectUpiText');
  if (card2DirectUpiText) {
    card2DirectUpiText.innerText = 'Pay ₹3,500';
  }

  // 4. Update Announcement Banner & Hero
  const navOfferPrice = document.getElementById('navOfferPrice');
  if (navOfferPrice) navOfferPrice.innerText = '₹3,500';

  const navOriginalPrice = document.getElementById('navOriginalPrice');
  if (navOriginalPrice) navOriginalPrice.classList.add('hidden');

  const navCountdownTag = document.getElementById('navCountdownTag');
  if (navCountdownTag) navCountdownTag.classList.add('hidden');

  const heroOfferPrice = document.getElementById('heroOfferPrice');
  if (heroOfferPrice) heroOfferPrice.innerText = '₹3,500';

  const heroOriginalPrice = document.getElementById('heroOriginalPrice');
  if (heroOriginalPrice) heroOriginalPrice.classList.add('hidden');

  const heroCountdownText = document.getElementById('heroCountdownText');
  if (heroCountdownText) heroCountdownText.innerText = 'Standard One-Time Plan';

  // 5. Update dropdown text if present
  const planSelect = document.getElementById('orderPlanSelect');
  if (planSelect && planSelect.options[1]) {
    planSelect.options[1].text = 'Professional Portfolio — ₹3,500 [Popular]';
  }

  // 6. Refresh modal if open
  if (typeof setOrderPlan === 'function') {
    setOrderPlan(selectedPlan);
  }
}

const PRICING_PLANS = {
  minimal: {
    name: 'Minimal Portfolio',
    originalPrice: '₹2,500',
    offerPrice: '₹1,999',
    savings: 'Save ₹500',
    amount: 1999
  },
  professional: {
    name: 'Professional Portfolio',
    originalPrice: '₹3,500',
    offerPrice: '₹3,200',
    savings: 'Save ₹300',
    amount: 3200
  },
  premium: {
    name: 'Premium Portfolio',
    originalPrice: '₹5,000',
    offerPrice: '₹4,300',
    savings: 'Save ₹700',
    amount: 4300
  }
};

let selectedPlan = 'professional';

function setOrderPlan(planKey) {
  selectedPlan = planKey in PRICING_PLANS ? planKey : 'professional';
  const plan = PRICING_PLANS[selectedPlan];

  const planSelect = document.getElementById('orderPlanSelect');
  if (planSelect) planSelect.value = selectedPlan;

  const titleEl = document.getElementById('modalPlanTitle');
  if (titleEl) {
    titleEl.innerText = isOfferActive && planKey === 'professional'
      ? `${plan.name} • Special Launch Offer`
      : `${plan.name} • Lifetime Setup`;
  }

  const priceEl = document.getElementById('modalPlanPrice');
  if (priceEl) {
    if (plan.originalPrice === plan.offerPrice) {
      priceEl.innerHTML = `${plan.offerPrice} <span class="text-xs text-slate-400 font-normal">(One-time payment)</span>`;
    } else {
      priceEl.innerHTML = `${plan.offerPrice} <span class="text-xs text-slate-400 line-through font-normal">${plan.originalPrice}</span> <span class="text-xs text-purple-400 font-semibold">(${plan.savings})</span>`;
    }
  }

  const upiAmountText = document.getElementById('upiAmountText');
  if (upiAmountText) upiAmountText.innerText = plan.offerPrice;

  const upiUri = buildUpiUri(plan.amount);

  const upiQrImage = document.getElementById('upiQrImage');
  if (upiQrImage) {
    upiQrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(upiUri)}`;
  }

  // Direct 1-tap UPI link in UPI modal
  const directUpiPayLink = document.getElementById('directUpiPayLink');
  if (directUpiPayLink) {
    directUpiPayLink.href = upiUri;
  }
  const directUpiBtnText = document.getElementById('directUpiBtnText');
  if (directUpiBtnText) {
    directUpiBtnText.innerText = `Pay ${plan.offerPrice}`;
  }

  // Direct 1-tap UPI link in Order modal
  const orderDirectUpiLink = document.getElementById('orderDirectUpiLink');
  if (orderDirectUpiLink) {
    orderDirectUpiLink.href = upiUri;
  }
  const orderDirectUpiBtnText = document.getElementById('orderDirectUpiBtnText');
  if (orderDirectUpiBtnText) {
    orderDirectUpiBtnText.innerText = `Pay ${plan.offerPrice}`;
  }

  const payUpiBtnText = document.getElementById('payUpiBtnText');
  if (payUpiBtnText) {
    payUpiBtnText.innerText = `Or Scan QR Code via UPI (${plan.offerPrice})`;
  }
}

// -------------------------------------------------------------------
// MODALS & ORDER / TELEGRAM FLOW
// -------------------------------------------------------------------
function initModals() {
  const orderModal = document.getElementById('orderModal');
  const upiModal = document.getElementById('upiModal');

  // Trigger buttons with plan attribution
  document.querySelectorAll('.trigger-get-portfolio').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const plan = btn.dataset.plan || 'professional';
      setOrderPlan(plan);
      openModal(orderModal);
    });
  });

  // Modal plan dropdown switcher
  const planSelect = document.getElementById('orderPlanSelect');
  if (planSelect) {
    planSelect.addEventListener('change', (e) => {
      setOrderPlan(e.target.value);
    });
  }

  // Close triggers
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  // Close on backdrop click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // Switch to UPI payment modal
  const openUpiBtn = document.getElementById('openUpiBtn');
  if (openUpiBtn) {
    openUpiBtn.addEventListener('click', () => {
      closeModal(orderModal);
      openModal(upiModal);
    });
  }

  // Copy UPI ID button
  const copyUpiBtn = document.getElementById('copyUpiBtn');
  if (copyUpiBtn) {
    copyUpiBtn.addEventListener('click', () => {
      const upiText = document.getElementById('upiIdText')?.innerText || 'ydvlakshay@fam';
      navigator.clipboard.writeText(upiText).then(() => {
        copyUpiBtn.innerText = 'Copied!';
        setTimeout(() => {
          copyUpiBtn.innerText = 'Copy UPI ID';
        }, 2000);
      });
    });
  }

  // Confirm UPI button
  const confirmUpiBtn = document.getElementById('confirmUpiBtn');
  if (confirmUpiBtn) {
    confirmUpiBtn.addEventListener('click', () => {
      const utr = document.getElementById('utrInput')?.value.trim();
      if (!utr || utr.length < 6) {
        alert('Please enter your 12-digit UPI Reference / UTR Number.');
        return;
      }
      document.getElementById('upiDetailsView')?.classList.add('hidden');
      document.getElementById('upiSuccessView')?.classList.remove('hidden');
    });
  }

  // Order Form Submit -> Direct to Telegram with Structured Order Note
  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleTelegramOrder();
    });
  }
}

function openModal(el) {
  if (!el) return;
  el.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(el) {
  if (!el) return;
  el.classList.remove('active');
  document.body.style.overflow = '';
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  document.body.style.overflow = '';
}

function handleTelegramOrder() {
  const name = document.getElementById('orderName')?.value.trim() || 'Client';
  const role = document.getElementById('orderRole')?.value.trim() || 'Professional';
  const handle = document.getElementById('orderContact')?.value.trim() || 'Not specified';

  const telegramUrl = 'https://t.me/Luckyydv_876';

  // Open Telegram directly
  window.open(telegramUrl, '_blank');
  closeAllModals();
}

// -------------------------------------------------------------------
// MOBILE NAVIGATION MENU
// -------------------------------------------------------------------
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const menu = document.getElementById('mobileNavDrawer');
  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// -------------------------------------------------------------------
// SMOOTH SCROLLING
// -------------------------------------------------------------------
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
