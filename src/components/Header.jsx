import { useState } from 'react'
import Icon from './Icon'
import Logo from './Logo'

const links = [['Services', '#services'], ['How It Works', '#how-it-works'], ['Service Areas', '#service-areas'], ['Reviews', '#reviews'], ['FAQs', '#faqs']]

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-[#dde9ff]/70 bg-white/95 shadow-[0_1px_6px_rgba(0,20,40,.03)] backdrop-blur">
    <div className="page-shell flex h-20 items-center justify-between gap-4">
      <a href="#top" aria-label="FixPro Home Services home"><Logo /></a>
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">{links.map(([label, href]) => <a key={href} className="nav-link" href={href}>{label}</a>)}</nav>
      <div className="flex items-center gap-2 sm:gap-4">
        <span className="hidden items-center gap-1.5 py-2 text-sm font-semibold text-[#001428] sm:flex"><Icon className="text-[20px] text-[#0051d5]">code</Icon><span>Portfolio Demo</span></span>
        <a className="button button-blue h-11 px-3 text-xs sm:px-5 sm:text-sm" href="#book"><Icon className="text-[18px]">calendar_month</Icon><span className="hidden xs:inline">Explore Booking Demo</span><span className="xs:hidden">Demo</span></a>
        <button type="button" className="grid h-11 w-11 place-items-center rounded-lg text-[#001428] hover:bg-[#eff4ff] lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><Icon>{open ? 'close' : 'menu'}</Icon></button>
      </div>
    </div>
    {open && <nav className="border-t border-[#dde9ff] bg-white px-4 py-3 lg:hidden" aria-label="Mobile navigation">{links.map(([label, href]) => <a className="block rounded-lg px-3 py-3 text-sm font-semibold text-[#43474d] hover:bg-[#eff4ff]" onClick={close} key={href} href={href}>{label}</a>)}</nav>}
  </header>
}
