import * as stylex from '@stylexjs/stylex'

type Props = {
  placeholder: string
  icon?: React.ReactNode
  label?: string
  type?: string
}

const styles = stylex.create({
  wrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    height: 24,
    width: 24,
    color: 'gray',
    padding: 4,
    position: 'absolute',
    top: 6,
    left: 8,
  },
  input: {
    color: 'gray',
    width: '100%',
    borderRadius: 8,
    border: '1px solid lightgray',
    padding: 8,
    fontSize: 16,
  },
  withIcon: {
    paddingLeft: 40,
  },
  label: {
    paddingTop: 8,
    fontSize: 18,
    color: 'gray',
    display: 'grid',
    gridGap: 6,
  },
})

function Input({ placeholder, icon, label, type = 'text' }: Props) {
  if (!icon) {
    if (!label) {
      return <input type={type} placeholder={placeholder} {...stylex.props(styles.input)} />
    }

    return (
      <label {...stylex.props(styles.label)}>
        {label}
        <input type={type} placeholder={placeholder} {...stylex.props(styles.input)} />
      </label>
    )
  }

  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.icon)}>{icon}</div>
      <input
        {...stylex.props(styles.input, styles.withIcon)}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
