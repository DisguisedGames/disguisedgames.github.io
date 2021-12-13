import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import Link from 'next/link';

const Hero = styled.div`
    height: 11vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding-top: 20rem;

`;

const Heading = styled.h1`
    color: #0e0e0e;
    font-size: 5rem;
    font-weight: 900;
    src: url('../fonts/Roboto/Roboto.ttf');
`;

const Underline = styled.p` {
    height: 11vh;
    color: #0e0e0e;
    font-size: 1.25rem;
    font-weight: 300;
    src: url('../fonts/Roboto/Roboto.ttf');
    display: flex;
    justify-content: center;
    align-items: flex;
    max-width: 100vw;
    padding-top: 2rem;
`;

const Layout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35vh;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Disguised</title>
        <meta name="description" content="Not really disguised tho." />
        <link rel="icon" href="./img/icon.ico" />
    </Head>
    <Hero>
        <Heading>Disguised</Heading>
        
    </Hero>
    <Underline>“Not really disguised tho.”</Underline>
    <Layout>
    </Layout>
    </>
  );
}