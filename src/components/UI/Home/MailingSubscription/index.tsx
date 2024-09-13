'use client';
import Image from 'next/image';
import {
  MailingWrapper,
  MailingInner,
  LeftImage,
  MailingForm,
  FormHeading,
  MailingFormSegment,
  FormInput,
  SubmitButton,
  UnderlayBg,
  CloseBtn,
} from './style';
import mailing_banner from '../../../../../public/images/mailing_banner.png';
import { FormEvent, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import Cookies from 'universal-cookie';

const MailingSubscription = () => {
  const [fields, setFields] = useState({
    first_name: '',
    last_name: '',
    email: '',
    country_of_residence: '',
    loading: false,
  });
  const [modal, setModal] = useState(false);
  const cookies = new Cookies(null, { path: '/' });
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60);

  // Function to generate a unique ID
  const generateUniqueId = () => {
    return 'popup_' + Math.random().toString(36).slice(2, 11);
  };

  const uniqueId = generateUniqueId(); // Generate a unique ID
  const popupId = cookies.get('popup');

  useEffect(() => {
    if (!popupId) {
      // Check if the cookie doesn't exist
      setTimeout(() => {
        setModal(true);
      }, 300000);
    } else {
      setModal(false);
    }
  }, [popupId]);

  const handlePopupSubmit = () => {
    setModal(false);
    cookies.set('popup', uniqueId, { expires: expirationDate });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { first_name, last_name, email, country_of_residence } = fields;
    if (!first_name || !last_name || !email || !country_of_residence) {
      toast.error('Fill all Fields!');
      return;
    }
    setFields({ ...fields, loading: true });

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({
          email: fields.email,
          first_name: fields.first_name,
          last_name: fields.last_name,
          country_of_residence: fields.country_of_residence,
        }),
      });

      const data = await res.json();
      if (data.error) {
        console.log(data.error);
        setFields({ ...fields, loading: false });
        toast.error(data.error.title);
        return;
      }

      toast.success("You've succesfully subscribed!");
      setFields({
        first_name: '',
        last_name: '',
        country_of_residence: '',
        email: '',
        loading: false,
      });
      setModal(false);
      cookies.set('popup', uniqueId, { expires: expirationDate });
    } catch (error: unknown) {
      setFields({ ...fields, loading: false });
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  return modal ? (
    <MailingWrapper>
      <UnderlayBg onClick={() => handlePopupSubmit()} />
      <MailingInner>
        <CloseBtn type="button" onClick={() => handlePopupSubmit()}>
          Close
        </CloseBtn>
        <LeftImage>
          <Image
            src={mailing_banner}
            alt="mailing subscription banner"
            priority
            placeholder="blur"
            fill
          />
        </LeftImage>
        <MailingForm onSubmit={handleSubmit}>
          <FormHeading>
            <h1>Subscribe to our newsletter</h1>
            <p>
              Stay connected and updated on our exclusive events, programs &
              offerings.
            </p>
          </FormHeading>
          <MailingFormSegment>
            <FormInput
              type="text"
              placeholder="First Name"
              name="first_name"
              value={fields.first_name}
              onChange={handleChange}
            />
            <FormInput
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={fields.last_name}
              onChange={handleChange}
            />
          </MailingFormSegment>
          <FormInput
            type="text"
            name="country_of_residence"
            placeholder="Country of Residence"
            value={fields.country_of_residence}
            onChange={handleChange}
          />
          <FormInput
            type="email"
            placeholder="Email"
            name="email"
            value={fields.email}
            onChange={handleChange}
          />
          <SubmitButton
            type="submit"
            disabled={fields.loading}
            className={fields.loading ? 'disable' : ''}
          >
            {fields.loading ? 'Loading...' : 'SUBMIT'}
          </SubmitButton>
        </MailingForm>
      </MailingInner>
    </MailingWrapper>
  ) : null;
};

export default MailingSubscription;
