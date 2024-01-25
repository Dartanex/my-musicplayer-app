import { getAccessToken } from "./src/utils/getAccessToken"
import { getProfile } from "./src/utils/getProfile"
import { redirectToAuthCodeFlow } from "./src/utils/redirectToAuthCodeFlow"

export const spotify = async() => {
 
    const clientId = import.meta.env.VITE_CLIENT_ID
    const params = new URLSearchParams(window.location.search)
    const code = params.get("code")
    
    if (!code) {
        redirectToAuthCodeFlow(clientId)
    } else {
        const accessToken = await getAccessToken(clientId, code)
        const profile = await getProfile(accessToken)
        console.log(accessToken)
        return profile
    }

}



