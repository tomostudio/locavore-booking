import React, { useState } from 'react';
import BasicModal from '@/components/modules/basicModal';
import Container from '@/components/modules/container';
import Footer from '@/components/modules/footer';
import HeaderGap from '@/components/modules/headerGap';
import Layout from '@/components/modules/layout';
import FancyLink from '@/components/utils/fancyLink';
import SEO from '@/components/utils/seo';
import { Whatsapp } from '@/helpers/preset/svg';
import client from '@/helpers/sanity/client';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import WhatsappModule from '@/components/modules/whatsappModule';

export default function Home({ seoAPI, footerAPI }) {
  const [seo] = seoAPI;
  const [footer] = footerAPI;
  const [modalData, setModalData] = useState(false);

  const closeModal = () => {
    setModalData(false);
  };

  const RSVPinsert = () => {
    return {
      __html: `
    <rsvp-element bookable-id="3724" api-path="restaurants">
    
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
            <rsvp-step-link name="Initial">← Back</rsvp-step-link> 
              <rsvp-input label="Name" name="FirstName"></rsvp-input>
              <rsvp-input label="Surname" name="LastName"></rsvp-input>
              <rsvp-input label="Email" name="ContactEmail"></rsvp-input>
              <rsvp-phone code="+62" label="Phone" name="Phone"></rsvp-phone>              
            </rsvp-step>
             <rsvp-step step-name="AdditionalInfo">
              <rsvp-booking-additional-info name="AdditionalBookingInfo"></rsvp-booking-additional-info>
            </rsvp-step>
             
            <rsvp-step step-name="ConfirmInfo">
            <rsvp-step-link name="ContactDetails"> ← Back</rsvp-step-link> 
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
        title='Booking Locavore'
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
      <Container>
        <h1 className='font-sans text-center my-8 md:my-16 text-6xl md:text-8xl'>
          Book Your Locavore Experience
        </h1>
        <div className='relative w-full h-[500px] rounded-2xl overflow-hidden'>
          <Image
            src='/placeholder/placeholder-locavore.png'
            alt='Locavore'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='setflex-center mx-auto text-center w-full max-w-3xl'>
          <h3 className='my-14 text-2xl font-bold'>
            THE UNKNOWN: <br /> AN EDIBLE MYSTERY EXPLORED
          </h3>
          <hr className='w-full' />
          <p className='my-14'>
            Exclusively working with local ingredients is a conscious decision.
            For us chefs, it causes as many stressful sleepless nights as
            celebratory breakthroughs.
            <br />
            <br />
            One of our adventures is exploring every part of an ingredient. If
            you commonly just use the seed of a plant, don’t you wonder what the
            leaf and fruit taste like too?
            <br />
            <br />
            That is what we call the ‘winding road’ and it’s an adventure every
            time, irrespective of the destination.
            <br />
            <br />
            This season we want to take the unknown, take the path less
            travelled, use the parts others throw away, and create our own
            ingredient story.
            <br />
            <br />
            Nothing is unknown if you choose to explore it.
          </p>
          <p className='mb-14'>
            LOCAVORE MENU <br />
            Rp 1.250.000++
            <span className='block my-2'>•</span>
            Features animal protein,
            <br />
            Vegetarian option available on request
          </p>
          <p className='mb-14'>
            DRINKS PAIRING <br />
            <span className='font-serif font-medium italic'>add</span> Rp
            550.000++
            <span className='block my-2'>•</span>
            We offer creative drinks pairing to enhance your experience. <br />
            The same thought and use of ingredients applies <br />
            (we don’t serve wine as part of the pairing).
          </p>
          <FancyLink
            destination='https://drive.google.com/file/d/1myzD5qSSMm6b-XxFbPm6cM-ljO13Ps6s/view?usp=drivesdk'
            blank={true}
            className='mb-14 py-4 px-6 text-sm font-bold tracking-widest transition-all ease-linear hover:bg-black border hover:text-white border-black rounded-xl pointer-events-auto'
          >
            SEE MENU
          </FancyLink>
        </div>
        <div className='RSVPcontainer' dangerouslySetInnerHTML={RSVPinsert()} />

        <div className='setflex-center mb-16 mt-2'>
          <WhatsappModule />
          <FancyLink
            onClick={() => setModalData(true)}
            className='mt-10 py-4 px-6 text-sm font-bold tracking-widest transition-all ease-linear hover:bg-black border hover:text-white border-black rounded-xl pointer-events-auto'
          >
            GROUP RESERVATION
          </FancyLink>
        </div>

        <BasicModal
          isOpen={modalData}
          onRequestClose={closeModal}
          classNameModalContent={`popup`}
        >
          <div className='flex flex-col justify-center w-full h-full bg-white absolute-center md:justify-start md:relative md:top-auto md:left-auto md:translate-x-0 md:translate-y-0'>
            <span className='block font-bold text-lg text-center leading-tight mb-6 lg:font-bold lg:mb-8'>
              LOCALAB <span className='block mt-2'>•</span>
            </span>
            <p className='text-center'>
              LocaLab is a food laboratory and testing kitchen which is the
              centre of Locavore’s research and development. Local ingredients
              of all kinds meet state-of-the-art techniques and the creative
              minds of our team in an adventure of exploration.
              <br />
              <br />
              Here we provide a private dining space for parties of 8-12 people,
              where you can enjoy the Locavore menu as an intimate dining
              experience.
              <br />
              <br />
              For booking please send us an email to{" "}
              <FancyLink
                blank={true}
                href={'mailto:riyan@locavore.co.id'}
                className='italic font-serif font-semibold'
              >
                riyan@locavore.co.id
              </FancyLink>{" "}with at least <span className='font-semibold'>2 days notice</span>
.
              <br />
              <br />
              <hr className='w-72 mx-auto' />
              <br />
              <WhatsappModule />
            </p>
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
