import { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa"



export default function NestedMenu({ menus = [] }) {

    return (
        <nav className='bg-blue-500 fixed left-0 top-[79px] bottom-0 p-5 min-w-fit w-[15%]'>
            <MenuList list={menus} />
        </nav>
    )
}

function MenuList({ list = [] }) {
    return (
        <ul>
            {
                (list && list.length > 0) &&
                list.map(listItem => <MenuItem item={listItem} key={listItem.label} />)
            }
        </ul>
    )
}


function MenuItem({ item = null }) {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    function handleToggleChildren(item_label) {
        setDisplayCurrentChildren(prevCurrentChildren => {
            return ({
                ...prevCurrentChildren,
                [item_label]: !prevCurrentChildren[item_label]
            })
        })
    }


    return (
        <li>
            {item.children && item.children.length > 0
                ? <div className='flex items-center space-x-1 cursor-pointer'>
                    <a href={item.to} className='hover:text-white'>{item.label}</a>
                    {
                        item.children && item.children.length > 0
                        && <span className='text-xl select-none' onClick={() => handleToggleChildren(item.label)}>
                            {displayCurrentChildren[item.label] ? <FaMinus size={20} /> : <FaPlus size={20} />}
                        </span>
                    }
                </div>
                : <a href={item.to} className='hover:text-white' >{item.label}</a>
            }

            {
                (item && item.children && item.children.length > 0 && displayCurrentChildren[item.label]) &&
                <ul className='ml-6'>
                    {item.children.map(listItem => <MenuItem item={listItem} key={listItem.label} />)}
                </ul>
            }
        </li>
    )
}