// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];


import { useState } from 'react'

import './App.css'
import Logo from './componat/Logo/Logo';
import Form from './componat/Form/Form';
import PackingList from './componat/PackingList/PackingList';
import Stats from './componat/Stats/Stats';
import Usercontext from './Context/Usercontext';

function App() {

  return (
    <>
      <div className='app'>
        <Usercontext>
          <Logo />
          <Form />
          <PackingList />
          <Stats />
        </Usercontext>

      </div>
    </>
  )
}

export default App
