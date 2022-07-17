import { FC, CSSProperties } from 'react'

type Props = {
  label: string
  backgroundColor?: string
  onClick: () => void
}
export const DefaultButton: FC<Props> = ({
  label,
  backgroundColor,
  onClick
}) => {
  const style: CSSProperties = {
    color: 'black',
    padding: '8px',
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
