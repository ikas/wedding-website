import React from 'react'
import raminho from './images/raminho.svg'
import './Header.scss'

function Card ({ className = '' }): JSX.Element {
  return (
    <div className={`card ${className}`}>
      <div className='title'>
        <h1>Mariana</h1>
        <img src={raminho} className='separator' alt='logo' />
        <h1>Henrique</h1>
      </div>
      <h3>10 de setembro de 2021</h3>
    </div>
  )
}

function Header (): JSX.Element {
  return (
    <header className='Header'>
      <div className='background'>
        <Card className='absolutely-centered' />
      </div>
      <div className='cover' />
    </header>
  )
}

export default Header
