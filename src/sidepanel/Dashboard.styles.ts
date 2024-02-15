import * as stylex from '@stylexjs/stylex'

export const dashboard = stylex.create({
  container: {
    padding: 16,
    background: '#FFFDF9',
    display: 'grid',
    gridGap: 16,
    position: 'relative',
  },
  title: {
    fontSize: 22,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 500,
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
    gridGap: 8,
    gridTemplateColumns: 'auto 1fr',
  },
})

export const confirm = stylex.create({
  card: {
    display: 'grid',
    gridGap: 4,
    gridTemplateColumns: '1fr auto',
    background: 'linear-gradient(90deg, rgba(63,83,216,1) 50%, rgba(19,37,159,1) 100%)',
    padding: 8,
    paddingBottom: 24,
    borderRadius: 8,
  },
  welcome: { color: '#D3D7F6', display: 'grid', gridGap: 4, paddingBottom: 20, fontSize: 14 },
  caption: { color: '#B9BFF0', fontSize: 12 },
  item: {
    borderBottom: '1px solid #F3F4FD',
    color: '#F3F4FD',
  },
  image: { display: 'flex', alignItems: 'top', justifyContent: 'center', padding: 4 },
})

export const horizontalList = stylex.create({
  container: {
    display: 'inline-flex',
    flexDirection: 'row',
    gridGap: 4,
  },
})
