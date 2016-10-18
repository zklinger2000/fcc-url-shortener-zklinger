# fcc-url-shortener-zklinger

![FreeCodeCamp Social Banner](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)

An API that returns a shortened URL in the JSON response when given a properly formatted URL.

# API Basejump: URL Shortener microservice
### User stories:
1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
1. If I pass an invalid URL that doesn't follow the valid `http://www.example.com` format, the JSON response will contain an error instead.
1. When I visit that shortened URL, it will redirect me to my original link.
### Example usage:
`https://fcc-url-shortener-zklinger.herokuapp.com/url/` **+** `a properly formatted URL`  
Like:  
`https://fcc-url-shortener-zklinger.herokuapp.com/url/http://google.com`
### Example output:
```
{
  "original_url": "http://google.com",
  "short_url": "https://fcc-url-shortener-zklinger.herokuapp.com/25"
}
```
### Results:
Clicking on `https://fcc-url-shortener-zklinger.herokuapp.com/25` would then redirect you to `http://google.com`

Built as a Node.js app using [Express 4](http://expressjs.com/).

This application came from the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
$ git clone https://github.com/zklinger2000/fcc-url-shortener-zklinger.git
$ cd fcc-url-shortener-zklinger
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
