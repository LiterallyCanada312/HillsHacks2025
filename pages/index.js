/** @jsxRuntime classic */
/** @jsx jsx */

import {
  jsx,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Container,
  Grid,
  Card,
  Flex,
  Link,
  Alert
} from 'theme-ui'

import React from 'react'

import Faq from '../components/accordion'
import Nav from '../components/nav'
import Hero from '../components/hero'

const Index = props => (
  <>
    <Nav />
    <Hero />
    <Container as="section" variant="copy" mt={4} {...props}></Container>
    <Container id="about" as="section" py={4} variant="copy" {...props}>
      <Heading variant="headline" sx={{ fontSize: '40px' }}>
        This is not your typical hackathon.
      </Heading>
      <Text as="p" sx={{ fontSize: 2 }} mb={3}>
        <b>hillsHacks was born with a mission:</b> to show that computer science
        is something anyone can learn. It's more than memorizing technical
        jargon and stuffing code into machines. CS is for innovators, creators,
        problem solvers, artists, and <i>you</i>.
      </Text>
      <Text as="p" sx={{ fontSize: 2 }} mb={3}>
        Rather than leave you alone expecting a full-fledged product launch at
        the end of the day, we'll guide you through the learning process with{' '}
        <b>workshops</b> from Watchung Hills alumni. Plus, we'll provide you
        one-on-one <b>mentorship</b> and an opportunity to listen in and ask
        questions about tech during our <b>Panel Q&A</b> session. Deviating from
        the traditional hackathon, there will be a no-code{' '}
        <b>design challenge</b>, with a greater emphasis on ideas and how
        technology can be used for good. Participants can win generous cash{' '}
        <b>prizes</b>, too!
      </Text>
      <Text variant="lead">
        <b>
          This is the eighth iteration of hillsHacks, Watchung Hills' premier
          hackathon open to students grades 7 through 12.
        </b>
      </Text>
      <br />
    </Container>
    <Container as="section" py={4} variant="copy" {...props}>
      <Image
        src="/eventPhoto.jpg"
        alt="Event Photo 1"
        mb={2}
        sx={{
          boxShadow: 'card',
          borderRadius: 'extra',
          userDrag: 'none',
          WebkitUserDrag: 'none',
        }}
      />
      <Grid sx={{ columnGap: 3 }} columns={[1, 2, 2]}>
        <Image
          src="/eventPhoto1.jpg"
          alt="Event Photo 2"
          sx={{
            boxShadow: 'card',
            borderRadius: 'extra',
            userDrag: 'none',
            WebkitUserDrag: 'none',
          }}
        />
        <Image
          src="/eventPhoto2.jpg"
          alt="Event Photo 3"
          sx={{
            boxShadow: 'card',
            borderRadius: 'extra',
            userDrag: 'none',
            WebkitUserDrag: 'none',
          }}
        />
      </Grid>
    </Container>
    <Container as="section" variant="copy" py={4} {...props}>
      <Card>
        <Heading variant="headline" sx={{fontSize: "40px"}}>Details</Heading>
        <Text as="p"><b>Where:</b> <Link href="https://goo.gl/maps/se4i7cSCAxGcRvYHA" target="_blank">Watchung Hills Regional High School</Link> (108 Stirling Rd, Warren, NJ 07059)</Text><br/>
        <Text as="p"><b>When:</b> March 16th, 2025 11:00 AM - 4:00 PM</Text><br/>
        <Text as="p"><b>Cost:</b> There will be an entry fee of $25 to cover costs for food and T-shirts for all attendees!</Text><br/>
        <Text as="p"><b>Who:</b> All students in grades 7 and up are welcome to attend, regardless of experience!</Text>
      </Card>
    </Container>
    <Container id="faq" as="section" py={4} {...props}>
      <Heading variant="headline">FAQ</Heading>
      <Faq />
      <br />
    </Container>

    <Container
      id="schedule"
      as="section"
      sx={{ textAlign: 'center' }}
      py={4}
      {...props}
    >
      <Heading variant="headline" mb={4}>
        Schedule
      </Heading>
      <Image 
        src="/schedule.jpg"
        sx={{
          width: '100%',
          maxWidth: '720px',
          userDrag: 'none',
          WebkitUserDrag: 'none',
          boxShadow: 'elevated',
        }}
      />
    </Container>
    <Container
      id="Sponsors"
      as="section"
      sx={{ textAlign: 'center' }}
      py={4}
      {...props}
    >
      <Heading variant="headline" mb={4}>
        Sponsors
      </Heading>
      <a href="https://www.codeninjas.com/nj-green-brook" target="_blank">
        <Image 
          src="/codeninjas.png"
          sx={{
            width: '100%',
            maxWidth: '360px',
            userDrag: 'none',
            WebkitUserDrag: 'none',
            cursor: 'pointer',
            borderRadius: 'extra',
          }}
        />
      </a>
    </Container>
    <Container as="section" py={4} {...props}>
      <Card>
        <Flex sx={{ flexWrap: 'wrap' }}>
          <Box sx={{ flex: '1 1 auto' }}>
            <Heading as="h1" variant="headline">
              HillsHacks is on the way!
            </Heading>
            <Heading variant="subtitle">
              To view the schedule, click here
            </Heading>
          </Box>
          <Box sx={{ alignSelf: 'center' }}>
            <Button
              variant="lg"
              as="a"
              target="_blank"
              mr={4}
              href="https://drive.google.com/file/d/1Xa4lLkreF9vQLpDoL8PfC8YcEQK9tyNt/view"
            >
              Hackathon Schedule
            </Button>
          </Box>
        </Flex>
      </Card>
    </Container>
    <footer sx={{ textAlign: 'center', padding: 4 }}>
      <Text as="p" mb={2} sx={{ fontSize: 1 }}>
        Previous years:{' '}
        <Link href="https://hills-hacks-2024.vercel.app/">2024</Link> |{' '}
        <Link href="https://2023.hillshacks.com/">2023</Link> |{' '}
        <Link href="https://2022.hillshacks.com/" ml={2}>2022</Link> |{' '}
        <Link href="https://2021.hillshacks.com/">2021</Link> |{' '}
        <Link href="https://2020.hillshacks.com/">2020</Link> |{' '}
        <Link href="https://2019.hillshacks.com/">2019</Link> |{' '}
        <Link href="https://github.com/googol88/hillshacks-vi">2018</Link>
      </Text>
      <Text as="p" mb={2} sx={{ fontSize: 1 }}>
        Created with &#x3C;3 by the Watchung Hills CS Club. See the{' '}
        <Link href="https://github.com/LiterallyCanada312/HillsHacks2025">source</Link>.
      </Text>
      <Text as="p" sx={{ fontSize: 1, color: 'muted' }}>
        © Copyright 2025 hillsHacks
      </Text>
    </footer>
  </>
)

export default Index
