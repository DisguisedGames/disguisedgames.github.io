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

        width: 607px;
        height: 607px;
`;

export default function Game() {
    return (
        <>
            <Head>
                <title>Snake | Disguised</title>
                <meta name="description" content="Not really disguised tho." />
                <link rel="icon" href="/img/icon.ico" />
            </Head>
            <Layout>
                <iframe src="https://www.googlesnake.com/snakedesktop.php" title="Game" frameBorder="0" allowFullScreen></iframe>
            </Layout>
        </>
    )
}