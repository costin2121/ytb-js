# ytb-js

## Installation
```
npm install ytb-js
```

## Why would i use this instead of the googleapis package?
I found the googleapis package a little bit hard to use so this package does exactly the same thing as googleapis but its just much easier to use

## Quickstart

### Importing the package

```js
// javascript
const { Youtube } = require('ytb-js');
// typescript
import { Youtube } from 'ytb-js';
```
### Using the package

```js
const youtube = new Youtube("YOUR_API_KEY");

// This will return a JSON object that has data about the first 10 videos that the api found
ytb.search({ q: "Cat Videos", maxResults: 10 }).then((result) => {
  console.log(result);
}); 

// This will return a JSON object that has data about the specified channel(s)
yt.searchChannels({ part: ["snippet"], forUsername: "jacksepticeye" }).then((result) => {
  console.log(result);
});

// This will return a JSON object that has data about the comments of the specified video
yt.getVideoComments({ part: ["snippet"], videoId: "aV8bxGs3Wy4" }).then((result) => {
  console.log(result);
});
```
## Information about other methods/method options can be found in the [GitHub Repository](https://github.com/DobreCostin21/ytb-js)
### Also this package currently does not have all the methods that googleapis has, but I will try my best to make them as soon as possible