import { Link } from 'react-router-dom'

export const MainNavigation: React.FC = () => {
  return (
      <>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link></li>
          <li>    <Link to='/recipe'>Recipe</Link>
            </li>
          </ul>
        </nav>
    </>)
}
