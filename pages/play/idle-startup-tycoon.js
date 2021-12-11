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

        width: 768px;
        height: 1024px;
`;

export default function Game() {
    return (
        <>
            <Head>
                <title>Idle Startup Tycoon | Disguised</title>
                <meta name="description" content="Not really disguised tho." />
                <link rel="icon" href="/icon.ico" />
            </Head>
            <Layout>
                <iframe src="https://html5.gamedistribution.com/c3a9f519b4ae4896b34025486dc2ed13/" title="Game"></iframe>
            </Layout>
        </>
    )
}