


export const getAccessToken = async (clientId, code) => {
  
    const verifier = localStorage.getItem("verifier")

    const params = new URLSearchParams()
    params.append('client_id', clientId)
    params.append('grant_type', "authorization_code")
    params.append('code', code)
    params.append('redirect_uri', 'http://localhost:5173/')
    params.append('code_verifier', verifier)
    try {
        const result = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params
        })
        const {access_token} = await result.json()
        console.log(access_token)
        return access_token
    } catch (error) {
        throw new Error("Somenthing went wrong with the api post request")

    }
}