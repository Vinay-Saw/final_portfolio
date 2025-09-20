// Personal configuration - Keep this file private and don't commit to git
// This file contains all personal information used across the portfolio

export const personalConfig = {
  // Basic Info
  fullName: "Vinay Saw",
  firstName: "Vinay",
  lastName: "Saw",
  initials: "VS", // or "DS" if you prefer Data Science
  title: "Data Science Student & Analytics Enthusiast",
  
  // Contact Information
  email: "vinaysaw@duck.com",
  phone: "+91 XXXXXXXXXX", // Add your phone number if needed
  location: {
    city: "Surat",
    state: "Gujarat",
    country: "India"
  },

  // Social Links
  social: {
    github: {
      url: "https://github.com/vinay-saw/",
      username: "vinay-saw"
    },
    linkedin: {
      url: "https://www.linkedin.com/in/vinaysaw/",
      username: "vinaysaw"
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
    // You can host your resume on Google Drive, Dropbox, or any cloud service
    downloadUrl: "https://drive.google.com/file/d/YOUR_RESUME_FILE_ID/view", // Replace with actual URL
    viewUrl: "https://drive.google.com/file/d/YOUR_RESUME_FILE_ID/view", // Replace with actual URL
    // Alternative: you can also store resume in public folder and reference it
    // downloadUrl: "/resume.pdf",
    filename: "Vinay_Saw_Resume.pdf"
  },

  // Professional Description
  description: {
    short: "Transforming raw data into actionable insights through machine learning, statistical analysis, and data visualization.",
    long: "Transforming raw data into actionable insights through machine learning, statistical analysis, and data visualization. Currently pursuing my Bachelor's in Data Science with a passion for solving real-world problems."
  },

  // Skills/Expertise (if you want to centralize this too)
  expertise: [
    "Data Science",
    "Machine Learning", 
    "Statistical Analysis",
    "Data Visualization",
    "Python",
    "R",
    "SQL"
  ],

  // Education (if you want to centralize this)
  education: {
    degree: "Bachelor's in Data Science",
    institution: "Indian Institute of Information Technology, Chennai (Madras)",
    year: "Expected 2027" // Update as needed
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