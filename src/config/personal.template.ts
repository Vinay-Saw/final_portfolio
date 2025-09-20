// Personal configuration template - Copy this to personal.ts and fill in your details
// This file contains all personal information used across the portfolio
// IMPORTANT: Make sure to copy this to src/config/personal.ts and customize it with your information

export const personalConfig = {
  // Basic Info
  fullName: "Your Full Name",
  firstName: "Your First Name",
  lastName: "Your Last Name", 
  initials: "YN", // Your initials (e.g., "VS" for Vinay Saw)
  title: "Your Professional Title", // e.g., "Data Science Student & Analytics Enthusiast"
  
  // Contact Information
  email: "your.email@example.com",
  phone: "+91 XXXXXXXXXX", // Your phone number
  location: {
    city: "Your City",
    state: "Your State",
    country: "Your Country"
  },

  // Social Links - Replace with your actual URLs
  social: {
    github: {
      url: "https://github.com/yourusername/",
      username: "yourusername"
    },
    linkedin: {
      url: "https://www.linkedin.com/in/yourusername/",
      username: "yourusername"
    },
    twitter: {
      url: "", // Add if you have Twitter
      username: ""
    },
    instagram: {
      url: "", // Add if you want to include Instagram
      username: ""
    }
  },

  // Resume/CV Links
  resume: {
    // Option 1: Host on Google Drive
    // 1. Upload your resume to Google Drive
    // 2. Right-click > Get link > Anyone with the link can view
    // 3. Copy the file ID from the URL (the long string between /d/ and /view)
    // 4. Replace YOUR_RESUME_FILE_ID below
    downloadUrl: "https://drive.google.com/file/d/YOUR_RESUME_FILE_ID/view",
    viewUrl: "https://drive.google.com/file/d/YOUR_RESUME_FILE_ID/view",
    
    // Option 2: Host locally in public folder
    // 1. Put your resume.pdf in the public folder
    // 2. Uncomment the lines below and comment out the Google Drive URLs above
    // downloadUrl: "/resume.pdf",
    // viewUrl: "/resume.pdf",
    
    filename: "Your_Name_Resume.pdf"
  },

  // Professional Description
  description: {
    short: "A brief one-line description of what you do.",
    long: "A longer description that appears in your hero section. Describe your expertise, current status (student/professional), and what you're passionate about."
  },

  // Skills/Expertise (optional - you can centralize this if you want)
  expertise: [
    "Your Skill 1",
    "Your Skill 2", 
    "Your Skill 3",
    "Your Programming Language",
    "Your Tools"
  ],

  // Education (optional - you can centralize this if you want)
  education: {
    degree: "Your Degree",
    institution: "Your University/Institution",
    year: "Expected/Graduated Year"
  }
} as const;

// Helper functions for commonly used formats
export const getFullName = () => personalConfig.fullName;
export const getEmail = () => personalConfig.email;
export const getGithubUrl = () => personalConfig.social.github.url;
export const getLinkedinUrl = () => personalConfig.social.linkedin.url;
export const getResumeDownloadUrl = () => personalConfig.resume.downloadUrl;
export const getMailtoLink = () => `mailto:${personalConfig.email}`;

// Social links array for easy iteration
export const socialLinks = [
  {
    name: "GitHub",
    url: personalConfig.social.github.url,
    icon: "Github"
  },
  {
    name: "LinkedIn", 
    url: personalConfig.social.linkedin.url,
    icon: "Linkedin"
  },
  {
    name: "Email",
    url: getMailtoLink(),
    icon: "Mail"
  }
].filter(link => link.url); // Filter out empty URLs