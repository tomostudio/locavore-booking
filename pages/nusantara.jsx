import React, { useState, useEffect} from 'react';
import Container from '@/components/modules/container';
import Footer from '@/components/modules/footer';
import HeaderGap from '@/components/modules/headerGap';
import Layout from '@/components/modules/layout';
import FancyLink from '@/components/utils/fancyLink';
import SEO from '@/components/utils/seo';
import { Whatsapp } from '@/helpers/preset/svg';
import client from '@/helpers/sanity/client';
import Script from 'next/script';
import Image from 'next/image';
import WhatsappModule from '@/components/modules/whatsappModule';
import BasicModal from '@/components/modules/basicModal';

export default function Nusantara({ seoAPI, footerAPI }) {
  const [seo] = seoAPI;
  const [footer] = footerAPI;
  const [modalData, setModalData] = useState('');

  const closeModal = () => {
    setModalData('');
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const RSVPinsert = () => {
    return {
      __html: `
    <rsvp-element bookable-id="3725" api-path="restaurants">
    
    <!-- <rsvp-image></rsvp-image> -->
    <rsvp-booking-steps button-text="NEXT">
        <template>
        <rsvp-step step-name="SoldOutWaitlist">
        <br>
        <h3>Register for the Waiting List on<br>
          <rsvp-span name="PreferredDateTime" data-type="date"></rsvp-span>
        </h3>
        <p>If you would like to join the waiting list, please enter your information below.</p>

        <rsvp-input type="count" name="Seats" label="Number of people" min-value="2" max-value="10"></rsvp-input>
        <rsvp-waitlist-slots type="radio"></rsvp-waitlist-slots>

        <label>
          <input type="checkbox" name="FlexibleDates"></input> I'm flexible about the date
        </label>

        <rsvp-input name="PreferredDateTime" type="hidden"></rsvp-input>
        <h3>Contact details</h3>
        <rsvp-input type="text" name="Name" label="Name"></rsvp-input>
        <rsvp-input type="text" name="ContactEmail" label="Email"></rsvp-input>
        <rsvp-phone code="+62" required="false" label="Phone" name="Phone"></rsvp-phone>
        <rsvp-input type="text" name="Comment" label="Notes"></rsvp-input>
        <span>Preferred Language</span><br>
        <ul class="preferred-language">
          <li>
          <label for="lang-it">
          <input type="radio" id="lang-it" name="PreferredLanguage" value="IT" /> IT</label>
          </li>
          <li>
          <label for="lang-en">
          <input type="radio" id="lang-en" name="PreferredLanguage" value="EN" /> EN</label>
          </li>
        </ul>
      </rsvp-step>

      <rsvp-step step-name="WaitlistSuccess">
        <h3>Success!</h3>
        <p>You have been added to <rsvp-span name="Bookable.Name"></rsvp-span> waiting list
          for <rsvp-span name="Seats"></rsvp-span> people at <rsvp-span name="PreferredDateTime" data-type="date">
          </rsvp-span>
        </p>
        <p>Email confirmation is sent to <rsvp-span name="ContactEmail"></rsvp-span>
        </p>
      </rsvp-step>
            <rsvp-step step-name="Initial">
                <rsvp-seating-selector booking-mode="widget">
                  <rsvp-pax-section text-value="people" current-value="2" min-value="1" max-value="10"></rsvp-pax-section>
                  <rsvp-range-section default-expanded="true" range-type="month-status"></rsvp-range-section>
                  <rsvp-seating-section show-date-separator="false" available-text="No availability">
                          <div class="custom-unavailable">No availabilities.
                              <rsvp-step-link name="SoldOutWaitlist">Waiting List</rsvp-step-link>
                          </div>
                  </rsvp-seating-section>
                </rsvp-seating-selector>
            </rsvp-step>
            <rsvp-step step-name="ContactDetails">
            <rsvp-step-link name="Initial"> < Back</rsvp-step-link> 
              <rsvp-input label="Name" name="FirstName"></rsvp-input>
              <rsvp-input label="Surname" name="LastName"></rsvp-input>
              <rsvp-input label="Email" name="ContactEmail"></rsvp-input>
              <rsvp-phone code="+62" label="Phone" name="Phone"></rsvp-phone>              
            </rsvp-step>
             <rsvp-step step-name="AdditionalInfo">
              <rsvp-booking-additional-info name="AdditionalBookingInfo"></rsvp-booking-additional-info>
            </rsvp-step>
             
            <rsvp-step step-name="ConfirmInfo">
            <rsvp-step-link name="ContactDetails"> < Back</rsvp-step-link> 
              <div>
                <p>You are booking for <rsvp-span name="Booking.Seats"></rsvp-span> people at <rsvp-span name="Booking.Time.Range"></rsvp-span></p>
              </div>
              <label>Preferred Language
                   <select name="PreferredLanguage">
                     <option value="EN">English</option>
                    </select>
              </label>
              <rsvp-input type="textarea" label="Comments" name="Comments" placeholder="Dietary requirements or comments..." rows="5"></rsvp-input>
              <label><input type="checkbox" name="Confirm"></input> Yes, I confirm the details and conditions</label><br />
              <label><input type="checkbox" name="ConfirmEmail"></input> Yes, please notify me of future events</label>
            </rsvp-step>
            
            
            <rsvp-step step-name="StripePaymentApiPay">
              <rsvp-stripe-payment-api></rsvp-stripe-payment-api>
            </rsvp-step>
            
            <rsvp-step step-name="Summary">
              <h2>Success!</h2>
              <div>
                <p>Your booking is confirmed for <rsvp-span name="Booking.Seats"></rsvp-span> people at <rsvp-span name="Booking.Time.Range"></rsvp-span></p>
            </div>
              <p>Email confirmation is sent to <rsvp-span name="Booking.Email"></rsvp-span>
              </p>
            </rsvp-step>
          </template>
        </rsvp-booking-steps>
  </rsvp-element>`,
    };
  };
  return (
    <Layout>
      <SEO
        title='Booking Nusantara'
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <Script src='https://js.stripe.com/v3/' />
      <Script
        type='module'
        src='https://cdn.rsvp-popup.com/webcomponents/rsvp-elements/1.0/rsvp.esm.js'
      />
      <Script
        nomodule
        src='https://cdn.rsvp-popup.com/webcomponents/rsvp-elements/1.0/rsvp.js'
      />
      <HeaderGap />
      <Container className='mt-10'>
        {/* <div className='relative w-full h-[150px] max-w-3xl px-4 mx-auto mb-10'>
          <Image
            src='/placeholder/nusantara.png'
            alt='Nusantara'
            layout='fill'
            objectFit='contain'
          />
        </div> */}

        <h1 className='font-sans text-center my-8 md:my-16 text-6xl md:text-8xl'>
          Book Your Table at Nusantara
        </h1>
        <div className='relative w  full h-[500px] rounded-2xl overflow-hidden'>
          <Image
            src='/placeholder/placeholder-nusantara.png'
            alt='Locavore'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </div>
        <div className='setflex-center space-y-8 mt-8 mb-8 mx-auto text-center w-full max-w-3xl'>
          <h3 className='text-2xl font-bold'>
            AN ETHNO-CULINARY EXPERIENCE <br />
            BY THE SAME TEAM AS LOCAVORE
          </h3>
          <hr className='w-full' />
          <div className='space-y-4'>
            <p>
              Our menus at Nusantara cover certain regions of Indonesia where
              some of the strongest recipes and culinary inspirations originate.
              Many of our dishes are lesser-known, very local, and often not
              commonly found outside of these regions.
            </p>
            <p>
              Key to this is our ongoing research in discovering lost recipes,
              techniques and dishes that have been forgotten or are no longer
              practised. Our team is bringing this back to life.
            </p>
          </div>
          <FancyLink
            destination='https://drive.google.com/file/d/18pXtaI-QQgTDCREOvmDEmRTw6Re6a0gu/view?usp=sharing'
            blank={true}
            className='mb-8 py-4 px-6 text-sm font-bold tracking-widest transition-all ease-linear hover:bg-black border hover:text-white border-black rounded-xl pointer-events-auto'
          >
            SEE MENU
          </FancyLink>
        </div>
        <div dangerouslySetInnerHTML={RSVPinsert()} />

        <div className='setflex-center mb-16 mt-2 max-w-3xl mx-auto'>
          <WhatsappModule
            whatsappLink='http://wa.me/6282146813714'
            whatsappText='+62 821 4681 3714'
          />
          <div className='flex mt-10 space-x-6'>
            <FancyLink
              onClick={() => setModalData('gift')}
              className='py-4 px-6 text-sm font-bold tracking-widest transition-all ease-linear hover:bg-black border hover:text-white border-black rounded-xl pointer-events-auto'
            >
              GIFT VOUCHERS
            </FancyLink>
            <FancyLink
              onClick={() => setModalData('cooking')}
              className='py-4 px-6 text-sm font-bold tracking-widest transition-all ease-linear hover:bg-black border hover:text-white border-black rounded-xl pointer-events-auto'
            >
              COOKING CLASS
            </FancyLink>
          </div>
        </div>
        <BasicModal
          isOpen={modalData === 'gift'}
          onRequestClose={closeModal}
          classNameModalContent={`popup`}
        >
          <div className='flex flex-col justify-center w-full h-full bg-white absolute-center md:justify-start md:relative md:top-auto md:left-auto md:translate-x-0 md:translate-y-0'>
            <span className='block uppercase font-bold text-lg text-center leading-tight mb-6 lg:font-bold lg:mb-8'>
              Buy Gift Vouchers
              <span className='block mt-2'>•</span>
            </span>
            <p className='text-center'>
              Treat someone special to a memorable dining experience at
              Restaurant Locavore with Gift Vouchers for our tasting menu and
              matching beverage pairing. Contact{' '}
              <FancyLink
                blank={true}
                href={'mailto:wayan@locavore.co.id'}
                className='italic font-serif font-semibold text-lg'
              >
                wayan@locavore.co.id
              </FancyLink>{' '}
              for more information.
              <hr className='w-72 mx-auto mt-6 mb-6' />
              <WhatsappModule
                whatsappLink='http://wa.me/6282146813714'
                whatsappText='+62 821 4681 3714'
              />
            </p>
          </div>
        </BasicModal>
        <BasicModal
          isOpen={modalData === 'cooking'}
          onRequestClose={closeModal}
          classNameModalContent={`popup cooking`}
        >
          <div className='flex flex-col justify-center w-full h-full bg-white absolute-center md:justify-start md:relative md:top-auto md:left-auto md:translate-x-0 md:translate-y-0'>
            <span className='block uppercase font-bold text-lg text-center leading-tight mb-6 lg:font-bold lg:mb-8'>
              NUSANTARA COOKING CLASS
              <span className='block mt-2'>•</span>
            </span>
            <p className='text-center lg:mx-auto lg:w-[600px]'>
              <span className='block font-bold mb-3'>
                Book a Culinary Adventure
              </span>
              Every Tuesday and Friday, our chef Putu teaches the craft of
              authentic Indonesian dishes. The itinerary and menu can be
              customised to provide a personal experience, whether for yourself
              or as a special gift for someone else.
              <br />
              <br />
              <hr className='w-72 mx-auto' />
            </p>
            <div className='flex flex-col lg:flex-row lg:space-x-8 mt-6 lg:mt-8'>
              <p className='text-center w-full'>
                <span className='block font-bold'>THE MORNING ADVENTURE</span>
                Rp. 595.000++ per person
                <br />
                <br />
                Join us at the Nusantara Restaurant at 9:30am for coffee and
                jajan to discuss your personal menu before learning to prepare a
                range of unique Indonesian dishes with traditional techniques.
                <br />
                <br />
                You will be taught to make Bumbu Bali, the complex spice
                combination used in many local dishes. Each herb or root in this
                mixture has medicinal properties. Then prepare a range of unique
                authentic Indonesian dishes with traditional techniques, such as
                using a stone grinder and cooking in bamboo over coffee wood or
                charcoal in our outdoor kitchen.
                <br />
                <br />
                All followed up with a feast of everything you’ve prepared (and
                more!) in our dining room.
              </p>
              <p className='text-center w-full'>
                <span className='block font-bold'>THE FULL ADVENTURE</span>
                Rp. 995.000++ per person
                <br />
                <br />
                Join us at the Nusantara restaurant at 7am for coffee and jajan
                to discuss your personal menu before hopping on the back of a
                motorbike to the vibrant Payangan market. Here you’ll select
                fresh ingredients for your day of cooking before foraging for
                fresh herbs and visiting a Balinese compound.
                <br />
                <br />
                Back at Nusantara, you will begin learning to prepare a range of
                unique Indonesian dishes with traditional techniques. You will
                be taught to make Bumbu Bali, the complex spice combination used
                in many local dishes. Then prepare a range of unusual authentic
                Indonesian dishes with traditional techniques, such as using a
                stone grinder and cooking in bamboo over coffee wood or charcoal
                in our outdoor kitchen.
                <br />
                <br />
                All followed up with a feast of everything you’ve prepared (and
                more!) in our dining room.
              </p>
            </div>
            <hr className='w-72 mx-auto mt-6 mb-6' />
            <WhatsappModule
              whatsappLink='http://wa.me/6282146813714'
              whatsappText='+62 821 4681 3714'
            />
          </div>
        </BasicModal>
      </Container>
      <Footer footer={footer} mailchimp={seo.mailchimpID} />
    </Layout>
  );
}

export async function getStaticProps() {
  const homeAPI = await client.fetch(`
  *[_type == "home"] {
    issue->
  }
  `);
  const seoAPI = await client.fetch(`
                    *[_type == "settings"]
                    `);
  const headerAPI = await client.fetch(`
                    *[_type == "header"]
                    `);
  const footerAPI = await client.fetch(`
                    *[_type == "footer"]
                    `);
  return {
    props: {
      seoAPI,
      footerAPI,
      homeAPI,
      headerAPI,
    },
  };
}
