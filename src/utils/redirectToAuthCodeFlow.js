
export const redirectToAuthCodeFlow = async (clientId) => {
  
    const generateCodeVerifier = (length) => {
        let text = ''
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

        for(let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        return text
    }

    const generateCodeChallenge = async (codeVerifier) => {
        const data = new TextEncoder().encode(codeVerifier)
        const digest = await window.crypto.subtle.digest('SHA-256', data)
        return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '')
    }

    const verifier = generateCodeVerifier(128)
    const challenge = await generateCodeChallenge(verifier)
    const scopes = 'user-read-private user-read-email'
    const authEndpoint = 'https://accounts.spotify.com/authorize?'

    localStorage.setItem('verifier', verifier)

    const params = new URLSearchParams()
    params.append('client_id', clientId)
    params.append('response_type', "code")
    params.append('redirect_uri', 'http://localhost:5173/')
    params.append('scope', scopes)
    params.append('code_challenge_method', 'S256')
    params.append('code_challenge', challenge)

    document.location = authEndpoint + params.toString()

}


