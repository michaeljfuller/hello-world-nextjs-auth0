'use client';

import {useState} from "react";
import {useAuth0} from "@auth0/auth0-react";

export default function AuthButton() {
  const auth = useAuth0()
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const logIn = () => {
    setIsLoggingIn(true)
    auth.loginWithRedirect()
     .catch(e => console.log('Failed to log in', e))
    .finally(() => setIsLoggingIn(false))
  }

  const logOut = () => {
  setIsLoggingOut(true)
  auth.logout()
    .catch(e => console.log('Failed to log out', e))
    .finally(() => setIsLoggingOut(false))
  }

  if (auth.isLoading) {
    return <button className={className} disabled>Loading...</button>
  }
  if (auth.isAuthenticated) {
    return <button className={className} onClick={logOut} disabled={isLoggingOut}>Log Out {auth.user?.nickname}</button>
  }
  return <button className={className} onClick={logIn} disabled={isLoggingIn}>Log In</button>
}

const className = [
  "border",
  "border-gray-300",
  "rounded-lg",
  "bg-gradient-to-b",
  "from-zinc-200",
  "px-4",
  "py-2",
  "backdrop-blur-2xl",
  "dark:border-neutral-800",
  "dark:bg-zinc-800/30",
  "dark:from-inherit",
].join(" ")
