import { Outlet } from 'react-router-dom'
import { MainNavigation } from '@/components/MainNavigation.tsx'
import classes from '@/components/pages/Root.module.css'
export const RootLayout: React.FC = () => {
  return (
      <>
     <MainNavigation/>
        <main className={classes.content}>
          <Outlet/>
        </main>

      </>
  )
}
