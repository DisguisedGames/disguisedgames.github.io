import styled from "styled-components";
import Link from 'next/link';
import Image from "next/image";

const sanityIoImageLoader = ({ src, width, quality }) => {
    return `https://cdn.sanity.io/${src}?w=${width}&q=${quality || 75}`
  }

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
    font-size: 2.5rem;
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
                        <Describe>Vex3 Platfomer game.</Describe>
                        <Link href='/play/vex3' passHref>
                            <StyledLink> <Image src={"/data/gameIcons/vex3.png"} alt="Game Image" height="232px" width="238px" /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Vex4</Text>
                        <Describe>Vex4 Platfomer game.</Describe>
                        <Link href='/play/vex4' passHref>
                            <StyledLink> <Image src={"/data/gameIcons/vex4.png"} alt="Game Image" height="232px" width="238px" /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Vex5</Text>
                        <Describe>Vex5 Platfomer game.</Describe>
                        <Link href='/play/vex5' passHref>
                            <StyledLink> <Image src={"/data/gameIcons/vex5.png"} alt="Game Image" height="232px" width="238px" /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Vex6</Text>
                        <Describe>Vex6 Platfomer game.</Describe>
                        <Link href='/play/vex6' passHref>
                            <StyledLink> <Image src={"/data/gameIcons/vex6.png"} alt="Game Image" height="232px" width="238px" /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Snake</Text>
                        <Describe>The google snake game.</Describe>
                        <Link href='/play/snake' passHref>
                            <StyledLink> <Image src={"/data/gameIcons/snake.png"} alt="Game Image" height="232px" width="238px" /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>BL 2020</Text>
                        <Describe>Basketball Legends 2020.</Describe>
                        <Link href='/play/basketball-legends-2020' passHref>
                            <StyledLink> <Image src={"/data/gameIcons/basketball-legends-2020.png"} alt="Game Image" height="232px" width="238px" /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>IS Tycoon</Text>
                        <Describe>Idle Startup Tycoon.</Describe>
                        <Link href='/play/idle-startup-tycoon' passHref>
                            <StyledLink> <Image src={"/data/gameIcons/idle-startup-tycoon.png"} alt="Game Image" height="232px" width="238px" /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Paper.io 2</Text>
                        <Describe>Paper.io 2 IO game.</Describe>
                        <Link href='/play/paperio-2' passHref>
                            <StyledLink> <Image src={"/data/gameIcons/paperio-2.jpeg"} alt="Game Image" height="232px" width="238px" /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Aquapark.io</Text>
                        <Describe>Aquapark.io IO game.</Describe>
                        <Link href='/play/aquaparkio' passHref>
                            <StyledLink> <Image src={"/data/gameIcons/aquaparkio.jpeg"} alt="Game Image" height="232px" width="238px" /> </StyledLink>
                        </Link>
                    </Game>
                    <Game>
                        <Text>Two Ball 3D</Text>
                        <Describe>Two Ball 3D game.</Describe>
                        <Link href='/play/two-ball-3d' passHref>
                            <StyledLink> <Image src={"/data/gameIcons/two-ball-3d.jpeg"} alt="Game Image" height="232px" width="238px" /> </StyledLink>
                        </Link>
                    </Game>
                </Grid>
            </div>
        </Nav>
    )
}

export default GameList;