import styled from "styled-components"
import Link from "next/link";

const FooterStyled = styled.div`
    height: 80px;
    background-color: #0e0e0e;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: 600;
        src: url('../fonts/Roboto/Roboto.ttf');
`;

const Footer = () => {
    return (
        <FooterStyled>
            <div>
                <p>© Disguised. “Not really disguised tho.”</p>
                <a href="mailto:disguiseddevs@outlook.com">Request Game</a>
            </div>
        </FooterStyled>
    )
}

export default Footer