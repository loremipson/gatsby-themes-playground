# gatsby-themes-playground

I'm working on a very large-scale gatsby powered ecosystem. Currently working on converting a large portion of it to use the currently experimental themes and have been running into some various issues. I'm creating this repo to play around more and document all the steps I take to set up a gatsby-theme monorepo from scratch.

### Notes

#### Inheriting Pages

If your theme has pages that you want child themes to "inherit".. you need to tell `gatsby-plugin-page-creator` to use the themes directory in `gatsby-config.js`:

```js
  plugins: [
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`
      }
    }
  ]
```