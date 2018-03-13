import React from 'react'

import { version } from '../package.json'
import Header from './Header'
import Footer from './Footer'

export default ({
  title = 'TACHYONS - Css Toolkit',
  className = '',
  skipHeader,
  skipFooter,
  children
}) => (
  <div className="w-100 sans-serif">
    <title>{title}</title>
    <link rel="stylesheet" href="https://file-bglcsbsfyd.now.sh/" />
    <link rel="stylesheet" href="https://file-zlngimivyb.now.sh" />

    {skipHeader ? null : <Header version={version} />}
    <main className={className} children={children} />
    {skipFooter ? null : <Footer />}
  </div>
)
