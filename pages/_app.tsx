import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { MantineProvider, MantineThemeOverride } from '@mantine/core'
import '@/styles/main.css'

const getTheme = (pathname: string): MantineThemeOverride => {
  if (pathname.startsWith('/blue')) {
    return {
      primaryColor: 'blue'
    }
  }

  if (pathname.startsWith('/green')) {
    return {
      primaryColor: 'green'
    }
  }

  if (pathname.startsWith('/red')) {
    return {
      primaryColor: 'red'
    }
  }

  if (pathname.startsWith('/dark')) {
    return {
      colorScheme: 'dark'
    }
  }

  return {}
}

export default function App ({ Component, pageProps, router }: AppProps) {
  const { asPath } = router
  const theme = getTheme(asPath)

  return (
    <>
      <DefaultSeo title='App' />
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={theme}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
