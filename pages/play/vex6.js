import Head from "next/head";
import Image from "next/image";
import Styled from "styled-components";

const Layout = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    iframe {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 1800px;
        height: 960px;
`;

export default function Game() {
    return (
        <>
            <Head>
                <title>Vex6 | Disguised</title>
                <meta name="description" content="Not really disguised tho." />
                <link rel="icon" href="/icon.ico" />
            </Head>
            <Layout>
                <iframe src="https://html5.gamedistribution.com/4925e12574364121a48c61c35f649c36/" title="description"></iframe>
            </Layout>
        </>
    )
}