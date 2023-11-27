'use client'

import {useEffect, useState} from "react";
import {useRouter} from 'next/navigation'
import {Auth0Provider} from '@auth0/auth0-react';

const DOMAIN = process.env.NEXT_PUBLIC_AUTH0_DOMAIN
const CLIENT_ID = process.env.NEXT_PUBLIC_AUTH0_CLIENTID

export function AuthProvider({children}) {
  const router = useRouter()
  const [isClientSide, setClientSide] = useState(false);

  useEffect(() => setClientSide(true), []);
  if (!isClientSide) return null

  if (!DOMAIN) throw 'Env var not set: NEXT_PUBLIC_AUTH0_DOMAIN'
  if (!CLIENT_ID) throw 'Env var not set: NEXT_PUBLIC_AUTH0_CLIENTID'

  return <Auth0Provider
    domain={DOMAIN}
    clientId={CLIENT_ID}
    authorizationParams={{redirect_uri: window?.location.origin}}
    onRedirectCallback={appState => router.replace(appState?.returnTo ?? window?.location.pathname)}
  >{children}</Auth0Provider>
}
