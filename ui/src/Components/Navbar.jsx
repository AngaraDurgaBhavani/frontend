import React from 'react';
import Button from './Button';
import Prebutton from './Prebutton';
import Logo from './Logo';
function Navbar() {
    return (

        <nav className='flex  bg-black justify-between '>
            <div><Logo /></div>
            <div className='flex  items-center justify-center gap-4 '>
                <Button text="Home" />
                <Button text="Product" />
                <Button text="Accesories" />
                <Button text="About us" />
            </div>
            <div><Prebutton /></div>

        </nav>
    )
}
export default Navbar