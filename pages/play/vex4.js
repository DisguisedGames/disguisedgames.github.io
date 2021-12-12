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
                <title>Vex4 | Disguised</title>
                <meta name="description" content="Not really disguised tho." />
                <link rel="icon" href="/img/icon.ico" />
            </Head>
            <Layout>
                <iframe src="https://html5.gamedistribution.com/80e6a5ae477f4d4fbcd1ea293d10087d/?" title="description" frameBorder="0" allowFullScreen></iframe>
            </Layout>
        </>
    )
}