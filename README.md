# techbrew
Website for Tech Brew Labs. [View website](techbrewlabs.com)

## Stack
Built with [Gatsby](https://www.gatsbyjs.org/) v1, a static-site generator for React.js

## Contributing
### Requirements
[Node `>=8` && npm `>=5`](https://nodejs.org/api/util.html#util_util)

### Setup
- Install dependencies:
```bash
npm install
```
- Run Gatsby to watch for file changes
```bash
npm run develop
```
- Open up your browser and go to `localhost:8000`.

### Deployment
Currently, [Netlify](https://netlify.com) is used for continuous deployment and to host this website.

- Set environment config `GATSBY_DISCORD_CONTACT_WEB_HOOK` to your [Discord Web Hook](https://support.discordapp.com/hc/en-us/articles/228383668) used in the Contact page.

- Create the build.
```
gatsby build
```
- Set your web server's public root path to `/public`.

## Attribution
- Designed by [Kirby Borromeo](https://dribbble.com/kbyborromeo)
- [Vincent Tantardini](https://dribbble.com/vt) for his [Freebie 16 Line Illustrations](https://dribbble.com/shots/2131376-Freebie-16-Line-Illustrations)
- [Rasmus Andersson](https://rsms.me) [(@rsms)](https://twitter.com/rsms) for [Inter UI](https://rsms.me/inter/)
- [Netlify](https://netlify.com) for hosting this website
