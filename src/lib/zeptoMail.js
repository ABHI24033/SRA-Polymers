const ZEPO_URL = import.meta.env.VITE_ZEPTO_URL || 'https://api.zeptomail.in/v1.1/email';
const ZEPO_TOKEN = import.meta.env.VITE_ZEPTO_TOKEN || 'Zoho-enczapikey****';
const DEFAULT_FROM = import.meta.env.VITE_ZEPTO_FROM_EMAIL || 'support@eduwego.in';
const DEFAULT_FROM_NAME = import.meta.env.VITE_ZEPTO_FROM_NAME || 'noreply';
const DEFAULT_CONTACT_TO = import.meta.env.VITE_ZEPTO_CONTACT_TO || 'info.srapolymer@gmail.com';
const DEFAULT_CONTACT_NAME = import.meta.env.VITE_ZEPTO_CONTACT_NAME || 'Manjeet';

const ensureConfig = () => {
  if (!ZEPO_TOKEN) {
    throw new Error('ZeptoMail token is missing. Set VITE_ZEPTO_TOKEN in your environment.');
  }
  if (!DEFAULT_FROM) {
    throw new Error('ZeptoMail from address is missing. Set VITE_ZEPTO_FROM_EMAIL in your environment.');
  }
};

export const getZeptoContactRecipient = () => ({
  address: DEFAULT_CONTACT_TO,
  name: DEFAULT_CONTACT_NAME,
});

export const sendZeptoMail = async ({ subject, htmlbody, to, replyTo }) => {
  ensureConfig();
  const payload = {
    from: { address: DEFAULT_FROM, name: DEFAULT_FROM_NAME },
    to: to.map(({ address, name }) => ({ email_address: { address, name } })),
    subject,
    htmlbody,
    reply_to: replyTo?.address ? [{ address: replyTo.address, name: replyTo.name }] : undefined,
  };

  const response = await fetch(ZEPO_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: ZEPO_TOKEN,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'ZeptoMail request failed');
  }

  return response.json();
};
