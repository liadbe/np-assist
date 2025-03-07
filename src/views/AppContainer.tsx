import Header from "../components/Header"
import { Outlet } from "react-router-dom"
export const AppContainer: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}