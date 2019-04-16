import React from 'react'
import { Link } from "gatsby"

import { Container } from 'components/container/Container'
import WknLogo from 'assets/svg/wkn.svg'

import s from './Footer.module.scss';

export class Footer extends React.Component {
  
  render() {
    
    return (
  
      <>
      
        <footer className={s.Footer}>
          <Container className={s.Footer__container}>
          
            <Link className={s.brand} to="/">
              <WknLogo />
            </Link>
          
            <a href="http://www.wokine.com" className={s.made__by} target="_blank" rel="noopener noreferrer">
              Créé par
              <span className={s.wkn}>
                <WknLogo/>
              </span>
            </a>
            
          </Container>
        </footer>
        
      </>
      
    )
  }
  
}
