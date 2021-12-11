import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
    height: 80px;
    background-color: #0e0e0e;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledLink = styled.a`
    padding: 0rem 2rem;
    justify-content: center;
    img { 
        font-size: 1.5rem;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(45deg) brightness(107%) contrast(106%);
    }
`;


const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href='/games' passHref>
                    <StyledLink>
                        <img src="/games.svg" alt="Games" />
                    </StyledLink>
                </Link>
                <Link href='/' passHref>
                    <StyledLink>
                        <img src="/home.svg" alt="Home" />
                    </StyledLink>
                </Link>
                <Link href='/settings' passHref>
                    <StyledLink>
                        <img src="/settings.svg" alt="Settings" />
                    </StyledLink>
                </Link>
            </div>
        </Nav>
    );
};

export default Navbar;