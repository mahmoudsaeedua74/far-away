import React, { useContext, useState } from 'react'
import { userContext } from '../../Context/Usercontext'

export default function PackingList() {
    let { items, setitem } = useContext(userContext)
    function handleDelet(id) {
        setitem(items => items.filter(item => item.id !== id))
    }
    function handeline(id) {
        setitem((items) => items.map((item) => item.id === id ? { ...item, package: !item.package } : item))
    }
    const [sortBy, setsortBy] = useState("input")
    let sortedItems;
    if (sortBy === "input") sortedItems = items
    console.log(sortedItems)
    if (sortBy == "packed") sortedItems = items.filter(item => !item.package)
    function deletAllItem() {
        const confirem = window.confirm("are you sure you want delet all pachage")
        if (confirem) setitem([])
    }

    return (
        <>
            <div className='list'>
                <ul>

                    {sortedItems.map((item) =>

                        <li key={item.id}>
                            <input type="checkbox" checked={item.package} onChange={() => handeline(item.id)} />
                            <span key={item.id} style={item.package ? { textDecoration: 'line-through' } : {}}>
                                {item.selctElment}
                                <span>   {item.input}
                                </span>
                            </span>
                            <button onClick={() => handleDelet(item.id)} style={{ color: "red", fontSize: "30px" }}> x </button>
                        </li>

                    )}

                </ul>
                <div className='actions' >
                    <select value={sortBy} onChange={e => setsortBy(e.target.value)}>
                        <option value="input">sort by input order </option>
                        <option value="packed">sort by packed status</option>
                    </select>
                    <button onClick={() => deletAllItem()}>clear list</button>
                </div>
            </div>
        </>
    )
}
