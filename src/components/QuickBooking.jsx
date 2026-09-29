import { useState } from 'react'
import Icon from './Icon'

export default function QuickBooking({ onStartBooking }) {
  const [appliance, setAppliance] = useState('')
  const [zip, setZip] = useState('')
  const [error, setError] = useState('')
  const canCheckTimes = Boolean(appliance) && /^\d{5}$/.test(zip)

  function submit(event) {
    event.preventDefault()
    if (!appliance) return setError('Choose the appliance or service you need.')
    if (!/^\d{5}$/.test(zip)) return setError('Enter a valid 5-digit ZIP code.')
    setError('')
    const applianceForBooking = {
      'Refrigerator / Freezer': 'Refrigerator/Freezer',
      'Washer & Dryer': 'Washer/Dryer',
      'Oven, Range & Cooktop': 'Oven/Range',
      'Air Conditioner & HVAC': 'Air Conditioner/HVAC',
      'Comprehensive Diagnostic Check': 'Other'
    }[appliance] || appliance
    onStartBooking({ appliance: applianceForBooking, zip })
  }

  return <div id="booking" className="mt-5 scroll-mt-24 rounded-xl border border-[#e6eeff] bg-white p-4 shadow-md">
    <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider text-[#43474d]">
      <span>Explore the Booking Demo</span>
      <span className="flex items-center gap-1 normal-case text-[#0051d5]"><Icon className="text-[15px]">schedule</Icon>Preferred-time examples</span>
    </div>
    <form noValidate className="grid grid-cols-1 gap-2 sm:grid-cols-12" onSubmit={submit}>
      <div className="relative sm:col-span-5">
        <label className="sr-only" htmlFor="booking-appliance">Appliance or service needed</label>
        <Icon className="field-icon">build</Icon>
        <select id="booking-appliance" value={appliance} onChange={e => setAppliance(e.target.value)} className="field appearance-none pl-9 pr-8">
          <option value="">Select Appliance Issue...</option>
          <option>Refrigerator / Freezer</option><option>Washer &amp; Dryer</option><option>Dishwasher</option>
          <option>Oven, Range &amp; Cooktop</option><option>Air Conditioner &amp; HVAC</option><option>Comprehensive Diagnostic Check</option>
        </select>
        <Icon className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[18px] text-[#74777e]">expand_more</Icon>
      </div>
      <div className="relative sm:col-span-4">
        <label className="sr-only" htmlFor="booking-zip">ZIP code</label>
        <Icon className="field-icon">location_on</Icon>
        <input id="booking-zip" value={zip} onChange={e => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))} className="field pl-9" inputMode="numeric" maxLength="5" placeholder="Enter ZIP code" />
      </div>
      <button className={`button h-11 px-4 text-sm sm:col-span-3 ${canCheckTimes ? '' : 'cursor-not-allowed'}`} style={{ backgroundColor: canCheckTimes ? '#001428' : '#c7d6e6', color: canCheckTimes ? '#ffffff' : '#23384d', opacity: 1, cursor: canCheckTimes ? 'pointer' : 'not-allowed' }} type="submit" disabled={!canCheckTimes}>Check Times <Icon className="text-[17px]">arrow_forward</Icon></button>
    </form>
    {error && <p className="mt-2 text-sm font-medium text-[#ba1a1a]" role="alert">{error}</p>}
    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-medium text-[#43474d]">
      <span className="flex items-center gap-1"><Icon className="text-[14px] text-[#0051d5]">verified</Icon>Sample request flow</span>
      <span className="flex items-center gap-1"><Icon className="text-[14px] text-[#0051d5]">schedule</Icon>Preferred-time demo</span>
      <span className="flex items-center gap-1"><Icon className="text-[14px] text-[#0051d5]">shield</Icon>No data stored</span>
    </div>
  </div>
}
