import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import GameList from '../components/GamesList';

const Hero = styled.div`
    height: 20vh;
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

const Layout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
`;

export default function Games() {
  return (
    <>
      <Head>
        <title>Games | Disguised</title>
        <meta name="description" content="Not really disguised tho." />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Hero>
        <Heading>Games</Heading>
      </Hero>
      <Layout>
        <GameList />
      </Layout>
    </>
  )
}
