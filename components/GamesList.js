import styled from "styled-components";
import Link from 'next/link';
import Image from "next/image";

const Nav = styled.nav`
    height: 70vh;
    width: 75%;
    background-color: #0e0e0e;
    color: #fff;
    display: center;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: auto;
`;

const Text = styled.p`
    font-size: auto;
    font-weight: 500;
    justify-content: center;
    align-items: top;
    display: flex;
    text-align: center;
`;

const Describe = styled.p`
    font-size: 1.25rem;
    font-weight: 200;
    justify-content: center;
    align-items: center;
    display: flex;
    text-align: center;
`;

const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1375px;
`;

const Game = styled.div`
    align-items: top;
    display: top;
    margin: 2.5rem;
    text-align: top;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 240px;
    min-width: 240px;
    max-height: 414px;
    min-height: 414px;
    Image {
        margin: 0rem;
        width: 100%;
        height: 50%;
        justify-content: bottom;
        align-items: bottom;
        border-radius: 10px;
        border: 1px solid #fff;
    }
`;

const StyledLink = styled.a`
    Image {
        margin: 0rem;
        width: 100%;
        height: 50%;
        border-radius: 10px;
        border: 1px solid #fff;
    }
`;

const GameList = () => {
    return (
        <Nav>
            <div>
                <Grid>
                    <Game>
                        <Text>Vex3</Text>
                        <Describe>Awesome platformer game. Version 3</Describe>
                        <Link href='/play/vex3' passHref>
                            <StyledLink> <Image src={'v1639299396/Vex3_otgt3m.png'} alt="Game Image" height={232} width={238} /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Vex4</Text>
                        <Describe>Awesome platformer game. Version 4</Describe>
                        <Link href='/play/vex4' passHref>
                            <StyledLink> <Image src={'v1639299396/Vex4_pwzfex.png'} alt="Game Image" height={232} width={238} /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Vex5</Text>
                        <Describe>Awesome platformer game. Version 5</Describe>
                        <Link href='/play/vex5' passHref>
                            <StyledLink> <Image src={'v1639299396/Vex5_xzeihs.png'} alt="Game Image" height={232} width={238} /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Vex6</Text>
                        <Describe>Awesome platformer game. Version 6</Describe>
                        <Link href='/play/vex6' passHref>
                            <StyledLink> <Image src={'v1639299396/Vex6_l3ymmt.png'} alt="Game Image" height={232} width={238} /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Snake</Text>
                        <Describe>The google snake game.</Describe>
                        <Link href='/play/snake' passHref>
                            <StyledLink> <Image src={'v1639299395/snake_txdsv0.png'} alt="Game Image" height={232} width={238} /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Basketball Legends 2020</Text>
                        <Describe>Awesome basketball game, to play with friends.</Describe>
                        <Link href='/play/basketball-legends-2020' passHref>
                            <StyledLink> <Image src={'v1639299395/basketball-legends-2020_ko0xft.png'} alt="Game Image" height={232} width={238} /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Idle Startup Tycoon</Text>
                        <Describe>Fun idle tycoon game, almost like the Idle Miner game.</Describe>
                        <Link href='/play/idle-startup-tycoon' passHref>
                            <StyledLink> <Image src={'v1639299395/idle-startup-tycoon_ntiezq.png'} alt="Game Image" height={232} width={238} /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Paper.io 2</Text>
                        <Describe>The game you all know and love, Paper.io 2.</Describe>
                        <Link href='/play/paperio-2' passHref>
                            <StyledLink> <Image src={'v1639299395/paperio-2_o2xdoq.jpg'} alt="Game Image" height={232} width={238} /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Aquapark.io</Text>
                        <Describe>Weird waterpark game where you slide down waterslides.</Describe>
                        <Link href='/play/aquaparkio' passHref>
                            <StyledLink> <Image src={'v1639299395/aquaparkio_bagwks.jpg'} alt="Game Image" height={232} width={238} /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Two Ball 3D</Text>
                        <Describe>Fun game to play while in class.</Describe>
                        <Link href='/play/two-ball-3d' passHref>
                            <StyledLink> <Image src={'v1639299395/two-ball-3d_uoyt0x.jpg'} alt="Game Image" height={232} width={238} /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Rider Online</Text>
                        <Describe>Fast paced motorcycle game.</Describe>
                        <Link href='/play/rider-online' passHref>
                            <StyledLink> <Image src={'v1639331176/ec0f442775664b43b582fdfadb6a424f_qamlll.jpg'} alt="Game Image" height={232} width={238} /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Basket Random</Text>
                        <Describe>Really fast paced basketball fun for everyone.</Describe>
                        <Link href='/play/basket-random' passHref>
                            <StyledLink> <Image src={'v1639331543/bf1268dccb5d43e7970bb3edaa54afc8-512x512_iw1gqz.jpg'} alt="Game Image" height={232} width={238} /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Moto X3M</Text>
                        <Describe>Giant motorcycle game with lots of levels.</Describe>
                        <Link href='/play/moto-x3m' passHref>
                            <StyledLink> <Image src={'v1639332582/5b0abd4c0faa4f5eb190a9a16d5a1b4c-512x512_ppyccb.jpg'} alt="Game Image" height={232} width={238} /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Moto X3M Pool Party</Text>
                        <Describe>Giant motorcycle game with lots of levels.</Describe>
                        <Link href='/play/moto-x3m-poolparty' passHref>
                            <StyledLink> <Image src={'v1639333006/f804d079d19f44d3b951ead4588e974a-512x512_ihbk8o.jpg'} alt="Game Image" height={232} width={238} /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Moto X3M Winter</Text>
                        <Describe>Giant motorcycle game with lots of levels.</Describe>
                        <Link href='/play/moto-x3m-winter' passHref>
                            <StyledLink> <Image src={'v1639333601/bcacf81441bd4c7799a622171116ea9d-512x512_meei0q.jpg'} alt="Game Image" height={232} width={238} /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Moto X3M Spooky Land</Text>
                        <Describe>Giant motorcycle game with lots of levels.</Describe>
                        <Link href='/play/moto-x3m-spooky-land' passHref>
                            <StyledLink> <Image src={'v1639333681/b8a342904608470a9f3382337aca3558-512x512_vlt6qt.jpg'} alt="Game Image" height={232} width={238} /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>TapTap Shot</Text>
                        <Describe>Another basketball game, long and fun.</Describe>
                        <Link href='/play/taptap-shot' passHref>
                            <StyledLink> <Image src={'v1639331996/9c634fb94d3242369532cad391896fe0-512x512_r9yoii.png'} alt="Game Image" height={232} width={238} /> </StyledLink>
                        </Link>
                    </Game>
                </Grid>
            </div>
        </Nav>
    )
}

export default GameList;