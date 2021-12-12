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
    Image { 
        font-size: 1.5rem;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
    }
`;

const prefix = '/';

const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href='/games' passHref>
                    <StyledLink>
                        <Image src='https://res.cloudinary.com/disguised/image/upload/v1639319393/navbar/games_w4p74d.png' alt="Games" width='25rem' height='25rem' />
                    </StyledLink>
                </Link>
                <Link href='/' passHref>
                    <StyledLink>
                        <Image src='https://res.cloudinary.com/disguised/image/upload/v1639319393/navbar/home_xxgjce.png' alt="Home" width='25rem' height='25rem' />
                    </StyledLink>
                </Link>
                <Link href='/settings' passHref>
                    <StyledLink>
                        <Image src='https://res.cloudinary.com/disguised/image/upload/v1639319393/navbar/settings_zl8i80.png' alt="Settings" width='25rem' height='25rem' />
                    </StyledLink>
                </Link>
            </div>
        </Nav>
    );
};

export default Navbar;