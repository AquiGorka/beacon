import * as stylex from '@stylexjs/stylex'

const header = stylex.create({
  container: {
    padding: 16,
    background: '#1C1C1C',
    display: 'flex',
    alignItems: 'center',
  },
})

function Header() {
  return (
    <header {...stylex.props(header.container)}>
      <img src="img/logo.png" alt="Beacon logo" height={45} />
    </header>
  )
}

export default Header
