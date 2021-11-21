# MoonbladeUI

A simple React component library to help you developing apps faster and more productive. Build with TSDX that
helps to develop React component libraries more realiable and faster without thinking other stuff to setup 
such as Rollup, PostCSS, and ...etc

### Run the project with Storybook
```bash
yarn storybook
```
This loads the stories from `./stories`.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

#### Setup Files

Folder structure :

```txt
/example
  index.html
  index.tsx       # test the component here in a demo app
  package.json
  tsconfig.json
/src
  index.tsx       # To import our component to be used during library deployment and the places we develop our component
/test
  blah.test.tsx   # Unit test folder 
/stories
  Thing.stories.tsx # Stories for the component
/.storybook
  main.js
  preview.js
.gitignore
package.json
README.md         # README OBVIOUSLY
tsconfig.json
```

### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration