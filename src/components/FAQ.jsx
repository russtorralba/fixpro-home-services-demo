import { useState } from 'react'
import Icon from './Icon'
import { faqs } from '../data/content'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return <section id="faqs" className="section bg-[#f8f9ff]"><div className="page-shell max-w-[840px] text-center"><p className="eyebrow">Portfolio FAQ</p><h2 className="section-title">Frequently Asked Questions</h2><p className="section-copy mx-auto max-w-xl">Answers about this fictional appliance-repair portfolio and its client-side booking experience.</p><div className="mt-7 flex flex-col gap-2 text-left">{faqs.map(([question, answer], index) => <article className="overflow-hidden rounded-xl border border-[#dde9ff] bg-white shadow-sm" key={question}><button className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left font-heading text-[17px] font-bold text-[#001428] hover:text-[#0051d5]" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}><span>{question}</span><Icon className={`shrink-0 text-[#74777e] transition-transform ${open === index ? 'rotate-180' : ''}`}>expand_more</Icon></button>{open === index && <p className="border-t border-[#eff4ff] px-4 pb-4 pt-3 text-sm leading-5 text-[#43474d]">{answer}</p>}</article>)}</div></div></section>
}
