import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { MantineProvider, MantineThemeOverride } from '@mantine/core'
import '@/styles/main.css'

const getTheme = (pathname: string): MantineThemeOverride => {
  const theme = {}

  if (pathname.startsWith('/blue')) {
    return {
      ...theme,
      primaryColor: 'blue'
    }
  }

  if (pathname.startsWith('/green')) {
    return {
      ...theme,
      primaryColor: 'green'
    }
  }

  if (pathname.startsWith('/red')) {
    return {
      ...theme,
      primaryColor: 'red'
    }
  }

  if (pathname.startsWith('/dark')) {
    return {
      ...theme,
      colorScheme: 'dark'
    }
  }

  return theme
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
        styles={{
          Button: () => ({
            root: {
              '&:not(:disabled):active': {
                transform: 'none'
              }
            }
          })
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
