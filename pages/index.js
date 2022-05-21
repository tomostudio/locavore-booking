import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Script from 'next/script';

export default function Home() {
  const RSVPinsert = () => {
    return {
      __html: `
    <rsvp-element bookable-id="3724" api-path="restaurants" >
    
    <!-- <rsvp-image></rsvp-image> -->
    <rsvp-booking-steps button-text="Next">
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
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Script src='https://js.stripe.com/v3/' />
      <Script
        type='module'
        src='https://cdn.rsvp-popup.com/webcomponents/rsvp-elements/1.0/rsvp.esm.js'
      />
      <Script
        nomodule
        src='https://cdn.rsvp-popup.com/webcomponents/rsvp-elements/1.0/rsvp.js'
      />

      <main className={styles.main} dangerouslySetInnerHTML={RSVPinsert()} />

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
