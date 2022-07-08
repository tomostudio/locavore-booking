import React, { useState, useEffect } from 'react'
import Container from '@/components/modules/container'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'
import Layout from '@/components/modules/layout'
import FancyLink from '@/components/utils/fancyLink'
import SEO from '@/components/utils/seo'
import { Whatsapp } from '@/helpers/preset/svg'
import client from '@/helpers/sanity/client'
import Script from 'next/script'
import Image from 'next/image'
import WhatsappModule from '@/components/modules/whatsappModule'
import BasicModal from '@/components/modules/basicModal'
import urlFor from '@/helpers/sanity/urlFor'
import EditorComponent from '@/components/modules/editorComponent'
import EditorPopupComponent from '@/components/modules/editorPopupComponent'

export default function Nusantara({ seoAPI, footerAPI, bookingAPI }) {
  const [booking] = bookingAPI
  const [seo] = seoAPI
  const [footer] = footerAPI
  const [modalData, setModalData] = useState('')

  const closeModal = () => {
    setModalData('')
  }

  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  const RSVPinsert = () => {
    return {
      __html: `
    <rsvp-element bookable-id="${booking.rsvp.id}" api-path="${booking.rsvp.path}">
    
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
    }
  }
  return (
    <Layout>
      <SEO
        title={booking.page_title}
        pagelink={`${booking.slug.current}`}
        inputSEO={booking.seo}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <Script src="https://js.stripe.com/v3/" />
      <Script
        type="module"
        src="https://cdn.rsvp-popup.com/webcomponents/rsvp-elements/1.0/rsvp.esm.js"
      />
      <Script
        nomodule
        src="https://cdn.rsvp-popup.com/webcomponents/rsvp-elements/1.0/rsvp.js"
      />
      <HeaderGap />
      <Container className="mt-10">
        {/* <div className='relative w-full h-[150px] max-w-3xl px-4 mx-auto mb-10'>
          <Image
            src='/placeholder/nusantara.png'
            alt='Nusantara'
            layout='fill'
            objectFit='contain'
          />
        </div> */}

        <h1 className="font-sans text-center my-8 md:my-16 text-6xl md:text-8xl">
          {booking.title}
        </h1>
        <div className="relative w  full h-[500px] rounded-2xl overflow-hidden">
          <Image
            src={urlFor(booking.cover_image).url()}
            alt={booking.cover_image.alt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="setflex-center my-8 mx-auto text-center w-full max-w-3xl editor-styling">
          <EditorComponent data={booking.content_top} />
        </div>
        <div dangerouslySetInnerHTML={RSVPinsert()} />

        <div className="setflex-center mb-16 mt-8 max-w-3xl mx-auto editor-styling">
          <EditorComponent data={booking.content_bottom} />
          <div className="flex mt-10 space-x-6">
            {booking.popup.map((data, id) => (
              <FancyLink
                key={id}
                onClick={() => setModalData(id)}
                className="py-4 px-6 uppercase text-sm font-bold tracking-widest transition-all ease-linear hover:bg-black border hover:text-white border-black rounded-xl pointer-events-auto"
              >
                {data.button_text}
              </FancyLink>
            ))}
          </div>
        </div>

        {booking.popup.map((_, id) => (
          <BasicModal
            isOpen={modalData === id}
            onRequestClose={closeModal}
            classNameModalContent={`popup`}
          >
            <div className="flex flex-col justify-center w-full h-full bg-white absolute-center md:justify-start md:relative md:top-auto md:left-auto md:translate-x-0 md:translate-y-0">
              <hr className="block lg:hidden w-full mx-auto mb-6" />
              <span className="block font-bold text-lg text-center leading-tight mb-6 lg:font-bold lg:mb-8">
                {booking.popup[id].title} <span className="block mt-2">•</span>
              </span>
              <div className='editor-styling'>
                <EditorPopupComponent data={booking.popup[id].content} />
              </div>
              <hr className="block lg:hidden w-full mx-auto mt-6" />
            </div>
          </BasicModal>
        ))}
      </Container>
      <Footer footer={footer} mailchimp={seo.mailchimpID} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await client.fetch(`
      *[_type == "bookingList"]
    `)

  const paths = res.map((data) => ({
    params: { slug: data.slug.current.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const bookingAPI = await client.fetch(`
  *[_type == "bookingList" && slug.current ==  "${params.slug}"] 
  `)
  const seoAPI = await client.fetch(`
                    *[_type == "settings"]
                    `)
  const headerAPI = await client.fetch(`
                    *[_type == "header"]
                    `)
  const footerAPI = await client.fetch(`
                    *[_type == "footer"]
                    `)
  return {
    props: {
      seoAPI,
      footerAPI,
      bookingAPI,
      headerAPI,
    },
  }
}
