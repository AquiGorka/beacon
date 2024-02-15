import * as stylex from '@stylexjs/stylex'

import Chip from '../components/Chip'
import Input from '../components/Input'
import Link from '../components/Link'
import SearchIcon from '../icons/Search'
import InfoIcon from '../icons/Info'
import InfoFillIcon from '../icons/InfoFill'

import { dashboard, confirm, horizontalList } from './Dashboard.styles'

type Props = {
  data: {
    id: string
    labels: string[]
    status: string
    confirm: string[]
  }
}

function Dashboard({ data }: Props) {
  return (
    <section {...stylex.props(dashboard.container)}>
      <div {...stylex.props(dashboard.search)}>
        <Input placeholder="Search" icon={<SearchIcon />} />
      </div>
      <div {...stylex.props(dashboard.title)}>
        <h2>
          Load PRO <Link href="http://axleapi.com/beacon/load/${data.id}">#{data.id}</Link>
        </h2>
      </div>
      <div {...stylex.props(dashboard.labels)}>
        <div {...stylex.props(dashboard.subtitle)}>
          Labels <InfoIcon color="#FE8E65" width={14} />
        </div>
        <div {...stylex.props(horizontalList.container)}>
          {data.labels.map((label) => (
            <Chip>{label}</Chip>
          ))}
        </div>
      </div>
      <div {...stylex.props(dashboard.status)}>
        <div {...stylex.props(dashboard.subtitle)}>Status</div>
        <div {...stylex.props(horizontalList.container)}>
          <Chip
            color="#ED4D4D"
            borderColor="#FBD5D4"
            background="#FFEBEB"
            borderRadius={4}
            icon={<InfoFillIcon color="#ED4D4D" width={12} />}
          >
            {data.status}
          </Chip>
        </div>
      </div>
      <div {...stylex.props(dashboard.confirm)}>
        <div>
          <img src="img/small.png" alt="Beacon icon" height={50} />
        </div>
        <div {...stylex.props(confirm.card)}>
          <div>
            <div {...stylex.props(confirm.welcome)}>
              <div>Good morning, Mary!</div>
              <div {...stylex.props(confirm.caption)}>Please confirm the following updates:</div>
            </div>
            <div {...stylex.props(horizontalList.container)}>
              {data.confirm.map((item) => {
                return (
                  <div>
                    <span {...stylex.props(confirm.item)}>{item}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div {...stylex.props(confirm.image)}>
            <img src="img/packing.webp" alt="Confirm image" height={70} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
