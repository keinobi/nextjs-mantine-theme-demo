import { VFC } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { AppShell, Button, Center, Navbar, Paper, Text } from '@mantine/core'

const IndexPage: NextPage = () => (
  <AppShell
    padding='md'
    navbar={<MyNavbar />}
    styles={(theme) => ({
      main: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
      }
    })}
  >
    <Center style={{ height: '100%' }}>
      <Paper shadow='xs' p='lg' withBorder>
        <Text>Hello, Mantine.</Text>
        <Button>Button</Button>
      </Paper>
    </Center>
  </AppShell>
)

const MyNavbar: VFC = () => (
  <Navbar p='xs' width={{ base: 300 }}>
    <Link href='/blue' passHref>
      <Button component='a' variant='subtle'>Light - Blue</Button>
    </Link>
    <Link href='/green' passHref>
      <Button component='a' variant='subtle'>Light - Green</Button>
    </Link>
    <Link href='/red' passHref>
      <Button component='a' variant='subtle'>Light - red</Button>
    </Link>
    <Link href='/dark' passHref>
      <Button component='a' variant='subtle'>Dark - Blue</Button>
    </Link>
  </Navbar>
)

export default IndexPage
