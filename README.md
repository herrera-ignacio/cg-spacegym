# Space Gym

## Installation

- Install [Node LTS](https://nodejs.org/en/) (this was only tested in _v18.13.0_).
- Install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).
- Install dependencies with `yarn install`.

### Configure workouts

You can manage workouts by modifying `src/workouts.json`. Be aware of the existing interface in `src/entities/Workout.ts`.

## Available Scripts

- `yarn start`: Run app in development mode. See [http://localhost:3000](http://localhost:3000).
- `yarn test`: Launch test runner in watch mode.
- `yarn build`: Build app for production.

> This was bootstraped with Create React App, please check [its documentation](https://facebook.github.io/create-react-app/docs/getting-started) to learn more.

## What has been done?

This was done as part of __CG Mars Workout - Frontend Coding Challenge__.

### Overview

Camp Gladiator is going to Mars! The year is 2065 and CG is about to start virtual workouts from Mars. For this challenge you'll be showing off your creative and design skills, as well as your proficiency with React.js/Javascript/HTML/CSS.

### Requirements

Build a React.js single-page app that showcases a small library of workouts that our campers can access at any time and watch the workouts from anywhere, on any device via a modern web browser. Don't worry, we'll provide the content.

__Your app should include the following:__

- branded dashboard page showing-casing all available workouts (use the `workouts.json` file provided in this repo)
- the workout page - which is accessible by clicking on any of the workouts on the dashboard. This page needs to include all of the provided information about the workout along with the playable video. Each workout should be accessable via its own unique URL.
- Should be well designed and usable with any common device with a modern web browser.
- Consume the data provided in workouts.json as the content for your app.

### Additional Information

- Please limit your work time to 4 hours max for this project
- You can use your own design system or feel free to use the [CG design library](https://bit.cloud/campgladiator/cgui-core) as a reference for your design
- It goes without saying, but please document how to run/access your application.
- tests are great!
- What features you decide to add is entirely up to you based on your assessment of how to make the application helpful to the end-user, as well as the time limitation.

## Assumptions and decisions

- Workout duration is in minutes.
- impactTag is ignored because I was unsure about its intent.
- Bootstrap was used for faster UI layout.
- I'd prefer using Badges for tags (level & impact) but didn't have enough time.
- No need for navbar/footer.
- No need for terms & conditions, privacy policy.
- No need for SEO optimization (thus Next.JS or Gatsby were discareded).
- No need for loaders/spinners because nothing is asynchronous.
- Not enough time for unit testing. I'd prioritize testing hooks and components with side effects.
- No enough time for storybook. It'd strongly recommended if building a reusable components library.
- ESlint was added with airbnb preset and accessibility addon.
