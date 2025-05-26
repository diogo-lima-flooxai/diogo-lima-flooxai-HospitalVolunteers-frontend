import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to='/login' className='font-medium mr-4 hover:underline'>Entrar</Link>
      <Link to='/register' className='font-medium mr-5 hover:underline'>Registre-se</Link>
    </div>
  )
}

export default Nav;