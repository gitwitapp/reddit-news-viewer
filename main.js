const axios = require('axios');
const readlineSync = require('readline-sync');
const subreddit = readlineSync.question('Enter subreddit name: ');
axios.get('https://www.reddit.com/r/' + subreddit + '/.json')
  .then(response => {
    const posts = response.data.data.children;
    console.log('Top 10 posts in r/' + subreddit + ':');
    for (let i = 0; i < 10; i++) {
      console.log((i+1) + '. ' + posts[i].data.title);
    }
  })
  .catch(error => {
    console.log('Error:', error.message);
  });
