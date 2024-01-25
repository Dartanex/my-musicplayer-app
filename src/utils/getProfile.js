export const getProfile = async (token) => {
  
    try {
        const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
        })
        const response = await result.json()
        console.log(response)
        return response
    } catch (error) {
        throw new Error("Somenthing went wrong with the axios.get data")
    }
}
