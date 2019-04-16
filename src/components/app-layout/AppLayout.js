import React from 'react';
import Helmet from 'react-helmet';

import { helmet } from 'utils/helmet';
import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';

import s from './AppLayout.module.scss';

export default ({ children }) => (

  <>
    <div className={s.App}>
      <Helmet {...helmet} />
      <Header />
      {children}
      <Footer />
    </div>
  </>
  
)