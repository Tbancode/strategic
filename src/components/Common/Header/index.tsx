'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../../../public/svgs/logo.svg';
import ic_menu from '../../../../public/svgs/ic_menu.svg';
import ic_close_nav from '../../../../public/svgs/ic_close_nav.svg';
import ic_chevron_down_nav from '../../../../public/svgs/ic_chevron_down_nav.svg';
import Link from 'next/link';

import {
  HeaderWrapper,
  HeaderInner,
  LogoCtn,
  Logo,
  BurgerCtn,
  NavContainer,
  UL,
  RegisterButton,
  DropLink,
} from './styles';
import { usePathname } from 'next/navigation';
import { useIsMobile } from '../../../../utils/useIsMobile';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Change the background color after scrolling for about 50px
      setIsScrolled(scrollY > 50);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <HeaderWrapper>
      <HeaderInner className={isScrolled ? 'scrolled' : ''}>
        <LogoCtn className={isNavOpen ? 'active' : ''}>
          <Logo href="/" onClick={() => setIsNavOpen(false)}>
            <Image src={logo} alt="logo" priority />
          </Logo>
          <BurgerCtn onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? (
              <Image src={ic_close_nav} alt="logo" priority />
            ) : (
              <Image src={ic_menu} alt="logo" priority />
            )}
          </BurgerCtn>
        </LogoCtn>
        <NavContainer className={isNavOpen ? 'active' : ''}>
          <UL>
            <li>
              <Link
                className={pathname === '/who-we-are' ? 'active' : ''}
                href="/who-we-are"
                onClick={() => setIsNavOpen(false)}
              >
                Who we are
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === '/leadhership-collective' ? 'active' : ''
                }
                href="/leadhership-collective"
                onClick={() => setIsNavOpen(false)}
              >
                Leadership Collective
              </Link>
            </li>
            {isMobile ? (
              <DropLink>
                <span onClick={() => setOpenDropdown(!openDropdown)}>
                  Program <Image src={ic_chevron_down_nav} alt="chevron down" />
                </span>
                {openDropdown && (
                  <div>
                    <Link
                      href="/program/global-leadhership-accelerator"
                      onClick={() => setIsNavOpen(false)}
                    >
                      Global LeadHERship Accelerator
                    </Link>
                  </div>
                )}
              </DropLink>
            ) : (
              <DropLink>
                <span className={pathname.includes('program') ? 'active' : ''}>
                  Program <Image src={ic_chevron_down_nav} alt="chevron down" />
                </span>
                <div>
                  <Link
                    href="/program/global-leadhership-accelerator"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Global LeadHERship Accelerator
                  </Link>
                </div>
              </DropLink>
            )}
            <li>
              <Link
                className={pathname === '/events' ? 'active' : ''}
                href="/events"
                onClick={() => setIsNavOpen(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={pathname === '/blog' ? 'active' : ''}
                onClick={() => setIsNavOpen(false)}
              >
                Blog
              </Link>
            </li>
          </UL>
          <RegisterButton
            onClick={() => setIsNavOpen(false)}
            href="https://docs.google.com/forms/d/e/1FAIpQLSerlqk6-W9iLsIrReAZMi2gQKk5c9GUhN9OQfVCWAcRHyxsUA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Become a member
          </RegisterButton>
        </NavContainer>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
