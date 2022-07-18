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
    padding: '8px'
  }
  const containerStyle: CSSProperties = {
    maxWidth: '980px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  return (
    <header style={style}>
      <div style={containerStyle}>
        <p>Logo</p>
        <div>
          <DefaultButton label="button" onClick={() => onClick} />
        </div>
      </div>
    </header>
  )
}
