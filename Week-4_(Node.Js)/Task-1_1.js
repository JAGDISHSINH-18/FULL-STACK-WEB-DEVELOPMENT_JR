import  readline  from 'readline';
import url from 'url';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a URL: ', (userInput) => {
  // Parse the URL using the url module
  const parsedUrl = url.parse(userInput, true);

  // Display the parsed components
  console.log('\nParsed URL:');
  console.log('Protocol:', parsedUrl.protocol);
  console.log('Host:', parsedUrl.host);
  console.log('Path:', parsedUrl.pathname);
  console.log('Query Parameters:', parsedUrl.query);

  rl.close();
});