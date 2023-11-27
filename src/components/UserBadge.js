'use client';

import {useAuth0} from "@auth0/auth0-react";

export default function UserBadge({size = 40}) {
  const {user} = useAuth0()
  if (!user) return <div style={{ width: size, height: size}} />
  return (
    <img
      src={user?.picture}
      width={size}
      height={size}
      title={user?.name}
      style={{borderRadius: size / 2}}
    />
  )
}
