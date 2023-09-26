import { IconEmail, IconEmailMobile } from '@/components/icons/email';
import { IconLocation, IconLocationMobile } from '@/components/icons/location';
import { IconPhone, IconPhoneMobile } from '@/components/icons/phone';

const mail = 'dispatch@martianexpress.us';
const tel = '(630) 635 - 8669';
const location = '315 W ROMEO RD, ROMEOVILLE, IL 60446';
export const contacts = [
  {
    title: 'Email',
    text: mail,
    Icon: IconEmail,
    link: `mailto:${mail}`,
    IconMobile: IconEmailMobile,
  },
  {
    title: 'Call Us',
    text: tel,
    Icon: IconPhone,
    link: `tel:${tel}`,
    IconMobile: IconPhoneMobile,
  },
  {
    title: 'Location',
    text: location,
    Icon: IconLocation,
    link: `https://www.google.com/maps/search/${location}`,
    IconMobile: IconLocationMobile,
  },
];
