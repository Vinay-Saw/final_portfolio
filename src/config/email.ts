// EmailJS Configuration
// Sign up at https://www.emailjs.com/ to get these values

export const emailConfig = {
  // Get these from your EmailJS dashboard
  serviceId: 'service_62wjoy8', // Replace with your EmailJS service ID (e.g., 'service_123abc')
  templateId: 'template_gb2vl84', // Replace with your EmailJS template ID (e.g., 'template_456def')
  publicKey: 'eokI-MQ4STG_Kkc5G', // Replace with your EmailJS public key (e.g., 'user_789ghi')
  
  // Email template parameters (these match what you'll set up in EmailJS template)
  templateParams: {
    from_name: '{{from_name}}', // Sender's full name
    from_email: '{{from_email}}', // Sender's email
    to_email: '{{to_email}}', // Your email (from personal config)
    subject: '{{subject}}', // Email subject
    message: '{{message}}', // Email message content
    reply_to: '{{reply_to}}', // Reply-to email (sender's email)
  }
};

/* 
SETUP INSTRUCTIONS:

1. Go to https://www.emailjs.com/ and create a free account
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - {{from_name}} - Sender's name
   - {{from_email}} - Sender's email
   - {{to_email}} - Your email (recipient)
   - {{subject}} - Email subject
   - {{message}} - Email message
   - {{reply_to}} - Reply-to address

4. Get your Service ID, Template ID, and Public Key from EmailJS dashboard
5. Replace the placeholder values above with your actual values

Example template content:
---
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
Reply-To: {{reply_to}}
---

6. Test the form to ensure emails are being sent properly
*/

export default emailConfig;