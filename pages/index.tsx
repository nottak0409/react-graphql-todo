import type { NextPage } from 'next'
import Head from 'next/head'
import TaskList from '../component/TaskList'
import { Container, Heading, Stack } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Container my='32px'>
          <Stack spacing='32px'>
            <Heading>TaskList</Heading>
            <TaskList />
          </Stack>
        </Container>
      </main>
    </div>  )
}

export default Home
