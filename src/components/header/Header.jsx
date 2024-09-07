import React from 'react'
import './Header.css'

const Header = () => {

    const headerData = [
        {
            name: "Home",
            link: "#"
        },
        {
            name: "About",
            link: "#about"
        },
        {
            name: "Skills",
            link: "#skills"
        }
    ]

    return (

        <header>
            <h1>Berlin.</h1>

            <div className='navitems'>
                {headerData.map((item, index) => {
                    return (
                        <a href={item.link} className="" key={index}>{item.name}</a>
                    )
                })}
            </div>
        </header>


    )
}

export default Header;