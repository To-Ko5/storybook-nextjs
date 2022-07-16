import { FC } from 'react'

type Props = {
  color: string
  borderColor: string
  placeholder: string
  onFocus: () => void
}
export const Input: FC<Props> = ({
  color,
  borderColor,
  placeholder,
  onFocus
}) => {
  const style = {
    color: color,
    borderColor: borderColor
  }
  return (
    <input
      style={style}
      placeholder={placeholder}
      onFocus={onFocus}
      type="text"
    />
  )
}
