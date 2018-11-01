const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Gareth Davies Media ', // Navigation and Site Title
  siteTitleAlt: 'Gareth Davies', // Alternative Site title for SEO
  siteUrl: 'https://garethdavies.tech', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo.png', // Used for SEO and manifest
  siteDescription: 'Gareth Davies is a web developer and media producer based in Essex, England. Visit his website today. ',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@GarethB2B', // Twitter Username
  ogSiteName: 'Gareth Davies', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
