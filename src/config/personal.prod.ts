// Production configuration using environment variables
// This file can be safely committed to git

export const personalConfig = {
  // Basic Info
  fullName: process.env.VITE_FULL_NAME || "Vinay Saw",
  firstName: process.env.VITE_FIRST_NAME || "Vinay",
  lastName: process.env.VITE_LAST_NAME || "Saw",
  initials: process.env.VITE_INITIALS || "VS",
  title: process.env.VITE_TITLE || "Data Science Student & Analytics Enthusiast",
  
  // Contact Information
  email: process.env.VITE_EMAIL || "your-email@example.com",
  phone: process.env.VITE_PHONE || "+91 XXXXXXXXXX",
  location: {
    city: process.env.VITE_LOCATION_CITY || "Surat",
    state: process.env.VITE_LOCATION_STATE || "Gujarat",
    country: process.env.VITE_LOCATION_COUNTRY || "India"
  },

  // Social Links
  social: {
    github: {
      url: process.env.VITE_GITHUB_URL || "https://github.com/vinay-saw/",
      username: process.env.VITE_GITHUB_USERNAME || "vinay-saw"
    },
    linkedin: {
      url: process.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/vinaysaw/",
      username: process.env.VITE_LINKEDIN_USERNAME || "vinaysaw"
    },
  },

  // Resume
  resume: {
    downloadUrl: process.env.VITE_RESUME_URL || "/resume.pdf"
  },

  // Professional Description
  description: {
    short: process.env.VITE_DESCRIPTION_SHORT || "Transforming raw data into actionable insights through machine learning, statistical analysis, and data visualization.",
    long: process.env.VITE_DESCRIPTION_LONG || "Transforming raw data into actionable insights through machine learning, statistical analysis, and data visualization. Currently pursuing my Bachelor's in Data Science with a passion for solving real-world problems."
  },

  // Skills/Expertise
  expertise: [
    "Data Science",
    "Machine Learning", 
    "Statistical Analysis",
    "Data Visualization",
    "Python",
    "R",
    "SQL"
  ],

  // Education
  education: {
    degree: process.env.VITE_EDUCATION_DEGREE || "Bachelor's in Data Science",
    institution: process.env.VITE_EDUCATION_INSTITUTION || "Indian Institute of Information Technology, Chennai (Madras)",
    year: process.env.VITE_EDUCATION_YEAR || "Expected 2027"
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
].filter(link => link.url);