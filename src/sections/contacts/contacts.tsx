import React, { useState } from 'react';
import styles from './contacts.module.scss';
import Image from 'next/image';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import redTuckImage from '../../../public/images/red-truck.webp';
import { SubTitle } from '@/components/subTitle';
import { toast } from 'react-toastify';
import { sendContactForm } from './contact-send';

const notifySuccess = (text: string) => {
  toast.success(text, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    progressClassName: 'toastProgress',
  });
};

export const Contacts = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    await setIsLoading(true);
    await e.preventDefault();
    const data = new FormData(e.target);
    await sendContactForm({
      name: data.get('name'),
      phone: data.get('phone'),
      email: data.get('email'),
    }).then(() => {
      e.target.reset();
      setIsLoading(false);
      notifySuccess('Thanks, we will get in touch with you soon!');
    });
  };

  return (
    <section id='contacts' className={`${styles.contacts} container-fluid`}>
      <div className={styles.left}>
        <Image className={styles.image} src={redTuckImage} alt='redTuckImage' />
      </div>
      <form className={styles.right} onSubmit={handleSubmit}>
        <SubTitle className={styles.subtitle}>Contact Us</SubTitle>
        <h2>How can we help you?</h2>
        <p>
          Whatever you need delivered across the 48 states, get in touch to
          learn more and get a quote.
        </p>
        <div className={styles.inputs}>
          <Input
            required
            label='Full name'
            placeholder='Enter full name'
            name='name'
          />
          <Input
            type='tel'
            required
            name='phone'
            label='Phone number'
            placeholder='Enter phone number'
          />
          <Input
            required
            label='E-mail'
            type='email'
            placeholder='Enter email'
            name='email'
          />
        </div>
        <Button className={styles.button}>
          {isLoading ? 'Loading...' : 'Submit'}
        </Button>
      </form>
    </section>
  );
};
