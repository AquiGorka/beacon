import * as stylex from '@stylexjs/stylex'

import Chip from '../components/Chip'
import Input from '../components/Input'
import Link from '../components/Link'
import SearchIcon from '../icons/Search'
import InfoIcon from '../icons/Info'
import InfoFillIcon from '../icons/InfoFill'

type Props = {
  data: {
    id: string
    labels: string[]
    status: string
    confirm: string[]
  }
}

const dashboard = stylex.create({
  container: {
    padding: 16,
    background: '#FFFDF9',
    display: 'grid',
    gridGap: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 300,
  },
  search: {
    padding: '0 1px',
    paddingBottom: 16,
  },
  labels: {
    display: 'grid',
    gridTemplateColumns: '1fr   auto',
    alignItems: 'center',
  },
  status: {
    display: 'grid',
    gridTemplateColumns: '1fr   auto',
    alignItems: 'center',
  },
  confirm: {
    display: 'grid',
    gridGap: 12,
    gridTemplateColumns: 'auto 1fr',
  },
})
const confirm = stylex.create({
  card: {
    display: 'grid',
    gridGap: 8,
    gridTemplateColumns: '1fr auto',
    background: 'linear-gradient(90deg, rgba(63,83,216,1) 50%, rgba(19,37,159,1) 100%)',
    padding: 16,
    paddingBottom: 24,
    borderRadius: 8,
  },
  welcome: { color: 'white', display: 'grid', gridGap: 4, paddingBottom: 20 },
  caption: { color: 'lightgray' },
  item: {
    textDecoration: 'underline',
    color: 'white',
  },
  image: { display: 'flex', alignItems: 'top', justifyContent: 'center', padding: 4 },
})
const horizontalList = stylex.create({
  container: {
    display: 'inline-flex',
    flexDirection: 'row',
    gridGap: 4,
  },
})

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
          Labels <InfoIcon color="#FE8E65" />
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
            color="red"
            borderColor="red"
            background="#FFEBEB"
            borderRadius={4}
            icon={<InfoFillIcon color="red" />}
          >
            {data.status}
          </Chip>
        </div>
      </div>
      <div {...stylex.props(dashboard.confirm)}>
        <div>
          <img src="img/small.png" alt="Beacon icon" height={55} />
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
            <img src="img/packing.webp" alt="Confirm image" height={100} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
