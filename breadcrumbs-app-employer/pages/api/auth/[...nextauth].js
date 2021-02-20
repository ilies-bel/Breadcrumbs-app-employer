import NextAuth from 'next-auth'
import Providers from 'next-auth/providers';

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Google({
            id: "google",
            clientId: "1030856253415-8qv7lejjga6im2od2u200glgqutrf8ee.apps.googleusercontent.com",
            clientSecret: "YUtKAk1smVozdY3lM6tTjOyd",
            authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'
            }),
      // ...add more providers here
      Providers.LinkedIn({
        id: "linkedProviderId",
        clientId: "78xqyjqta1nc2n",
        clientSecret: "LgW3aOtc0HgG5rL0",
        authorizationUrl: " https://www.linkedin.com/oauth/v2/authorization",
        accessTokenUrl: "https://www.linkedin.com/oauth/v2/accessToken",
        authorizationParams: {
          grant_type: 'authorization_code'
        }
      })
    ],
    pages: {
        signIn: '/Authentification/login',
        signOut: '/',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: null // If set, new users will be directed here on first sign in
      }
    // A database is optional, but required to persist accounts in a database
    //database: process.env.DATABASE_URL,
  })