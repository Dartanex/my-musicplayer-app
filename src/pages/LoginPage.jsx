import { Signing } from "../components/Login/Signing"
import { Navbar } from "../components/Navbar/Navbar"

export const LoginPage = () => {

  return (
    <>
      <div className="container w-full  bg-slate-600 flex content-center justify-center flex-wrap flex-col">
        <Signing />
      </div>
      <Navbar />
    </>
  )
}
