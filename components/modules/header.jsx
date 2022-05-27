import { useEffect, useState } from 'react'
import FancyLink from '@/components/utils/fancyLink'
import Container from '@/components/modules/container'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import { useAppContext } from 'context/state'
import Image from 'next/image'
import urlFor from '@/helpers/sanity/urlFor'
import { transition } from '@/helpers/preset/tailwind'
import { motion } from 'framer-motion'
import { Youtube, Facebook, Instagram, Linkedin } from '@/helpers/preset/svg'

export default function Header({ className = '', header, footer }) {
  const appContext = useAppContext()
  const { headerStyle } = appContext.headerVar
  // mobileMenu
  // setMobileMenu
  const [menu, setMenu] = useState(appContext.mobileMenu)
  const [footerProcessed] = footer

  const [wHeight, setWHeight] = useState(800)

  // simplified value of BNW
  // true = black
  const [bnw, setBNW] = useState(true)

  useEffect(() => {
    setMenu(appContext.mobileMenu)
  }, [appContext.mobileMenu])

  useEffect(() => {
    setBNW(!headerStyle.includes('white'))
  }, [headerStyle])

  useEffect(() => {
    const updateHeight = () => {
      setWHeight(window.innerHeight)
    }
    window.addEventListener('resize', updateHeight, false)

    const checkMenu = () => {
      const { innerWidth: width, innerHeight: height } = window
      if (width > 850) {
        appContext.setMobileMenu(false)
      }
    }

    window.addEventListener('resize', checkMenu, false)
    return () => {
      window.removeEventListener('resize', updateHeight, false)
      window.removeEventListener('resize', checkMenu, false)
    }
  }, [])

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
  )

  // Header Style Values:
  // default, hidden, white black,
  // blur-black, blur-white
  // trans-black / transparent-black,   trans-white / transparent-white

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 overflow-auto hide-scrollbar flex flex-col no-select-all ${
        menu ? 'h-screen' : ''
      }`}
      style={{ height: menu ? `${wHeight}px` : 'auto' }}
    >
      <motion.header
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          initial: { opacity: 0 },
          enter: {
            opacity: 1,
            transition: {
              duration: 0.44,
              ease: [0.83, 0, 0.17, 1],
              delay: 0.05,
            },
          },
          exit: {
            opacity: 0,
            transition: { duration: 0.25, ease: [0.83, 0, 0.17, 1] },
          },
        }}
        className={`sticky top-0 left-0 right-0 w-full z-2 border-b ${className}
        ${bnw || menu ? 'border-black bg-white' : 'border-white bg-black'}
        ${
          headerStyle.toLowerCase().includes('blur')
            ? `bg-opacity-50 backdrop-filter backdrop-blur-sm ${
                menu ? '' : '!bg-transparent'
              }`
            : headerStyle.toLowerCase().includes('trans') ||
              headerStyle.toLowerCase().includes('transparent')
            ? 'bg-opacity-0'
            : 'bg-opacity-100'
        }
        ${menu ? `!bg-opacity-100 ` : ''}
        ${headerStyle.toLowerCase().includes('hidden') ? '!hidden' : ''}`}
      >
        <Container
          className={`h-header relative pointer-events-auto flex flex-wrap max-md:flex-nowrap max-md:items-center `}
        >
          <FancyLink
            onClick={() => {
              setWHeight(window.innerHeight)
              //Toggle Menu
              appContext.setMobileMenu(!appContext.mobileMenu)
            }}
            className={`mobile-menu-icon hidden max-md:block w-[25px] h-[25px] max-md:mr-4 ${
              bnw || menu ? 'black' : 'white'
            }
          ${menu ? 'open black' : ''} ${transition.fade}`}
          >
            <div />
            <div />
          </FancyLink>
          {/* Locavore Logo */}
          <FancyLink
            destination="/"
            a11yText="Navigate to the home page"
            className={` setflex-center max-md:p-0 ${transition.fade}`}
          >
            {bnw || menu ? (
              <Image
                src={urlFor(header[0].logo.black)
                  .width(300)
                  .format('webp')
                  .url()}
                alt={header[0].logo.black.name}
                layout="intrinsic"
                objectFit="contain"
                objectPosition={'left center'}
                priority={true}
                width={200}
                height={25}
              />
            ) : (
              <Image
                src={urlFor(header[0].logo.white)
                  .width(300)
                  .format('webp')
                  .url()}
                alt={header[0].logo.white.name}
                layout="intrinsic"
                objectFit="contain"
                priority={true}
                objectPosition={'left center'}
                width={200}
                height={25}
              />
            )}
          </FancyLink>
          {/* Right Header Content */}
          <div
            className={`ml-auto setflex-center-row max-md:justify-end space-x-6 w-full pointer-events-none text-sm md:text-sm md:w-auto ${
              bnw || menu ? 'text-black' : 'text-white'
            }`}
          >
            <FancyLink
              destination="https://locavorenext.com"
              blank={true}
              a11yText="Navigate to the about page"
              className={`font-bold leading-none ${transition.fade}`}
            >
              BACK TO LOCAVORE
            </FancyLink>
          </div>
        </Container>
      </motion.header>
      {/* MOBILE MENU */}
      {useMediaQuery('(max-width: 850px)') && (
        <div
          className={`z-1 w-full flex flex-col justify-between grow-1 ${
            menu
              ? 'relative opacity-1 pointer-events-auto'
              : 'opacity-0 pointer-events-none hidden'
          } ${bnw || menu ? 'bg-white ' : 'bg-black'} `}
        >
          {/* <HeaderGap className='grow-0 shrink-0' /> */}
          <MobileLink bnw={bnw} destination="https://locavorenext.com">
            BACK TO LOCAVORE
          </MobileLink>
          {/* Social Media */}
          <div
            className={`w-full py-8 border-b flex justify-center space-x-4 ${
              bnw || menu ? 'border-black' : 'border-white'
            }`}
          >
            {footerProcessed.footerLink &&
              footerProcessed.footerLink.instagram && (
                <FancyLink
                  destination={footerProcessed.footerLink.instagram.link}
                  blank={true}
                  className={`relative w-10 h-10 setflex-center ${transition.fade}`}
                >
                  <Instagram
                    fill={bnw || menu ? '#000' : '#FFF'}
                    className="w-4 h-4"
                  />
                </FancyLink>
              )}
            {footerProcessed.footerLink && footerProcessed.footerLink.facebook && (
              <FancyLink
                destination={footerProcessed.footerLink.facebook.link}
                blank={true}
                className={`relative w-10 h-10 setflex-center ${transition.fade}`}
              >
                <Facebook
                  fill={bnw || menu ? '#000' : '#FFF'}
                  className="w-4 h-4"
                />
              </FancyLink>
            )}
            {footerProcessed.footerLink && footerProcessed.footerLink.youtube && (
              <FancyLink
                destination={footerProcessed.footerLink.youtube.link}
                blank={true}
                className={`relative w-10 h-10 setflex-center ${transition.fade}`}
              >
                <Youtube
                  fill={bnw || menu ? '#000' : '#FFF'}
                  className="w-4 h-4"
                />
              </FancyLink>
            )}
            {footerProcessed.footerLink && footerProcessed.footerLink.linkedin && (
              <FancyLink
                destination={footerProcessed.footerLink.linkedin.link}
                blank={true}
                className={`relative w-10 h-10 setflex-center ${transition.fade}`}
              >
                <Linkedin
                  fill={bnw || menu ? '#000' : '#FFF'}
                  className="w-4 h-4"
                />
              </FancyLink>
            )}
          </div>
          {/* Ending */}
          <FancyLink
            className={`w-full h-16 flex justify-center items-center mt-auto transition-colors relative ${
              bnw || menu
                ? 'bg-white text-black hover:bg-black hover:text-white'
                : 'bg-black text-white hover:bg-white hover:text-black'
            }`}
            onClick={() => appContext.setMobileMenu(false)}
          >
            <div
              className={`w-full h-[1px] absolute top-[-1px]  transition-colors ${
                bnw || menu
                  ? 'bg-black hover:bg-black hover:text-white'
                  : 'bg-white hover:bg-white hover:text-black'
              }`}
            />
            Close
          </FancyLink>
        </div>
      )}
    </nav>
  )
}
