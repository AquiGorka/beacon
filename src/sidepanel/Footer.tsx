import * as stylex from '@stylexjs/stylex'

const footer = stylex.create({
  container: {
    padding: 16,
  },
  button: {
    width: '100%',
    background: '#FE7F51',
    color: 'white',
    padding: '16px 0',
    border: 'none',
    borderRadius: 12,
    fontSize: 24,
  },
})

function Footer() {
  return (
    <footer {...stylex.props(footer.container)}>
      <button {...stylex.props(footer.button)}>Confirm</button>
    </footer>
  )
}

export default Footer
