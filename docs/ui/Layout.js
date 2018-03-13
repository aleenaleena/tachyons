import React from 'react'

import { version } from '../package.json'
import Header from './Header'
import Footer from './Footer'

export default ({
  title = 'TACHYONS - Css Toolkit',
  className = '',
  skipFooter,
  fixed,
  children
}) => (
  <div className="w-100 sans-serif">
    <title>{title}</title>
    <link rel="stylesheet" href="https://file-bglcsbsfyd.now.sh/" />
    <link rel="stylesheet" href="https://file-zlngimivyb.now.sh" />

    <Header version={version} fixed={fixed} />
    <main className={className} children={children} />
    {skipFooter ? null : <Footer />}
  </div>
)
