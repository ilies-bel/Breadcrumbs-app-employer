import React from 'react';
import axios from 'axios';

import { providers, signIn, signOut, useSession } from 'next-auth/client'

export default function LoginPage({providers}) {
  const [ session, loading ] = useSession();
  //let providers = props.providers
    return (
        <div>
            <form>
                <input type='text' placeholder='email'></input>
                <input type='password' placeholder='password'></input>
                <button type="submit">Submit</button>
            </form>
            {console.log(providers)}
            {
                providers && Object.values(providers).map((provider, index) =>
                    <div key={index}>
                        <button onClick={() => signIn(provider.id)} >Sign in with {provider.name}</button>
                    </div>
                )
            }
        </div>
            )
}

LoginPage.getInitialProps = async (context) => {
  return {
    providers: await providers(context)
  }
}

