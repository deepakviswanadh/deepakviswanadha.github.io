module.exports = {
  email: 'deepak16c@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/deepakviswanadh',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/deepakviswanadha/',
    },
    {
      name: 'AWS',
      url: 'https://www.credly.com/badges/a89c4fc8-f3a1-40ef-a308-38f078d1d67b/',
    },
    {
      name: 'PYRO_AI',
      url: 'https://pyroai.com/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
