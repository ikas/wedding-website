import React from 'react'
import Header from '../Header'
import Section from '../Section'
import raminho from './images/raminho.svg'
import details from './images/details.png'
import underline from './images/underline.png'
import photo0 from './images/photo0.jpeg'
import photo1 from './images/photo1.jpeg'
import photo2 from './images/photo2.jpeg'
import photo3 from './images/photo3.jpeg'
import photo4 from './images/photo4.jpeg'
import './App.scss'

function App (): JSX.Element {
  return (
    <div className='App'>
      <Header />
      <Section>
        <h2>Uma vida num dia</h2>
        <p>
          Vamos celebrar uma vida juntos, o que já vivemos e o que ainda virá. E
          temos todo o gosto que o façam connosco! Esperamos que consigam
          partilhar um dia de alegria e amor ao nosso lado.
        </p>
      </Section>
      <Section className='details'>
        <img src={details} className='rings' alt='details' />
        <h2>Detalhes</h2>
        <p>
          O casamento realiza-se no dia 10 de Setembro, pelas 15h, na{' '}
          <a href='/'>Quinta de Mouriz</a>.
        </p>
        <img src={raminho} className='raminho' alt='raminho' />
      </Section>
      <Section className='confirmations'>
        <h2>
          <a href='/'>Confirma aqui</a>
        </h2>
        <img src={underline} className='underline' />
        <img src={photo0} className='photo' />
        <img src={photo1} className='photo' />
        <img src={photo2} className='photo' />
        <img src={photo3} className='photo' />
        <img src={photo4} className='photo' />
      </Section>
      <footer>
        <span>{`2021 - feito com <3`}</span>
      </footer>
    </div>
  )
}

export default App
