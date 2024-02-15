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

const styles = stylex.create({
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    gridGap: 40,
    overflow: 'scroll',
    width: '100vw',
    borderBottom: '1px solid lightgray',
    padding: '4px 16px',
    paddingBottom: 0,
    background: '#FFFDF9',
  },
  tab: {
    display: 'flex',
    flexDirection: 'row',
    gridGap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    minWidth: 'fit-content',
    padding: '4px 0',
  },
  selected: {
    color: 'orange',
    borderBottom: '2px solid orange',
  },
  page: {
    padding: '24px 16px',
    background: 'white',
  },
  details: {
    borderBottom: '1px solid lightgray',
    padding: '8px 0',
    cursor: 'pointer',
  },
  summary: {
    display: 'grid',
    gridTemplateColumns: 'auto auto 1fr auto',
    gridGap: 12,
    alignItems: 'center',
  },
  opened: {
    transform: 'rotate(180deg)',
  },
  edit: {
    color: 'orange',
    ':hover': { textDecoration: 'underline' },
  },
  form: {
    display: 'grid',
    gridGap: 24,
  },
  twoColumns: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: 24,
  },
})

function usePages() {
  const [current, setCurrent] = useState('TMSInfo')
  const [open, setOpen] = useState('Customer')

  const handleChangeOpen = (which: string) => setOpen(which)

  return { current, open, handleChangeOpen }
}

function Pages() {
  const { current, open, handleChangeOpen } = usePages()

  return (
    <section>
      <div {...stylex.props(styles.tabs)}>
        <div {...stylex.props(styles.tab, current === 'TMSInfo' && styles.selected)}>
          <TruckIcon /> <span>TMS Info</span>
        </div>
        <div {...stylex.props(styles.tab, current === 'SchedulingInfo' && styles.selected)}>
          <CalendarIcon />
          <span>Scheduling Info</span>
        </div>
        <div {...stylex.props(styles.tab, current === 'Labels' && styles.selected)}>
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

type TMSInfoProps = { open: string; onOpen: (wchich: string) => void }

function TMSInfo({ open, onOpen }: TMSInfoProps) {
  return (
    <div {...stylex.props(styles.page)}>
      <details {...stylex.props(styles.details)} open={open === 'Customer'} onClick={()=>onOpen('Customer')}>
        <summary {...stylex.props(styles.summary)}>
          <CustomerIcon />
          <h3>Customer</h3>
          <span {...stylex.props(styles.edit)}>Edit</span>
          <CaretDownIcon color="red" {...stylex.props(open === 'Customer' && styles.opened)} />
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
      <details {...stylex.props(styles.details)}onClick={()=>onOpen('Bill To')}>
        <summary {...stylex.props(styles.summary)}>
          <BillToIcon />
          <h3>Bill to</h3>
          <span {...stylex.props(styles.edit)}>Edit</span> <CaretDownIcon color="red" />
        </summary>
        <div>Coming soon...</div>
      </details>
      <details {...stylex.props(styles.details)}onClick={()=>onOpen('Pick Up')}>
        <summary {...stylex.props(styles.summary)}>
          <PickUpIcon />
          <h3>Pick up</h3>
          <span {...stylex.props(styles.edit)}>Edit</span> <CaretDownIcon color="red" />
        </summary>
        <div>Coming soon...</div>
      </details>
      <details {...stylex.props(styles.details)}onClick={()=>onOpen('Customer')}>
        <summary {...stylex.props(styles.summary)}>
          <ConsigneeIcon />
          <h3>Consignee</h3>
          <span {...stylex.props(styles.edit)}>Edit</span> <CaretDownIcon color="red" />
        </summary>
        <div>Coming soon...</div>
      </details>
      <details {...stylex.props(styles.details)}onClick={()=>onOpen('Customer')}>
        <summary {...stylex.props(styles.summary)}>
          <CarrierIcon />
          <h3>Carrier</h3>
          <span {...stylex.props(styles.edit)}>Edit</span> <CaretDownIcon color="red" />
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
