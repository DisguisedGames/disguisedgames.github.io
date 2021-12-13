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
                <title>Minecraft Classic | Disguised</title>
                <meta name="description" content="Not really disguised tho." />
                <link rel="icon" href="/img/icon.ico" />
            </Head>
            <Layout>
                <iframe src="https://classic.minecraft.net/" title="description" frameBorder="0" allowFullScreen="true"></iframe>
            </Layout>
        </>
    )
}