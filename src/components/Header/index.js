import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1 className="m-6 font-medium">Freya</h1>
      </Link>
    </header>
  )
}