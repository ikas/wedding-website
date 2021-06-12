import React from 'react'
import './Section.scss'

type Props = {
  className?: string;
  children?: React.ReactNode;
};

function Section (props: Props): JSX.Element {
  return (
    <section className={props.className}>
        <div className='container'>
          {props.children}
        </div>
      </section>
  )
}

export default Section
