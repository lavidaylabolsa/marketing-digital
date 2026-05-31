import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Check,
  ChevronDown,
  Megaphone,
  BarChart3,
  Zap,
  Brain,
  ArrowRight,
  Send,
  Sparkles,
  Mail,
  Search,
  Target,
  TrendingUp as TrendIcon,
} from 'lucide-react';
import {
  SiGoogle,
  SiMeta,
  SiTiktok,
  SiShopify,
  SiHubspot,
  SiSalesforce,
  SiZapier,
  SiSlack,
  SiNotion,
  SiGoogleanalytics,
  SiStripe,
  SiAirtable,
  SiAsana,
  SiMailchimp,
  SiOpenai,
} from 'react-icons/si';
import { FaLinkedin, FaMicrosoft } from 'react-icons/fa6';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';
import CanvasParticles from '../components/CanvasParticles';

gsap.registerPlugin(ScrollTrigger);

// ─── HERO ───
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.from('.hero-overline', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      })
        .from(
          '.hero-headline',
          { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.3'
        )
        .from(
          '.hero-sub',
          { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.4'
        )
        .from(
          '.hero-cta',
          { y: 15, opacity: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] bg-dark flex items-center justify-center overflow-hidden"
    >
      <CanvasParticles />
      <div className="absolute inset-0 mesh-pattern opacity-50 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-600/[0.03] blur-[120px]" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="hero-overline text-xs uppercase tracking-[0.08em] text-muted-light mb-8 font-medium">
          Marketing & AI Agency
        </p>
        <h1 className="hero-headline text-[clamp(40px,7vw,64px)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
          Scale your business with
          <br />
          <span className="text-gradient">digital strategy & AI</span>
        </h1>
        <p className="hero-sub text-lg md:text-xl text-gray-400 mt-6 max-w-xl mx-auto leading-relaxed">
          We combine performance marketing, automation, and artificial
          intelligence to maximize every stage of your funnel.
        </p>
        <div className="hero-cta flex flex-wrap items-center justify-center gap-4 mt-10">
          <button
            onClick={() => scrollTo('#contacto')}
            className="bg-white text-dark font-semibold px-7 py-3.5 rounded-button hover:scale-[1.02] transition-transform text-sm"
          >
            Get a free audit
          </button>
          <button
            onClick={() => scrollTo('#servicios')}
            className="border border-white/20 text-white font-medium px-7 py-3.5 rounded-button hover:bg-white/10 transition-colors text-sm"
          >
            See our services
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── STATS ───
function StatsBar() {
  const s1 = useCountUp(480, '%', '+');
  const s2 = useCountUp(35, 'x', '', 2000);
  const s3 = useCountUp(42, '%', '-');
  const s4 = useCountUp(600, '%', '+');
  const stats = [
    { ref: s1.ref, val: s1.display, label: 'Avg. signup increase' },
    { ref: s2.ref, val: s2.display, label: 'Average ROAS' },
    { ref: s3.ref, val: s3.display, label: 'CPA reduction' },
    { ref: s4.ref, val: s4.display, label: 'Verified users in 6mo' },
  ];
  return (
    <section className="relative z-20 -mt-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl shadow-black/5 border border-border px-8 md:px-12 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div
                ref={s.ref}
                className="font-mono text-3xl md:text-4xl font-bold text-brand-600"
              >
                {s.val}
              </div>
              <p className="text-muted text-xs mt-2 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ───
const servicios = [
  {
    icon: Megaphone,
    title: 'Paid Media',
    desc: 'Google Ads, Meta Ads, TikTok, LinkedIn & Programmatic. Campaigns optimized for conversions, not clicks. We manage the full funnel from awareness to purchase.',
  },
  {
    icon: BarChart3,
    title: 'CRO & Funnel Optimization',
    desc: 'We optimize every step of your funnel. Landing pages, forms, checkout flows, and A/B tests that turn more visitors into paying customers.',
  },
  {
    icon: Zap,
    title: 'Marketing Automation',
    desc: 'Workflows with Zapier, Make, and n8n. Email sequences, lead nurturing, and smart alerts that convert while you sleep.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Analytics',
    desc: 'Predictive models, real-time dashboards, and attribution modeling. Make decisions based on data, not gut feeling.',
  },
];

function ServiceCard({
  icon: Icon,
  title,
  desc,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  delay: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>(delay);
  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl p-8 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default"
    >
      <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
        <Icon size={22} className="text-brand-600" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-dark">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{desc}</p>
      <div className="mt-4 flex items-center gap-1 text-brand-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Learn more</span>
        <ArrowRight size={14} />
      </div>
    </div>
  );
}

function ServiciosSection() {
  const headerRef = useScrollReveal<HTMLDivElement>(0);
  return (
    <section id="servicios" className="py-28 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight tracking-[-0.02em]">
            Strategy, technology,
            <br />
            and execution
          </h2>
          <p className="text-muted text-lg mt-4">
            Every service is designed to impact a specific stage of your
            conversion funnel.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {servicios.map((s, i) => (
            <ServiceCard key={i} {...s} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── INTEGRATIONS CAROUSEL ───
function IntegrationsCarousel() {
  const integrations = [
    { name: 'Google Ads', icon: SiGoogle, color: '#4285F4' },
    { name: 'Meta', icon: SiMeta, color: '#0668E1' },
    { name: 'TikTok', icon: SiTiktok, color: '#000000' },
    { name: 'LinkedIn', icon: FaLinkedin, color: '#0A66C2' },
    { name: 'Shopify', icon: SiShopify, color: '#96BF48' },
    { name: 'HubSpot', icon: SiHubspot, color: '#FF7A59' },
    { name: 'Salesforce', icon: SiSalesforce, color: '#00A1E0' },
    { name: 'Zapier', icon: SiZapier, color: '#FF4A00' },
    { name: 'Slack', icon: SiSlack, color: '#4A154B' },
    { name: 'Notion', icon: SiNotion, color: '#000000' },
    { name: 'GA4', icon: SiGoogleanalytics, color: '#E37400' },
    { name: 'Stripe', icon: SiStripe, color: '#635BFF' },
    { name: 'Airtable', icon: SiAirtable, color: '#18BFFF' },
    { name: 'Asana', icon: SiAsana, color: '#F06A6A' },
    { name: 'Teams', icon: FaMicrosoft, color: '#6264A7' },
    { name: 'Mailchimp', icon: SiMailchimp, color: '#FFE01B', textDark: true },
    { name: 'OpenAI', icon: SiOpenai, color: '#10A37F' },
  ];

  const duplicated = [...integrations, ...integrations];

  return (
    <section className="py-20 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-[-0.02em]">
          50+ integrations
        </h2>
        <p className="text-gray-400 mt-2">
          We connect your entire tech stack to work as one.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark to-transparent z-10" />

        <div className="flex animate-carousel gap-4 w-max">
          {duplicated.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3 hover:bg-white/10 transition-colors cursor-default"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: tool.color }}
                >
                  <Icon
                    size={18}
                    color={tool.textDark ? '#000' : '#fff'}
                  />
                </div>
                <span className="text-white text-sm font-medium whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── EXPERIENCE / SUCCESS SECTION ───
function ExperienceSection() {
  const ref = useScrollReveal<HTMLDivElement>(0);
  
  const clients = [
    { name: 'Pepperstone', logo: '/pepperstone-logo.png' },
    { name: 'Bit2Me', logo: '/bit2me-logo.png' },
    { name: 'Lumen Threads', logo: '/lumen-threads-logo.png' },
    { name: 'Oak & Vine', logo: '/oak-vine-logo.png' },
    { name: 'Nebula Labs', logo: '/nebula-labs-logo.png' },
    { name: 'Catalyst', logo: '/catalyst-logo.png' },
  ];
  
  const duplicated = [...clients, ...clients];

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Content */}
          <div ref={ref}>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
              +5 Years of Experience
            </h2>
            <p className="text-muted text-lg mt-4 leading-relaxed">
              Hundreds of successful projects across multiple industries, backed by more than 5 years of hands-on experience driving growth.
            </p>

            {/* Client logos infinite carousel */}
            <div className="mt-10">
              <p className="text-xs text-muted-light uppercase tracking-wider font-medium mb-4">
                Trusted by companies of all sizes
              </p>
              <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />
                <div className="flex animate-carousel gap-6 w-max">
                  {duplicated.map((client, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-light rounded-xl px-4 py-2 border border-border flex-shrink-0 hover:border-brand-300 transition-colors"
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-8 w-auto object-contain"
                        loading="lazy"
                      />
                      <span className="font-medium text-sm text-dark whitespace-nowrap">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Stats */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-dark p-8 md:p-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/10 rounded-full blur-[80px]" />

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <p className="text-gray-400 text-sm mb-2">Success Rate</p>
                  <p className="text-white text-6xl md:text-7xl font-bold font-mono">
                    95<span className="text-brand-400">%</span>
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    from 100+ client projects
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-white/10">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-white text-sm font-bold ml-1">4.9/5</span>
                    </div>
                    <p className="text-gray-500 text-xs">Client rating</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white text-2xl font-bold font-mono">100+</p>
                    <p className="text-gray-500 text-xs">Projects delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── HOW WE WORK (Workflow) ───
function WorkflowSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useScrollReveal<HTMLDivElement>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.workflow-step-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
      gsap.from('.workflow-connector', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
        scaleX: 0,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
        transformOrigin: 'left center',
      });
      gsap.from('.workflow-tool', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 55%' },
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: 'back.out(1.7)',
        delay: 0.6,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: '01',
      title: 'Free Audit',
      subtitle: 'Diagnosis in 48h',
      desc: 'We analyze your current funnel, identify conversion leaks, and show you exactly where you are losing money. No strings attached.',
      tools: ['Google Analytics 4', 'Google Ads', 'Meta Ads'],
      highlight: 'We find 30% of wasted ad spend on average',
      icon: Search,
    },
    {
      num: '02',
      title: 'Ideal Customer + Setup',
      subtitle: 'Surgical targeting',
      desc: 'We configure Tag Manager, precise conversion events, and define your buyer persona with real data. Every euro reaches the right audience.',
      tools: ['Tag Manager', 'GA4 Events', 'Hotjar', 'CRM'],
      highlight: 'Average 42% reduction in CPA',
      icon: Target,
    },
    {
      num: '03',
      title: 'Strategy + Scaling',
      subtitle: 'Weekly optimization',
      desc: 'We launch A/B tested campaigns, automate workflows, and scale what works. Weekly meetings with real result reports.',
      tools: ['Make / n8n', 'Google Ads API', 'Looker Studio'],
      highlight: 'Controlled scaling without losing profitability',
      icon: TrendIcon,
    },
  ];

  return (
    <section id="resultados" ref={sectionRef} className="py-28 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 tracking-[-0.02em]">
            From audit to scale
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            We don't sell smoke. We show you exactly how we will improve your results, step by step.
          </p>
        </div>

        <div className="relative">
          <div className="workflow-connector hidden lg:block absolute top-[48px] left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-brand-200 via-brand-400 to-brand-600 rounded-full" />

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {steps.map((step, i) => {
              const IconComponent = step.icon;
              return (
                <div key={i} className="workflow-step-card flex flex-col">
                  <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-lg shadow-brand-500/25 flex-shrink-0">
                    <span className="text-xl font-bold">{step.num}</span>
                  </div>

                  <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex-grow flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                      <IconComponent size={22} className="text-brand-600" />
                    </div>

                    <h3 className="text-xl font-semibold text-dark mb-1">
                      {step.title}
                    </h3>
                    <p className="text-brand-600 text-sm font-medium mb-4">
                      {step.subtitle}
                    </p>
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      {step.desc}
                    </p>

                    <div className="mt-auto pt-5 border-t border-border">
                      <p className="text-xs text-muted-light uppercase tracking-wider font-medium mb-3">
                        Tools we use
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.tools.map((tool) => (
                          <span
                            key={tool}
                            className="workflow-tool text-xs font-medium bg-light border border-border px-3 py-1.5 rounded-full text-dark"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 bg-emerald-50 rounded-xl p-3 border border-emerald-100">
                      <p className="text-emerald-700 text-xs font-medium text-center">
                        <Check size={12} className="inline mr-1 -mt-0.5" />
                        {step.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl border border-border p-6 md:p-8 max-w-3xl mx-auto shadow-sm">
            <div className="text-left">
              <p className="text-dark font-semibold">
                Want to see what opportunities you are missing?
              </p>
              <p className="text-muted text-sm mt-1">
                The audit is free and no strings attached. In 48h you will have a clear plan.
              </p>
            </div>
            <button
              onClick={() =>
                document
                  .querySelector('#contacto')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="flex-shrink-0 bg-brand-600 text-white font-semibold px-7 py-3 rounded-button hover:bg-brand-700 hover:scale-[1.02] transition-all text-sm whitespace-nowrap"
            >
              Get free audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FUNNEL ───
function FunnelSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.funnel-bar', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        scaleX: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        transformOrigin: 'left center',
      });
      gsap.from('.funnel-pct', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        delay: 0.4,
        ease: 'power2.out',
      });
      gsap.from('.funnel-check', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    { label: 'Traffic', pct: '100%', w: '100%', color: 'bg-brand-100' },
    { label: 'Signup', pct: '~45%', w: '75%', color: 'bg-brand-300' },
    { label: 'Verification', pct: '~30%', w: '55%', color: 'bg-brand-400' },
    { label: 'Purchase', pct: '~15%', w: '35%', color: 'bg-brand-600' },
  ];

  return (
    <section id="proceso" ref={sectionRef} className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-3">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className={`funnel-bar h-12 rounded-xl ${s.color} flex items-center px-5 text-sm font-semibold shadow-sm`}
                  style={{
                    width: s.w,
                    color: i === 3 ? '#fff' : '#1E3A8A',
                  }}
                >
                  {s.label}
                </div>
                <span className="funnel-pct text-muted text-xs font-mono">
                  {s.pct}
                </span>
              </div>
            ))}
          </div>

          <div>
            <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
              Methodology
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight tracking-[-0.02em]">
              Your funnel,
              <br />
              our expertise
            </h2>
            <p className="text-muted text-lg mt-4 leading-relaxed max-w-md">
              Every business has a funnel. We map every touchpoint, find the leaks,
              and fix them. From the first ad impression to repeat purchases.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Multi-channel acquisition optimization',
                'Smart audience segmentation',
                'Automated nurturing & remarketing',
                'AI-powered predictive analytics for real-time decisions',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="funnel-check w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-emerald-600" />
                  </div>
                  <span className="text-sm text-dark">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() =>
                document
                  .querySelector('#contacto')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="mt-10 bg-brand-600 text-white font-semibold px-7 py-3 rounded-button hover:bg-brand-700 hover:scale-[1.02] transition-all text-sm"
            >
              Start scaling
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIAL + CTA ───
function TestimonialCTA() {
  const ref = useScrollReveal<HTMLDivElement>(0);
  return (
    <section className="relative py-32 bg-dark overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-600/[0.04] blur-[150px]" />
      </div>
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="text-brand-400 text-5xl font-serif mb-8">&ldquo;</div>
        <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed italic font-medium">
          Nexus transformed our digital strategy. The combination of
          automation and AI gave us results we had not achieved with
          any other agency.
        </blockquote>
        <p className="text-gray-500 mt-6 text-sm">
          &mdash; Marketing Director, FinTech Company
        </p>
        <div className="w-16 h-px bg-white/10 mx-auto my-14" />
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-[-0.02em]">
          Ready to stop guessing?
        </h2>
        <p className="text-gray-400 mt-3">
          Book a 20-minute call. No commitment. No pitch.
        </p>
        <button
          onClick={() =>
            document
              .querySelector('#contacto')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          className="inline-block mt-8 bg-white text-dark font-semibold px-10 py-4 rounded-button hover:scale-[1.02] transition-transform text-sm"
        >
          Book a call
        </button>
      </div>
    </section>
  );
}

// ─── FAQ ───
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const items = [
    {
      q: 'How long until we see results?',
      a: 'It depends on the channel. With Google Ads, first results appear in 7-14 days. SEO takes 2-3 months. In the first call we will give you a plan with real timelines.',
    },
    {
      q: 'Do you work with any industry?',
      a: 'Yes. We have optimized funnels for fintechs, e-commerces, SaaS, online education, and more. The funnel is universal. The strategy is custom.',
    },
    {
      q: 'What makes you different from other agencies?',
      a: 'We do not sell hours. We sell results. Every decision is data-driven, every campaign is automated, and every report tells you exactly how much you earned.',
    },
    {
      q: 'How do we start?',
      a: 'Book a 20-minute call. We analyze your situation, identify opportunities, and give you a clear plan. No surprises.',
    },
  ];
  return (
    <section className="py-28 bg-light">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 tracking-[-0.02em]">
          Frequently asked questions
        </h2>
        <div>
          {items.map((item, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-dark pr-4 text-[15px]">
                  {item.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-muted flex-shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-48 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-muted text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ───
function ContactSection() {
  const ref = useScrollReveal<HTMLDivElement>(0);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contacto" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div ref={ref}>
            <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight tracking-[-0.02em]">
              Let's talk about
              <br />
              your project
            </h2>
            <p className="text-muted text-lg mt-4 leading-relaxed">
              Tell us what you need and we will get back to you in under 24 hours.
              No commitment.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                  <Mail size={18} className="text-brand-600" />
                </div>
                <div>
                  <p className="text-sm text-muted">Email</p>
                  <a
                    href="mailto:hola@nexusdigital.es"
                    className="text-dark font-medium hover:text-brand-600 transition-colors"
                  >
                    hola@nexusdigital.es
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light rounded-2xl p-8 border border-border">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Check size={24} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-dark">
                  Message sent!
                </h3>
                <p className="text-muted mt-2">
                  We will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-button border border-border bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-button border border-border bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formState.company}
                    onChange={(e) =>
                      setFormState({ ...formState, company: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-button border border-border bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-button border border-border bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none"
                    placeholder="What do you need?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-600 text-white font-semibold py-3.5 rounded-button hover:bg-brand-700 hover:scale-[1.01] transition-all text-sm flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FINAL CTA ───
function FinalCTA() {
  const ref = useScrollReveal<HTMLDivElement>(0);
  return (
    <section className="py-24 bg-dark text-center">
      <div ref={ref}>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles size={18} className="text-brand-400" />
          <span className="text-brand-400 text-sm font-medium">
            Guaranteed results
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-[-0.02em]">
          The next client to grow
          <br />
          could be you.
        </h2>
        <button
          onClick={() =>
            document
              .querySelector('#contacto')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          className="inline-block mt-8 bg-white text-dark font-semibold px-12 py-4 rounded-button hover:scale-[1.02] transition-transform text-sm"
        >
          Start now
        </button>
      </div>
    </section>
  );
}

// ─── HOME ───
export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />

      <ServiciosSection />
      <IntegrationsCarousel />
      <ExperienceSection />
      <WorkflowSection />
      <FunnelSection />
      <TestimonialCTA />
      <FAQSection />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
