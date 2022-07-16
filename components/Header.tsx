import { FC, CSSProperties } from 'react'
import { DefaultButton } from './DefalutButton'

type Props = {
  backgroundColor: string
}

export const Header: FC<Props> = ({ backgroundColor }) => {
  const onClick = () => {
    console.log('click')
  }
  const style: CSSProperties = {
    backgroundColor,
    padding: '8px',
    display: 'flex',
    justifyContent: 'space-between'
  }
  return (
    <header style={style}>
      <p>Logo</p>

      <DefaultButton label="red" onClick={() => onClick} />
    </header>
  )
}
