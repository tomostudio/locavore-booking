import { useState, useEffect, useRef } from 'react';
import { transition } from '@/helpers/preset/tailwind';

import Arrow from '../utils/arrow';

const SubscribeForm = ({
  status,
  message = '',
  onValidated,
  className = '',
  ...props
}) => {
  const [disable, setDisable] = useState(false);
  const [redError, setRedError] = useState(false);
  const [email, setEmail] = useState(null);
  const [placeholder, setPlaceholder] = useState('EMAIL');
  const inputEl = useRef(null);

  // PROCESS
  const handleFormSubmit = () => {
    inputEl.current.blur();
    setDisable(true);
    return email && email.indexOf('@') > -1 && onValidated({ EMAIL: email });
  };

  // FOR KEYBOARD ENTER
  const handleInputKeyEvent = (event) => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  useEffect(() => {
    let pTimeout = null;
    const time = 4000;

    const resetPlaceholderTimer = () => {
      clearTimeout(pTimeout);
      pTimeout = setTimeout(() => {
        setDisable(false);
        setRedError(false);
        setPlaceholder('EMAIL');
      }, time);
    };

    if (status === 'success') {
      // Set Success Message
      setRedError(false);
      inputEl.current.value = '';
      setPlaceholder('Got it!');
      resetPlaceholderTimer();
    } else if (status === 'error') {
      //Set Error Message
      inputEl.current.value = '';

      //Customize the error messages accordingly
      if (message.includes('cannot be added')) {
        setRedError(true);
        setPlaceholder("That's an invalid email.");
      } else if (message.includes('is already subscribed')) {
        setPlaceholder('You are already on the list!');
      } else {
        setRedError(true);
        setPlaceholder(`Error ${message}`);
      }
      resetPlaceholderTimer();
    } else if (status === 'sending') {
      // Reset some status.
      clearTimeout(pTimeout);
    } else {
      // Reset some status.
      setRedError(false);
      setDisable(false);
    }
  }, [status]);

  return (
    <div
      className={`flex w-full max-w-sm max-md:max-w-lg flex-col justify-between ${className}`}
      {...props}
    >
      <label className='text-xl font-normal'>
        {`Sign up with email for what's NXT`}
      </label>
      <div
        className={`relative mt-5 w-full border-white pb-2.5 border-b flex h-10 ${
          disable ? 'pointer-events-none' : ''
        }`}
      >
        <input
          className={`w-full text-sm tracking-wide placeholder-white outline-none bg-transparent !select-all ${
            redError ? ' placeholder-red-500' : ''
          }`}
          type='email'
          placeholder={placeholder}
          onChange={(event) => setEmail(event?.target?.value ?? '')}
          onKeyUp={(event) => handleInputKeyEvent(event)}
          ref={inputEl}
        />
        <button
          onClick={handleFormSubmit}
          className={`h-full w-10 ${transition.fade}`}
        >
          <Arrow
            position='right'
            className='absolute right-0 top-2'
            fill='white'
          />
        </button>
      </div>
    </div>
  );
};

export default SubscribeForm;
