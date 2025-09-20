// Production EmailJS configuration using environment variables
// This file can be safely committed to git

export const emailConfig = {
  // Get these from your EmailJS dashboard and set as environment variables in Vercel
  serviceId: process.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
  templateId: process.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id', 
  publicKey: process.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
  
  // Email template parameters
  templateParams: {
    from_name: '{{from_name}}',
    from_email: '{{from_email}}',
    to_email: '{{to_email}}',
    subject: '{{subject}}',
    message: '{{message}}',
    reply_to: '{{reply_to}}',
  }
};

/* 
VERCEL ENVIRONMENT VARIABLES TO SET:

In your Vercel dashboard, add these environment variables:
- VITE_EMAILJS_SERVICE_ID = service_62wjoy8
- VITE_EMAILJS_TEMPLATE_ID = template_gb2vl84  
- VITE_EMAILJS_PUBLIC_KEY = eokI-MQ4STG_Kkc5G
*/