import Image from 'next/image';
import Link from 'next/link';
import { ImageWrapper } from './styles';
import { urlForImage } from '../../../../sanity/lib/image';

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <ImageWrapper>
          <Image
            src={urlForImage(value) as string}
            alt="mainImage"
            width={1000}
            height={1000}
            quality={100}
          />
        </ImageWrapper>
      );
    },
    list: {
      bullet: ({ children }: any) => <ul>{children}</ul>,
      number: ({ children }: any) => <ol>{children}</ol>,
    },
  },
  block: {
    h1: ({ children }: any) => <h1>{children}</h1>,
    h2: ({ children }: any) => <h2>{children}</h2>,
    h3: ({ children }: any) => <h3>{children}</h3>,
    h4: ({ children }: any) => <h4>{children}</h4>,
    blockquote: ({ children }: any) => <blockquote>{children}</blockquote>,
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;

      return (
        <Link href={value.href} rel={rel}>
          {children}
        </Link>
      );
    },
    underline: ({ children }: any) => (
      <span style={{ textDecoration: 'underline' }}>{children}</span>
    ),
    highlight: ({ children }: any) => (
      <span style={{ backgroundColor: 'yellow' }}>{children}</span>
    ), // You can customize the style as needed
  },
};
