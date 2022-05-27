import React, { useEffect, useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import SubscribeForm from './subscribe';

import Container from './container';
import FancyLink from '../utils/fancyLink';
import { transition } from '@/helpers/preset/tailwind';
import { Youtube, Facebook, Instagram, Linkedin } from '@/helpers/preset/svg';

const Footer = ({ className = '', footer, mailchimp = '' }) => {
  const MAILCHIMP_URL = mailchimp;
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 5000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <footer
      className={`w-full h-auto max-md:h-full flex bg-offBlack text-white px-0 py-14 max-md:py-10 no-select-all ${className}`}
    >
      <Container className='flex max-md:flex-col max-md:px-6'>
        <div className='h-full w-full max-md:w-full flex flex-col'>
          <div className='w-full mb-8'>
            <span className='text-sm'>
              UBUD{' '}
              {time.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: "Asia/Makassar"
              })}
            </span>
          </div>
          {/* Subscription Form  */}
          <MailchimpSubscribe
            url={MAILCHIMP_URL}
            render={({ subscribe, status, message }) => (
              <SubscribeForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
        </div>
        <div className='w-full h-full max-md:mt-10 flex flex-col justify-between relative -right-3 max-md:right-0 max-md:-left-3'>
          <div className='w-auto h-full space-x-4 flex justify-end max-md:justify-start'>
            {footer.footerLink && footer.footerLink.instagram && (
              <FancyLink
                destination={footer.footerLink.instagram}
                blank={true}
                className={`relative w-10 h-10 setflex-center ${transition.fade}`}
              >
                <Instagram fill={'#FFF'} className='w-4 h-4' />
              </FancyLink>
            )}
            {footer.footerLink && footer.footerLink.facebook && (
              <FancyLink
                destination={footer.footerLink.facebook}
                blank={true}
                className={`relative w-10 h-10 setflex-center ${transition.fade}`}
              >
                <Facebook fill={'#FFF'} className='w-4 h-4' />
              </FancyLink>
            )}
            {footer.footerLink && footer.footerLink.youtube && (
              <FancyLink
                destination={footer.footerLink.youtube}
                blank={true}
                className={`relative w-10 h-10 setflex-center ${transition.fade}`}
              >
                <Youtube fill={'#FFF'} className='w-4 h-4' />
              </FancyLink>
            )}
            {footer.footerLink && footer.footerLink.linkedin && (
              <FancyLink
                destination={footer.footerLink.linkedin}
                blank={true}
                className={`relative w-10 h-10 setflex-center  ${transition.fade}`}
              >
                <Linkedin fill={'#FFF'} className='w-4 h-4' />
              </FancyLink>
            )}
          </div>
          <div className='w-full h-full max-md:mt-8 flex justify-end max-md:justify-start items-end max-md:items-start pr-3 max-md:pr-0 max-md:pl-3'>
            <span className='text-sm'>{footer.creditText}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
