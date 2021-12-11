import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

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
    filter: invert(93%) sepia(100%) saturate(28%) hue-rotate(45deg) brightness(107%) contrast(106%);
    Image { 
        font-size: 1.5rem;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        
    }
`;


const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href='/games' passHref>
                    <StyledLink>
                        <Image src='/games.svg' alt="Games" width="25rem" height="25rem" />
                    </StyledLink>
                </Link>
                <Link href='/' passHref>
                    <StyledLink>
                        <Image src='/home.svg' alt="Home" width="25rem" height="25rem" />
                    </StyledLink>
                </Link>
                <Link href='/settings' passHref>
                    <StyledLink>
                        <Image src='/settings.svg' alt="Settings" width="25rem" height="25rem" />
                    </StyledLink>
                </Link>
            </div>
        </Nav>
    );
};

export default Navbar;