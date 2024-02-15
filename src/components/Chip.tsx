import * as stylex from '@stylexjs/stylex'

type Props = {
  children: React.ReactNode
  color?: string
  borderColor?: string
  background?: string
  borderRadius?: number
  icon?: React.ReactNode
}

const styles = stylex.create({
  wrapper: (color, borderColor, background, borderRadius) => ({
    display: 'grid',
    gridGap: 4,
    gridTemplateColumns: 'auto auto',
    alignItems: 'center',
    border: `1px solid ${borderColor}`,
    borderRadius,
    padding: '2px 8px',
    fontSize: 14,
    fontWeight: '200',
    color,
    background,
  }),
})

function Chip({
  children,
  color = 'gray',
  borderColor = 'lightgray',
  background = 'transparent',
  borderRadius = 16,
  icon,
}: Props) {
  return (
    <span {...stylex.props(styles.wrapper(color, borderColor, background, borderRadius))}>
      {icon}
      {children}
    </span>
  )
}

export default Chip
