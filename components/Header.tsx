import { FC, CSSProperties } from 'react'
import { DefaultButton } from './DefalutButton'

type Props = {
  backgroundColor?: string
}

export const Header: FC<Props> = ({ backgroundColor = '#ededed' }) => {
  const onClick = () => {
    console.log('click')
  }
  const style: CSSProperties = {
    backgroundColor,
    padding: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
  return (
    <header style={style}>
      <p>Logo</p>
      <div>
        <DefaultButton label="red" onClick={() => onClick} />
      </div>
    </header>
  )
}
