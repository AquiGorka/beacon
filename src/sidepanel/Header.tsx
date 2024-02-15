import * as stylex from '@stylexjs/stylex'

const header = stylex.create({
  container: {
    padding: '16px 4px',
    background: '#1C1C1C',
    display: 'flex',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
})

function Header() {
  return (
    <header {...stylex.props(header.container)}>
      <img src="img/logo.png" alt="Beacon logo" height={35} />
    </header>
  )
}

export default Header
