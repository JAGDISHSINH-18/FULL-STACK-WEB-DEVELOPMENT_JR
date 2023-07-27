import url from 'url';

function getAbsoluteURL(baseURL, relativePath) {
  try {
    const absoluteURL = url.resolve(baseURL, relativePath);
    console.log('Absolute URL:', absoluteURL);
    return absoluteURL;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

// Example usage:
const baseURL = 'https://www.example.com';
const relativePath = '/products?category=electronics&page=1';
getAbsoluteURL(baseURL, relativePath);