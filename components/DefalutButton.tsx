import { FC } from 'react'

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
  const style = {
    color: 'black',
    padding: '8px',
    borderRadious: '16px',
    backgroundColor: backgroundColor ? backgroundColor : '#ededed'
  }
  return (
    <button style={style} onClick={onClick}>
      {label}
    </button>
  )
}
