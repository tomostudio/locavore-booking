import { useEffect, useState } from 'react';
import FancyLink from '@/components/utils/fancyLink';
import Container from '@/components/modules/container';
import Image from 'next/image';
import urlFor from '@/helpers/sanity/urlFor';
import { transition } from '@/helpers/preset/tailwind';
import { Youtube, Facebook, Instagram, Linkedin } from '@/helpers/preset/svg';

export default function Header({ className = '', header, footer }) {
  // const appContext = useAppContext();
  // const { headerStyle } = appContext.headerVar;
  // mobileMenu
  // setMobileMenu
  // const [menu, setMenu] = useState(appContext.mobileMenu);
  // const [footerProcessed] = footer;

  // simplified value of BNW
  // true = black
  // const [bnw, setBNW] = useState(true);

  // useEffect(() => {
  //   setMenu(appContext.mobileMenu);
  // }, [appContext.mobileMenu]);

  // useEffect(() => {
  //   setBNW(!headerStyle.includes('white'));
  // }, [headerStyle]);

  useEffect(() => {
    return () => {};
  }, []);

  const MobileLink = ({
    destination,
    className = '',
    children,
    bnw = true,
  }) => (
    <FancyLink
      destination={destination}
      className={`text-center w-full py-8 border-b flex justify-center text-4xl  ${
        bnw || menu
          ? 'border-black text-black hover:bg-black hover:text-white transition-colors'
          : 'border-white text-white hover:bg-white hover:text-black transition-colors'
      } ${className}`}
    >
      {children}
    </FancyLink>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 overflow-auto hide-scrollbar flex flex-col no-select-all`}
      // style={{ height: menu ? `${wHeight}px` : 'auto' }}
    >
      <header
        className={`sticky top-0 left-0 right-0 w-full z-2 border-b ${className}
        border-black bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm
        `}
      >
        <Container
          className={`h-header relative pointer-events-auto flex flex-wrap max-md:flex-nowrap max-md:items-center `}
        >
          {/* Locavore Logo */}
          <FancyLink
            destination='/'
            a11yText='Navigate to the home page'
            className={` setflex-center max-md:p-0 ${transition.fade}`}
          >
            <Image
              src={urlFor(header[0].logo.black).width(300).format('webp').url()}
              alt={header[0].logo.black.name}
              layout='intrinsic'
              objectFit='contain'
              objectPosition={'left center'}
              priority={true}
              width={200}
              height={25}
            />
          </FancyLink>
          {/* Right Header Content */}
          <div
            className={`ml-auto setflex-center-row max-md:justify-end space-x-6 w-full pointer-events-none text-sm md:text-sm md:w-auto text-black`}
          >
            <FancyLink
              destination='https://locavorenext.com'
              blank={true}
              a11yText='Navigate to the about page'
              className={`font-bold leading-none ${transition.fade}`}
            >
              BACK TO LOCAVORE
            </FancyLink>
          </div>
        </Container>
      </header>
    </nav>
  );
}
