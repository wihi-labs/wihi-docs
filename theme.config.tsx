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
    text: `© ${new Date().getFullYear()} WiHi. All rights reserved.`,
  },
  useNextSeoProps() {
	  return {
		titleTemplate: '%s | WiHi Docs',
		defaultTitle: 'WiHi Docs'
	  }
  },
  primaryHue: { dark: 200, light: 200 },
  primarySaturation: { dark: 100, light: 100 },
}

export default config
