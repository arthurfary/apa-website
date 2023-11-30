"use client"

import Menu from "../sistema_menu/menu"
import Login from "../login/login"

import { useState } from 'react'

export default function SystemPage({ children }) {

  const [authenticado, setAuthenticado] = useState(false)

  return (
    <>
        {authenticado == true &&
          <>
            <Menu />
            
            {children}
          </>
        }

        {authenticado == false &&
          <>
            <Login setAuthenticado={setAuthenticado} />
          </>
        }

    </>
  )
}
