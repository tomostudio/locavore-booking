import React from 'react';
import { Whatsapp } from '@/helpers/preset/svg';
import FancyLink from '../utils/fancyLink';

export default function WhatsappModule() {
  return (
    <p className='text-center max-w-md md:max-w-none flex flex-row flex-wrap justify-center'>
      <span className={``}>
        If you have any difficulties or further questions please contact us on
      </span>
      <FancyLink
        className='inline-flex transition-all hover:opacity-50 font-bold underline decoration-black underline-offset-1 mt-[1px]'
        destination='https://wa.me/6282144956226'
        blank={true}
      >
        <Whatsapp className='ml-2 mr-1' /> WhatsApp +62 821 4495 6226
      </FancyLink>
    </p>
  );
}
