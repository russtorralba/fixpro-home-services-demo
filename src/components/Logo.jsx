const logoUrl = '/fixpro-logo.png'

export default function Logo({ compact = false }) {
  return <img className={compact ? 'h-9 w-auto max-w-[108px] shrink-0 object-contain' : 'h-11 w-auto max-w-[132px] shrink-0 object-contain'} src={logoUrl} alt="FixPro Home Services" />
}
