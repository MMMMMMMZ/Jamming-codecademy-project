const clientID = "df845b81aa6f4eb3b4552fd43b342ef6"
const redirectUri = 'http://localhost:3000/'
let accessToken;

const spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1]
            const expires_in = Number(expiresInMatch[1])

            window.setTimeout(() => { accessToken = '', expires_in * 1000 })
            window.history.pushState('Acess Token', null, '/')
            return accessToken
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
            window.location = accessUrl
        }
    }

}



export default spotify