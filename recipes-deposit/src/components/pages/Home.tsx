import { ButtonMui } from '@/components/ButtonMui.tsx'
import { Link } from 'react-router-dom'

export const Home = (): JSX.Element => {
  return (
        <main>
            <div>My home page</div>
            <div><Link to='/recipe'>go to recipe</Link></div>
            <ButtonMui color={'secondary'} />
        </main>
  )
}
