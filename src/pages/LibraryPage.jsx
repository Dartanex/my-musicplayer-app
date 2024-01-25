
import { useEffect, useState } from "react"
import { spotify } from "../../spotify"
import { Navbar } from "../components/Navbar/Navbar"



export const LibraryPage = () => {
 
  const [data, setData] = useState([])

  useEffect(() => {
    const getProfile = async() => {
      const response = await spotify()
      console.log(response)
      setData(response)
    }
    getProfile()

  },[])
  console.log(data)
  return (
    <>
      <h1>LibraryPage</h1>


      <Navbar />
    </>
  )
}
