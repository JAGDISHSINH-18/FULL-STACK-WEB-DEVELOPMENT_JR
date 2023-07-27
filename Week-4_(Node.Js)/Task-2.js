import readline from 'readline';
import url from 'url'
import querystring from 'querystring';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a URL with a query string: ', (userInput) => {
  // Parse the URL using the url module
  const parsedUrl = url.parse(userInput, true);

  // Extract key-value pairs from the query string using querystring module
  const queryParams = parsedUrl.query;

  console.log('\nExtracted Key-Value Pairs:');
  console.log(queryParams);

  rl.close();
});