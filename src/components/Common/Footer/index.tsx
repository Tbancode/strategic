import Image from 'next/image';
import Link from 'next/link';
import footer_logo from '../../../../public/svgs/footer_logo.svg';
import ic_facebook from '../../../../public/svgs/ic_facebook.svg';
import ic_twitter from '../../../../public/svgs/ic_twitter.svg';
import ic_instagram from '../../../../public/svgs/ic_instagram.svg';
import ic_linkedin from '../../../../public/svgs/ic_linkedin.svg';
import footer_top_line from '../../../../public/images/footer_top_line.png';
import {
  FooterWrapper,
  FooterInner,
  FooterTop,
  FooterLogo,
  FooterTextCtn,
  FooterNavCtn,
  FooterUL,
  OtherInfo,
  FooterSocials,
  FooterBottom,
} from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <Image src={footer_top_line} alt="line" />
      <FooterInner>
        <FooterTop>
          <FooterLogo>
            <Image src={footer_logo} alt=" footer logo" />
          </FooterLogo>

          <FooterTextCtn>
            <h1>Connect, Collaborate & Catalyze Change!</h1>

            <FooterNavCtn>
              <FooterUL>
                <li>
                  <Link href="/who-we-are">Who We Are</Link>
                </li>
                <li>
                  <Link href="/leadhership-collective">
                    Leadership Collective
                  </Link>
                </li>
                <li>
                  <Link href="/program/global-leadhership-accelerator">
                    Global LeadHERship Accelerator
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/events">Events</Link>
                </li>
              </FooterUL>
              <OtherInfo>
                <p>info@strategicsolutionsllc.org</p>
                <p>3343 Peachtree Rd NE STE 145-2817 Atlanta, GA 30326</p>
                <FooterSocials>
                  <Link
                    href="https://www.facebook.com/StrategicBusinessSolutions/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image src={ic_facebook} alt="facebook icon" />
                  </Link>
                  {/* <Link href="">
                    <Image src={ic_twitter} alt="twitter icon" />
                  </Link> */}
                  <Link
                    href="https://www.instagram.com/strategicsolutionsglobal?igsh=MWdoNHByYXc3NG8zbQ=="
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image src={ic_instagram} alt="instagram icon" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/strategic-solutions-global"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image src={ic_linkedin} alt="linkedin icon" />
                  </Link>
                </FooterSocials>
                <p>Copyright © 2024 Strategic Solutions LLC</p>
              </OtherInfo>
            </FooterNavCtn>
          </FooterTextCtn>
        </FooterTop>
        <FooterBottom>
          <p>Copyright © 2024 Strategic Solutions LLC</p>
        </FooterBottom>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;
