


import React, { useContext } from 'react'
import { userContext } from '../../Context/Usercontext'

export default function Stats() {
  let { items, setitem } = useContext(userContext)
  if(!items.length) return <footer className='stats'><em>Start adding your items to your packing lis</em></footer>
const newItem=items.length
const itemPacked=items.filter((item)=>item.package).length
const percenttage =Math.round((itemPacked /newItem) *100)
  return (

    <>
    <footer className='stats'>
    <em>
    {percenttage === 100 ? " you got everthing! Ready to go ✈" : ` you have ${newItem} item on your list and you already packed ${itemPacked} ${percenttage}%`}
   
    </em>
   </footer>
    </>
  )
}
