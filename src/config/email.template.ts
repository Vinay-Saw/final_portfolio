// EmailJS Configuration Template
// Copy this file to email.ts and configure your EmailJS settings

export const emailConfig = {
  // Get these from your EmailJS dashboard at https://www.emailjs.com/
  serviceId: 'service_62wjoy8', // Replace with your EmailJS service ID (e.g., 'service_123abc')
  templateId: 'template_gb2vl84', // Replace with your EmailJS template ID (e.g., 'template_456def')
  publicKey: 'eokI-MQ4STG_Kkc5G', // Replace with your EmailJS public key (e.g., 'user_789ghi')
};

/* 
SETUP INSTRUCTIONS:

1. **Create EmailJS Account**
   - Go to https://www.emailjs.com/ and create a free account
   - Free plan allows 200 emails/month

2. **Add Email Service**
   - Go to Email Services tab
   - Add your email provider (Gmail, Outlook, Yahoo, etc.)
   - Follow the authentication steps

3. **Create Email Template**
   - Go to Email Templates tab
   - Create a new template with these variables:
   
   Template Content Example:
   ---
   Subject: New Contact Form Message: {{subject}}
   
   From: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   
   ---
   This message was sent from your portfolio contact form.
   Reply-To: {{reply_to}}
   ---

4. **Get Your Configuration Values**
   - Service ID: Found in Email Services tab
   - Template ID: Found in Email Templates tab  
   - Public Key: Found in Account > General settings

5. **Configure This File**
   - Copy this file to email.ts
   - Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_PUBLIC_KEY
   - Test the contact form to ensure it works

6. **Template Variables Used**
   - {{from_name}} - Sender's full name
   - {{from_email}} - Sender's email address
   - {{to_email}} - Your email (recipient)
   - {{subject}} - Email subject line
   - {{message}} - Email message content
   - {{reply_to}} - Reply-to address (sender's email)

The emails will be sent to the email configured in your personal.ts file.
*/

export default emailConfig;