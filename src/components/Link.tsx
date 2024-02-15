import * as stylex from '@stylexjs/stylex'

type Props = {
  href: string
  children: React.ReactNode
}

const styles = stylex.create({
  wrapper: {
    color: '#FE8052',
    textDecoration: 'none',
    borderBottom: '1px solid #FE8052',
  },
})

function Link({ href, children }: Props) {
  return (
    <a href={href} target="_blank" {...stylex.props(styles.wrapper)}>
      {children}
    </a>
  )
}

export default Link
