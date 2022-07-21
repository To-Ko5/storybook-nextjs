import { FC, CSSProperties } from 'react'
import { DefaultButton } from './DefalutButton'

type Props = {
  backgroundColor?: string
  padding?: number
}

export const Header: FC<Props> = ({
  backgroundColor = '#ededed',
  padding = 8
}) => {
  const onClick = () => {
    console.log('click')
  }
  const style: CSSProperties = {
    backgroundColor,
    padding: `${padding}px`
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
