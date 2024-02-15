import { useState } from 'react'
import * as stylex from '@stylexjs/stylex'

import TruckIcon from '../icons/Truck'
import CalendarIcon from '../icons/Calendar'
import LabelsIcon from '../icons/Labels'
import CaretDownIcon from '../icons/CaretDown'
import CustomerIcon from '../icons/Customer'
import BillToIcon from '../icons/BillTo'
import PickUpIcon from '../icons/PickUp'
import ConsigneeIcon from '../icons/Consignee'
import CarrierIcon from '../icons/Carrier'
import Input from '../components/Input'

import { styles } from './Pages.styles'

enum Page {
  TMSInfo = 'TMSInfo',
  SchedulingInfo = 'SchedulingInfo',
  Labels = 'Labels',
}

enum Open {
  None = 'None',
  Customer = 'Customer',
  BillTo = 'BillTo',
  PickUp = 'PickUp',
  Consignee = 'Consignee',
  Carrier = 'Carrier',
}

function usePages() {
  const [current, setCurrent] = useState(Page.TMSInfo)
  const [open, setOpen] = useState(Open.Customer)

  const handleChangeCurrent = (which: Page) => setCurrent(which)
  const handleChangeOpen = (which: Open) => setOpen((cur) => (which !== cur ? which : Open.None))

  return { current, handleChangeCurrent, open, handleChangeOpen }
}

function Pages() {
  const { current, handleChangeCurrent, open, handleChangeOpen } = usePages()
  console.log({ open })

  return (
    <section>
      <div {...stylex.props(styles.tabs)}>
        <div
          {...stylex.props(styles.tab, current === Page.TMSInfo && styles.selected)}
          onClick={() => handleChangeCurrent(Page.TMSInfo)}
        >
          <TruckIcon /> <span>TMS Info</span>
        </div>
        <div
          {...stylex.props(styles.tab, current === Page.SchedulingInfo && styles.selected)}
          onClick={() => handleChangeCurrent(Page.SchedulingInfo)}
        >
          <CalendarIcon />
          <span>Scheduling Info</span>
        </div>
        <div
          {...stylex.props(styles.tab, current === Page.Labels && styles.selected)}
          onClick={() => handleChangeCurrent(Page.Labels)}
        >
          <LabelsIcon />
          <span>Labels Info</span>
        </div>
      </div>
      {current === 'TMSInfo' && <TMSInfo open={open} onOpen={handleChangeOpen} />}
      {current === 'SchedulingInfo' && <SchedulingInfo />}
      {current === 'Labels' && <Labels />}
    </section>
  )
}

type TMSInfoProps = { open: Open; onOpen: (wchich: Open) => void }

function TMSInfo({ open, onOpen }: TMSInfoProps) {
  console.log('-->TMSInfo:', { open })
  return (
    <div {...stylex.props(styles.page)}>
      <details {...stylex.props(styles.details)} open={open === Open.Customer}>
        <summary
          onClick={(ev) => {
            ev.preventDefault()
            onOpen(Open.Customer)
          }}
          {...stylex.props(styles.summary)}
        >
          <CustomerIcon color="#535353" />
          <h3>Customer</h3>
          <span {...stylex.props(styles.edit)}>Edit</span>
          <CaretDownIcon
            color="#F16D6C"
            {...stylex.props(open === Open.Customer && styles.opened)}
          />
        </summary>
        <form {...stylex.props(styles.form)}>
          <Input placeholder="e.g. Harvey Rodriguez & Co." label="Name" />
          <Input placeholder="e.g. Jade Mountain, Apr. 2" label="Address" />
          <div {...stylex.props(styles.twoColumns)}>
            <Input placeholder="City" label="City" />
            <Input placeholder="State" label="State" />
          </div>
          <div {...stylex.props(styles.twoColumns)}>
            <Input placeholder="e.g. 89831-6757" label="Zip" />
            <Input placeholder="Code" label="Code" />
          </div>
          <Input placeholder="e.g. Harvey Rodriguez" label="Contact" />
          <Input placeholder="Phone" label="Phone" />
          <Input type="email" placeholder="example@gmail.com" label="Email" />
          <Input placeholder="Ref number" label="Ref number" />
        </form>
      </details>
      <details open={open === Open.BillTo} {...stylex.props(styles.details)}>
        <summary
          onClick={(ev) => {
            ev.preventDefault()
            onOpen(Open.BillTo)
          }}
          {...stylex.props(styles.summary)}
        >
          <BillToIcon color="#535353" />
          <h3>Bill to</h3>
          <span {...stylex.props(styles.edit)}>Edit</span>
          <CaretDownIcon color="#F16D6C" {...stylex.props(open === Open.BillTo && styles.opened)} />
        </summary>
        <div>Coming soon...</div>
      </details>
      <details open={open === Open.PickUp} {...stylex.props(styles.details)}>
        <summary
          onClick={(ev) => {
            ev.preventDefault()
            onOpen(Open.PickUp)
          }}
          {...stylex.props(styles.summary)}
        >
          <PickUpIcon color="#535353" />
          <h3>Pick up</h3>
          <span {...stylex.props(styles.edit)}>Edit</span>
          <CaretDownIcon color="#F16D6C" {...stylex.props(open === Open.PickUp && styles.opened)} />
        </summary>
        <div>Coming soon...</div>
      </details>
      <details open={open === Open.Consignee} {...stylex.props(styles.details)}>
        <summary
          onClick={(ev) => {
            ev.preventDefault()
            onOpen(Open.Consignee)
          }}
          {...stylex.props(styles.summary)}
        >
          <ConsigneeIcon color="#535353" />
          <h3>Consignee</h3>
          <span {...stylex.props(styles.edit)}>Edit</span>
          <CaretDownIcon
            color="#F16D6C"
            {...stylex.props(open === Open.Consignee && styles.opened)}
          />
        </summary>
        <div>Coming soon...</div>
      </details>
      <details open={open === Open.Carrier} {...stylex.props(styles.details)}>
        <summary
          onClick={(ev) => {
            ev.preventDefault()
            onOpen(Open.Carrier)
          }}
          {...stylex.props(styles.summary)}
        >
          <CarrierIcon color="#535353" />
          <h3>Carrier</h3>
          <span {...stylex.props(styles.edit)}>Edit</span>
          <CaretDownIcon
            color="#F16D6C"
            {...stylex.props(open === Open.Carrier && styles.opened)}
          />
        </summary>
        <div>Coming soon...</div>
      </details>
    </div>
  )
}

function SchedulingInfo() {
  return <div {...stylex.props(styles.page)}>Coming soon...</div>
}

function Labels() {
  return <div {...stylex.props(styles.page)}>Coming soon...</div>
}

export default Pages
