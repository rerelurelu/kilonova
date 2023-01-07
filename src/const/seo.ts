// Type
type SEO = {
  TITLE: string;
  DESCRIPTION: string;
};

// Home page
export const HOME: SEO = {
  TITLE: `zoniha's playground`,
  DESCRIPTION: `zoniha's personal website`,
};

// Authentication page
export const AUTH: SEO = {
  TITLE: 'Auth',
  DESCRIPTION: 'Authentication page to read non-public articles',
};

// Blog page
export const BLOG: SEO = {
  TITLE: 'Blog',
  DESCRIPTION: 'Blog',
};

// About page
export const ABOUT: SEO = {
  TITLE: 'About',
  DESCRIPTION: 'About me',
};

// Contact page
export const CONTACT: SEO = {
  TITLE: 'Contact',
  DESCRIPTION: 'Contact form',
};

// 404
export const NOT_FOUND: SEO = {
  TITLE: '404 Not Found',
  DESCRIPTION: 'This page could not be found',
};
