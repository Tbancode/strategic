import { CTASection, Footer, Header } from '@/components';
import Link from 'next/link';
import {
  ContactUsHeroSection,
  MoreContent,
  ContactUsHeroInner,
  BecomeAMemberCtn,
  BecomeAMemberBox,
  BoxTextCtn,
} from './styles';
import Image from 'next/image';
import become_a_member_bg from '../../../public/svgs/become_a_member_bg.svg';

const ContactUs = () => {
  return (
    <section
      style={{
        backgroundColor: '#171717',
      }}
    >
      <Header />
      <ContactUsHeroSection>
        <ContactUsHeroInner>
          <h1>Contact</h1>
          <MoreContent>
            <h4>We value your interest and are eager to assist you.</h4>
            <p>
              We value your interest and are eager to assist you. For general
              inquiries, partnerships and collaborations, feel free to contact
              us using the information below:{' '}
              <span>
                <Link
                  href="mailto:info@strategicsolutionsllc.org"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  info@strategicsolutionsllc.org
                </Link>
              </span>
            </p>
          </MoreContent>
        </ContactUsHeroInner>
      </ContactUsHeroSection>
      <CTASection
        title="Amplify Your Impact"
        subtitle="Get updates for future events from Strategic Solutions Global"
        isHomepage={true}
        buttonText="Submit"
      />
      <Footer />
    </section>
  );
};

export default ContactUs;
