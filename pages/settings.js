import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

const Hero = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: top;
    background-color: #fff;
`;

const Heading = styled.h1`
    color: #0e0e0e;
    font-size: 4rem;
    font-weight: 900;
    src: url('../fonts/Roboto/Roboto.ttf');
`;

export default function About() {
  return (
    <>
      <Head>
        <title>Settings | Disguised</title>
        <meta name="description" content="Not really disguised tho." />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Hero>
        <Heading>Settings</Heading>
      </Hero>
    </>
  )
}
