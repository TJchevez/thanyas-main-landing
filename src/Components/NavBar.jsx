import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div>NavBar</div>
    <Link to={`/Poems`} className='button-test'>
    <button>Click Here For Poems</button>
    
    </Link>
    </>
  )
}

export default NavBar