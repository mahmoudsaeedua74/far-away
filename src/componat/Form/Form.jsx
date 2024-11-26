import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../../Context/Usercontext';

export default function Form() {
    //for select input and selected and updata their data 
    const [input, setinput] = useState("")
    const [selctElment, setselctElment] = useState(1)

    let { items, setitem } = useContext(userContext)
    console.log(items)
    function handleitem(item) {
        setitem((items) => [...items, item])
        localStorage.setItem("items", JSON.stringify(items))
    }
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    function handlesumbit(e) {
        e.preventDefault();
        if (!input) return;
        const newItem = { selctElment, input, package: false,id: Date.now(),} //that for make a obj with ifno for item 
        setinput("") //for reset 
        setselctElment(1) //for reset 
        handleitem(newItem)
    }
    return (
        <>
            <form className='add-form  flex-col sm:flex-row' onSubmit={handlesumbit}
            >
                <h3>what do you need for your trip</h3>
                <select value={selctElment} onChange={e => setselctElment(Number(e.target.value))}>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (<option value={num} key={num}>{num}</option>))}
                </select>
                <input type="text" value={input} onChange={e => setinput(e.target.value)} />
                <button>ADD</button>
            </form>

        </>
    )
}
