import React, { Children } from 'react';

// import { Container } from './styles';

function Layout({children}) {
  return (
    <section>
      <header>
        header
      </header>
      {children}
    </section>
  )
}

export default Layout;