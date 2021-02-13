import React from 'react';
import axios from 'axios';

import { providers, signIn } from 'next-auth/client'

export default function LoginPage({providers}) {
    return (
        <div>
            <form>
                <input type='text' placeholder='email'></input>
                <input type='password' placeholder='password'></input>
            </form>

            {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
        </div>
      ))}

        </div>
    )
}

LoginPage.getInitialProps = async (context) => {
    return {
      providers: await providers(context)
    }
  }
  