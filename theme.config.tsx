import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
	<>
	<img src="/images/logo.png" alt="WiHi" width={34} height={34} />
	</>
  ),
  head: (
	<>
		<link rel="icon" href="/favicon.png" type="image/png" />
	</>
  ),
  project: {
    link: 'https://github.com/wihi-labs/wihi-docs',
  },
  chat: {
    link: 'https://discord.gg/wihi',
  },
  docsRepositoryBase: 'https://github.com/wihi-labs/wihi-docs',
  footer: {
    text: 'WiHi Docs',
  },
}

export default config
