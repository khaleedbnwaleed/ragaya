'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  ArrowUpRight,
  ChevronDown,
  Droplets,
  HardHat,
  Leaf,
  Menu,
  MoveRight,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
  Zap,
} from 'lucide-react'

const navItems = ['About', 'Services', 'Projects', 'Sectors', 'Sustainability', 'Contact']

const capabilities = [
  { icon: Sun, number: '01', title: 'Renewable energy', copy: 'Solar-powered systems designed for institutions, communities and public infrastructure.' },
  { icon: Droplets, number: '02', title: 'Water infrastructure', copy: 'Practical borehole, water supply and solar-powered water solutions for reliable access.' },
  { icon: HardHat, number: '03', title: 'Engineering & steel works', copy: 'Structural, fabrication and installation support shaped around project requirements.' },
  { icon: ShieldCheck, number: '04', title: 'Institutional delivery', copy: 'Procurement, supply and project execution for public-sector and education environments.' },
]

const projects = [
  { tag: 'Water infrastructure', title: 'Solar Powered Water Supply Scheme', place: 'Incubation Center · Dutse, Jigawa State', value: '₦36,410,985.91', tone: 'water', image: '/images/hero-infrastructure.jpg' },
  { tag: 'Solar lighting', title: 'Solar Street Light Installation', place: 'Malam Madori, Jigawa State', value: '₦63,877,252.50', tone: 'light', image: '/images/prj.jpg' },
  { tag: 'Education', title: 'Solar Gadgets for Zonal Offices', place: 'Jigawa State', value: '₦33,772,200.00', tone: 'education', image: '/images/2.jpg' },
]

const sectors = ['Government & public institutions', 'Education', 'Water & sanitation', 'Renewable energy', 'Community infrastructure', 'Engineering & industrial services']

export default function Page() {
  const [open, setOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f7f4] text-[#12221d]">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/15 text-white">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Ragaya and Sons home">
            <span className="grid size-10 place-items-center overflow-hidden rounded-full bg-white/10 text-[#13251d] ring-1 ring-white/15">
              <Image src="/images/Ragaya%20Logo.png" alt="Ragaya & Sons logo" width={40} height={40} className="h-full w-full object-cover" />
            </span>
            <span className="leading-none"><strong className="block text-sm font-semibold tracking-[0.14em]">RAGAYA &amp; SONS</strong><small className="mt-1 block text-[9px] tracking-[0.22em] text-white/60">NIGERIA LIMITED</small></span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/75 transition hover:text-[#b9e369]">{item}</a>)}
          </nav>
          <a href="#contact" className="hidden border border-white/30 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] transition hover:bg-white hover:text-[#12221d] sm:block">Start a conversation <ArrowUpRight className="ml-2 inline size-3" /></a>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && <nav className="border-t border-white/15 bg-[#10231d] px-6 py-5 lg:hidden">{navItems.map((item) => <a onClick={() => setOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="block border-b border-white/10 py-3 text-xs uppercase tracking-[0.14em] text-white/80">{item}</a>)}</nav>}
      </header>

      <section id="top" className="relative flex min-h-[720px] items-end bg-[#10231d] pb-20 pt-36 text-white lg:min-h-[790px] lg:pb-28">
        <Image src="/images/hero-infrastructure.jpg" alt="Solar and water infrastructure in a northern Nigerian community" fill priority className="object-cover object-center opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d211b] via-[#0d211b]/75 to-[#0d211b]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10231d] via-transparent to-transparent" />
        <div className="relative mx-auto w-full max-w-[1320px] px-6 lg:px-10"><div className="max-w-3xl">
          <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b9e369]"><span className="h-px w-10 bg-[#b9e369]" /> Infrastructure. Power. Progress.</p>
          <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[92px]">Engineering infrastructure for a more <em className="font-serif font-normal text-[#b9e369]">sustainable</em> future.</h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-white/70 sm:text-lg">Ragaya &amp; Sons Nigeria Limited delivers practical infrastructure, renewable energy, water and institutional solutions designed to support communities, organisations and public-sector development.</p>
          <div className="mt-10 flex flex-wrap gap-3"><a href="#projects" className="bg-[#b9e369] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#13251d] transition hover:bg-white">Explore our projects <ArrowUpRight className="ml-3 inline size-3" /></a><a href="#contact" className="border border-white/30 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] transition hover:border-white">Contact us <MoveRight className="ml-3 inline size-3" /></a></div>
        </div></div>
        <div className="absolute bottom-8 right-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/50 lg:flex lg:right-10"><span className="h-px w-16 bg-white/30" /> Scroll to explore</div>
      </section>

      <section className="border-b border-[#d9e0d9] bg-white"><div className="mx-auto grid max-w-[1320px] grid-cols-2 divide-x divide-[#d9e0d9] lg:grid-cols-4 lg:px-10">{[['2021', 'Year incorporated'], ['RC 1826124', 'Corporate registration'], ['Jigawa State', 'Documented public-sector activity'], ['4', 'Core infrastructure areas']].map(([value, label]) => <div key={label} className="px-6 py-7 sm:px-10"><p className="text-xl font-semibold tracking-tight text-[#173a2d] sm:text-2xl">{value}</p><p className="mt-1 text-[10px] uppercase tracking-[0.13em] text-[#718077]">{label}</p></div>)}</div></section>

      <section id="about" className="mx-auto grid max-w-[1320px] gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32"><div><p className="eyebrow">01 / About us</p><h2 className="section-title mt-5">Practical solutions.<br /><em>Meaningful</em> progress.</h2></div><div className="max-w-2xl"><p className="text-xl leading-8 text-[#29473c]">Ragaya &amp; Sons Nigeria Limited is a Nigerian company focused on delivering infrastructure and technical solutions across renewable energy, water infrastructure, engineering, educational infrastructure and public-sector procurement.</p><p className="mt-6 text-sm leading-7 text-[#718077]">Our documented project activity reflects a practical approach to public institutions and community-serving infrastructure. We bring together procurement, technical coordination and project delivery to support dependable outcomes.</p><div className="mt-10 grid gap-5 border-t border-[#d9e0d9] pt-8 sm:grid-cols-[0.9fr_1.1fr]"><div className="overflow-hidden rounded-[20px] border border-[#d9e0d9] bg-[#eff3ee]">
              <Image src="/images/Founder.png" alt="Founder of Ragaya & Sons Nigeria Limited" width={140} height={260} className="h-full w-full object-cover" />
            </div><div className="flex flex-col justify-center"><p className="eyebrow">Welcome</p><h3 className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[#173a2d]">Welcome to Ragaya &amp; Sons Nigeria Limited.</h3><p className="mt-4 text-sm leading-7 text-[#4f6259]">We are proud to serve communities and institutions through dependable infrastructure, sustainable innovation, and practical solutions that create lasting impact.</p></div></div><div className="mt-10 grid gap-5 border-t border-[#d9e0d9] pt-8 sm:grid-cols-2"><div><p className="eyebrow">Mission</p><p className="mt-3 text-sm leading-6 text-[#4f6259]">To deliver dependable infrastructure and technical solutions that create practical value for institutions, communities and clients.</p></div><div><p className="eyebrow">Vision</p><p className="mt-3 text-sm leading-6 text-[#4f6259]">To become a trusted Nigerian infrastructure and engineering partner known for quality execution and sustainable solutions.</p></div></div></div></section>

      <section id="services" className="bg-[#e9efe9] px-6 py-24 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1320px]"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">02 / Core capabilities</p><h2 className="section-title mt-4 max-w-2xl">Built for the work<br />that <em>matters.</em></h2></div><a href="#contact" className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#376f4f]">Discuss a requirement <MoveRight className="ml-2 inline size-4" /></a></div><div className="mt-14 grid gap-px bg-[#cbd8cc] md:grid-cols-2 lg:grid-cols-4">{capabilities.map(({ icon: Icon, number, title, copy }) => <article key={number} className="group bg-[#e9efe9] p-7 transition hover:bg-[#173a2d] hover:text-white"><div className="flex items-start justify-between"><Icon className="size-7 text-[#629545]" strokeWidth={1.5} /><span className="text-xs text-[#809187]">{number}</span></div><h3 className="mt-16 text-xl font-medium tracking-tight">{title}</h3><p className="mt-4 text-sm leading-6 text-[#718077] group-hover:text-white/60">{copy}</p><ArrowUpRight className="mt-8 size-5 text-[#629545]" /></article>)}</div></div></section>

      <section id="projects" className="bg-[#173a2d] px-6 py-24 text-white lg:px-10 lg:py-28"><div className="mx-auto max-w-[1320px]"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow text-[#b9e369]">03 / Selected activity</p><h2 className="section-title mt-4 text-white">Documented work.<br /><em>Clear</em> context.</h2></div><p className="max-w-xs text-sm leading-6 text-white/55">Public procurement records identify Ragaya &amp; Sons Nigeria Limited as contractor for the following documented activity. Completion status requires company verification.</p></div><div className="mt-14 grid gap-5 lg:grid-cols-3">{projects.map((project) => <article key={project.title} className="group border border-white/15 bg-white/[0.04] p-3 transition hover:bg-white/[0.09]"><div className={`project-art ${project.tone} ${project.image ? 'relative overflow-hidden' : ''}`}>
            {project.image ? (
              <>
                <Image src={project.image} alt={project.title} fill className="object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#10231d]/75 via-[#10231d]/20 to-[#10231d]/60" />
                <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.16em] text-white/80">Representative imagery</span>
                <Zap className="relative z-10 size-10 text-[#b9e369]" strokeWidth={1} />
              </>
            ) : (
              <>
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/80">Representative imagery</span>
                <Zap className="size-10 text-[#b9e369]" strokeWidth={1} />
              </>
            )}
          </div><div className="p-4"><p className="text-[10px] uppercase tracking-[0.16em] text-[#b9e369]">{project.tag} · 2024</p><h3 className="mt-3 min-h-14 text-xl font-medium leading-6">{project.title}</h3><p className="mt-4 text-sm text-white/55">{project.place}</p><div className="mt-5 flex items-end justify-between border-t border-white/10 pt-4"><div><p className="text-[9px] uppercase tracking-[0.14em] text-white/40">Publicly recorded value</p><p className="mt-1 text-sm">{project.value}</p></div><ArrowUpRight className="size-5 text-[#b9e369]" /></div></div></article>)}</div><div className="mt-10 border-l-2 border-[#b9e369] pl-4 text-xs leading-5 text-white/55">Status note: These references are presented as publicly recorded contract awards, not as completed projects.</div></div></section>

      <section id="sectors" className="mx-auto max-w-[1320px] px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="eyebrow">04 / Sectors</p><h2 className="section-title mt-4">Serving the systems<br />that keep <em>communities</em> moving.</h2></div><div className="grid border-t border-[#d9e0d9] sm:grid-cols-2">{sectors.map((sector, i) => <div key={sector} className="flex items-center justify-between border-b border-[#d9e0d9] py-5 text-sm text-[#385248]"><span><span className="mr-4 text-xs text-[#91a198]">0{i + 1}</span>{sector}</span><ChevronDown className="size-4 -rotate-90 text-[#82a58b]" /></div>)}</div></div></section>

      <section id="sustainability" className="relative overflow-hidden bg-[#b9e369] px-6 py-24 lg:px-10 lg:py-28"><div className="absolute -right-12 -top-20 size-72 rounded-full border-[40px] border-[#95bf4d]/30" /><div className="relative mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-2 lg:items-end"><div><p className="eyebrow text-[#3b6334]">05 / Sustainability</p><h2 className="section-title mt-4 text-[#173a2d]">Powering progress.<br />Supporting <em>sustainable</em> communities.</h2></div><div><p className="max-w-lg text-base leading-7 text-[#355c3c]">We focus on infrastructure that works in context: renewable energy, water access, efficient systems and climate-resilient solutions that create practical value for people and institutions.</p><div className="mt-8 flex flex-wrap gap-2">{['Plan', 'Design', 'Implement', 'Measure', 'Improve'].map((item) => <span key={item} className="border border-[#527c40] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#355c3c]">{item}</span>)}</div></div></div></section>

      <section id="contact" className="bg-[#10231d] px-6 py-24 text-white lg:px-10 lg:py-28"><div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"><div><p className="eyebrow text-[#b9e369]">06 / Start a conversation</p><h2 className="mt-5 max-w-2xl text-5xl font-medium leading-[1] tracking-[-0.05em] sm:text-7xl">Let&apos;s build infrastructure that <em className="font-serif font-normal text-[#b9e369]">matters.</em></h2></div><div><p className="text-sm leading-7 text-white/55">For project enquiries, procurement requirements and company credentials, contact our team using the official details provided by the company.</p><a href="mailto:contact@ragayaandsons.com" className="mt-7 inline-flex items-center border border-[#b9e369] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#b9e369] transition hover:bg-[#b9e369] hover:text-[#10231d]">contact@ragayaandsons.com <ArrowUpRight className="ml-3 size-4" /></a></div></div></section>

      <footer className="bg-[#0b1915] px-6 py-10 text-white lg:px-10"><div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><div className="flex items-center gap-3"><span className="grid size-9 place-items-center overflow-hidden rounded-full bg-white/10 text-[#13251d] ring-1 ring-white/15"><Image src="/images/Ragaya%20Logo.png" alt="Ragaya & Sons logo" width={36} height={36} className="h-full w-full object-cover" /></span><strong className="text-xs tracking-[0.14em]">RAGAYA &amp; SONS</strong></div><p className="mt-4 max-w-xs text-xs leading-5 text-white/40">Engineering Infrastructure. Powering Communities. Delivering Sustainable Solutions.</p></div><div className="text-left sm:text-right"><p className="text-xs text-white/50">RC 1826124 · Incorporated 2021</p><p className="mt-2 text-xs text-white/30">© 2026 Ragaya &amp; Sons Nigeria Limited. All Rights Reserved.</p></div></div></footer>
    </main>
  )
}

