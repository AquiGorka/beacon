import * as stylex from '@stylexjs/stylex'

export const styles = stylex.create({
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    gridGap: 30,
    overflow: 'scroll',
    width: '100vw',
    borderBottom: '1px solid #E7E7E7',
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
    fontSize: 18,
    minWidth: 'fit-content',
    padding: '4px 0',
    color: '#191919',
    cursor: 'pointer',
  },
  selected: {
    color: '#FE8052',
    borderBottom: '2px solid #FE8052',
  },
  page: {
    padding: '24px 16px',
    background: 'white',
  },
  details: {
    borderBottom: '1px solid #E7E7E7',
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
    gridGap: 8,
  },
  twoColumns: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: 24,
  },
})
