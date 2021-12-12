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
                <title>Aquapark.io | Disguised</title>
                <meta name="description" content="Not really disguised tho." />
                <link rel="icon" href="/img/icon.ico" />
            </Head>
            <Layout>
                <iframe src="https://html5.gamedistribution.com/ce67b95f0db44d66b8b0dc48ade7ce1a/" title="description" frameBorder="0" allowFullScreen></iframe>
            </Layout>
        </>
    )
}