Hi! This is a profile section with a bottom bar to navigation, built with remix run ✨.
the design is based on this [figma](https://www.figma.com/community/file/1244998608440129362/user-profile-settings-screen-community-community) from community

##Features

In this project, I´ve used these tools ⛏️:

- ✨ **[ESLint](https://eslint.org/)** For a clean, consistent, and error-free code.
- 🛠️ **[TypeScript](https://www.typescriptlang.org/)** - For type safety.
- 🧪 **[Jest](https://jest.io/)** - A testing framework !
- 🎨 **[Commitlint](https://commitlint.js.org/)** - helps your team adhere to a commit convention.
- 🐺 **[Husky](https://typicode.github.io/husky/)** - Husky enhances your commits and more 🐶 woof!

##How to navigate this project

You can navigate to `app` to see routes.
in `ui` is a the ui layer where are general components like Button, Tab, etc.
in `feature` are the business logic separated in relevant names.
 The structure of features is divided into `components`, `styles`, `tests` and `types`.

## Local

To execute local the project you can clone the repository and run npm install.
After that you can run `npm run dev` to generate a local server.
You can see the coverage too with `npm run coverage`, or do some watch with `npm run test:preview`

##Focus

i decide to use remix and nested routes to bring data from a fake api to simulate a real environment.
The html model is based on mobile first to help the page load on multiple devices like smartphones and make the transition to a desktop model easier.

##Troubles

- the first problem I have is with the waves that are in the design. I tried to simulate this but it was a bit hard, I looked for solutions but I didn't want to dedicate too much time to that because there wasn't clear info on the internet.

 - the icons in remix works different from other frameworks like next js. In this case the only solution recommended for the docs is to create a component to every icon svg.

 - i use services directly and no hooks like i do in next js. I don't have too much experience with remix so I don't know if this is better or worse.


if i had had more time i'd had like to do the desktop view and settings page

I'd like to thank you for the chance.
