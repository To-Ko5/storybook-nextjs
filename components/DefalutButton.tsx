import { FC, CSSProperties } from 'react'

type Props = {
  label: string
  backgroundColor?: string
  padding?: number
  onClick: () => void
}
export const DefaultButton: FC<Props> = ({
  label,
  backgroundColor,
  padding = 8,
  onClick
}) => {
  const style: CSSProperties = {
    color: 'black',
    padding: `${padding}px`,
    border: 'none',
    borderRadius: '4px',
    backgroundColor: backgroundColor ? backgroundColor : '#ededed'
  }
  return (
    <button style={style} onClick={onClick}>
      {label}
    </button>
  )
}
