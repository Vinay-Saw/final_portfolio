# Contact Form Setup Guide

Your contact form is now fully functional with form validation, email sending, and toast notifications! Here's how to complete the setup:

## 🚀 Current Status

✅ **Form Validation** - All fields are validated with proper error messages  
✅ **Toast Notifications** - Success/failure messages are displayed  
✅ **Loading States** - Button shows loading spinner while submitting  
✅ **Demo Mode** - Form works in demo mode for testing  
⏳ **Email Integration** - Needs EmailJS configuration (see below)

## 📧 EmailJS Setup (Required for Real Emails)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Free plan includes 200 emails/month

### Step 2: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow authentication steps
5. Note your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates** tab
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply-To: {{reply_to}}
```

4. Note your **Template ID** (e.g., `template_def456`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `user_ghi789`)

### Step 5: Configure Your Portfolio
1. Copy `src/config/email.template.ts` to `src/config/email.ts`
2. Replace the placeholder values:

```typescript
export const emailConfig = {
  serviceId: 'service_abc123', // Your actual Service ID
  templateId: 'template_def456', // Your actual Template ID
  publicKey: 'user_ghi789', // Your actual Public Key
};
```

3. Save the file

## 🧪 Testing

### Demo Mode (Current)
- Form works without EmailJS setup
- Shows demo success message
- Logs form data to console
- Good for testing UI/UX

### Production Mode (After EmailJS Setup)
- Sends real emails to your configured email
- Shows actual success/failure messages
- Form resets after successful submission

## 🔧 Features

### Form Validation
- **First Name**: Minimum 2 characters
- **Last Name**: Minimum 2 characters
- **Email**: Valid email format required
- **Subject**: Minimum 5 characters
- **Message**: Minimum 10 characters

### User Experience
- **Loading State**: Button shows spinner while sending
- **Success Toast**: Green notification with confirmation message
- **Error Toast**: Red notification if sending fails
- **Form Reset**: Clears all fields after successful submission
- **Accessibility**: Proper labels and error messages

### Email Details
- **Recipient**: Your email from `personal.ts` config
- **Sender Info**: Visitor's name and email
- **Subject Line**: Prefixed with "New Contact Form Message:"
- **Reply-To**: Set to visitor's email for easy responses

## 🛠️ Customization

### Toast Messages
Edit the toast notifications in the `onSubmit` function:

```typescript
// Success message
toast.success("Custom success message!", {
  description: "Custom description here",
  duration: 5000,
});

// Error message  
toast.error("Custom error message", {
  description: "Custom error description",
  duration: 5000,
});
```

### Form Fields
Add new fields by:
1. Adding to the `contactFormSchema` validation
2. Adding to the `ContactFormData` type
3. Adding the form field to the JSX
4. Including in the `templateParams`

### Email Template
Customize the EmailJS template with additional variables or styling as needed.

## 🔒 Security

- ✅ Email config is in `.gitignore` (private)
- ✅ EmailJS keys are client-side safe
- ✅ Form validation prevents malicious input
- ✅ Rate limiting available through EmailJS

## 📱 Mobile Responsive

The contact form is fully responsive and works seamlessly on:
- 📱 Mobile phones
- 📟 Tablets  
- 💻 Desktops
- 🖥️ Large screens

Your contact form is now ready for production use! 🎉