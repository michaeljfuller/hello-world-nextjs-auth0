'use client';

import {useAuth0} from "@auth0/auth0-react";

export default function AuthDetails() {
  const auth = useAuth0()
  return (
    <div className={className}>
      <pre>Auth: {JSON.stringify(auth, null, 2)}</pre>
    </div>
  )
}

const className = [
  "overflow-x-auto",
  "max-w-full",
  "border",
  "border-gray-300",
  "px-4",
  "py-2",
  "rounded-xl",
  "bg-gray-200",
  "bg-gradient-to-b",
  "from-zinc-200",
  "backdrop-blur-2xl",
  "dark:border-neutral-800",
  "dark:bg-zinc-800/30",
  "dark:from-inherit",
  "dark:bg-zinc-800/30"
].join(" ")
