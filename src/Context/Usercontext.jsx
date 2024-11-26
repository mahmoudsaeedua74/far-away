import React, { Children, createContext, useEffect, useState } from 'react'
export let userContext = createContext()

export default function Usercontext({ children }) {
  const [items, setitem] = useState(localStorage.getItem("items")== null ? [] : JSON.parse(localStorage.getItem("items")))
const newItem=items.lenght;
  return (
    <>
      <userContext.Provider value={{ items, setitem }}>
        {children}
      </userContext.Provider>
    </>
  )
}
