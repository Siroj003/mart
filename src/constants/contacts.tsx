import { IconEmail, IconEmailMobile } from '@/components/icons/email';
import { IconPhone, IconPhoneMobile } from '@/components/icons/phone';

const mail = 'dispatch@martianexpress.us';
const tel = '(630) 635 - 8669';

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
];
