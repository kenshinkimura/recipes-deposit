import { MainNavigation } from '@/components/MainNavigation.tsx'

export const ErrorPage: React.FC = () => {
  return (
        <>
        <MainNavigation />
            <main>
                <h1>An error occured</h1>
                <p>Could not find this page</p>
            </main>
        </>
  )
}
