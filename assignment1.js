const linkPreview = require('link-preview-js');

const url = 'https://www.instagram.com/artcartbydiksha/';

const options = {
  headers: {
    'User-Agent': 'Googlebot', // Change the user agent here
  },
};

linkPreview.getLinkPreview(url, options)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
