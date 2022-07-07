import {
  Badge,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
  Tag,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Homepage() {
  const {currentUser} = useAuth()
  return (
    <Layout>
      <Heading>Home page</Heading>
    <Text my={6}>{`The current user is : ${currentUser}.`}</Text>

      <Heading>
        Firebase Authentication
        <chakra.span
          fontWeight='black'
          fontStyle='italic'
          fontSize='5xl'
          mx={2}
        >
          v9.8.4
        </chakra.span>
        <Badge
          fontWeight='black'
          fontSize='3xl'
          mx={2}
          px={2}
          colorScheme='green'
        >
          Syng
        </Badge>
      </Heading>
      <OrderedList fontSize='3xl' my={4}>
        <ListItem>"react-router-dom": "^6.3.0" - no Switch, but Routes, useNavigate()</ListItem>
        <ListItem>Email Password Authentication (Register/Login)</ListItem>
        <ListItem>Google Sign in</ListItem>
        <ListItem>Forgot Password</ListItem>
        <ListItem>Custom Reset password page</ListItem>
        <ListItem>Protected routes</ListItem>
        <ListItem>
          <Code fontSize='inherit'> Redirect TO</Code> or Back (keeping the
          state)
        </ListItem>
        <ListItem>
          custom Auth Hook <Code fontSize='3xl'>useAuth()</Code>
        </ListItem>
        <ListItem>Loading indicators while sign-in/up</ListItem>
        <ListItem>
          Dark Mode enabled template using
          <Badge
            fontSize='inherit'
            colorScheme='teal'
            mx={2}
            textTransform='capitalize'
            borderRadius='md'
          >
            Chakra UI
          </Badge>
        </ListItem>
      </OrderedList>
      <Heading size='md' mt={20}>
        Some other links (only for reference):
      </Heading>
      <List>
        <ListItem>
          <Link to='/reset-password'>reset page</Link>
        </ListItem>
        <ListItem>
          <Link to='/forgot-password'>forgot page</Link>
        </ListItem>
      </List>
    </Layout>
  )
}
