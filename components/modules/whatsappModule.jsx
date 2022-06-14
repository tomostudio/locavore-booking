import React from 'react';
import { Whatsapp } from '@/helpers/preset/svg';
import FancyLink from '../utils/fancyLink';

const WhatsappModule = ({ whatsappLink = '/', whatsappText = '' }) => {
  return (
    <>
      {/* // <p className='text-center max-w-md md:max-w-none flex flex-row flex-wrap justify-center'> */}
      <p className='text-center max-w-md md:max-w-none leading-relaxed mx-auto'>
        <span className={``}>
          If you have any questions or would like to chat to us before making a
          booking, please feel free to get in touch on
        </span>
        <FancyLink
          className='inline-flex transition-all hover:opacity-50 font-bold underline decoration-black underline-offset-1 items-center relative top-[3px]'
          destination={whatsappLink}
          blank={true}
        >
          <Whatsapp className='ml-2 mr-1' /> WhatsApp {`${whatsappText}`}
        </FancyLink>
      </p>
    </>
  );
};
export default WhatsappModule;
