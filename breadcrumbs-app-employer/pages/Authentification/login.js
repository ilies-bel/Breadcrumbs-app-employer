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
            </form>



        </div>
    )
}

LoginPage.getInitialProps = async (context) => {
  return {
    providers: await providers(context)
  }
}
