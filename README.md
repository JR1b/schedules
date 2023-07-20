# ◭ Blue Prism UI Tech Test ◭

## Overview

This is a simple application that allows a user to view a list of schedules and their logs. This tries to implement the [Blue Prism UI Tech Test](docs/bp-ui-tech-test.md) requirements.

### Built With

* ![Nx](https://img.shields.io/badge/nx-143055?style=for-the-badge&logo=nx&logoColor=white)
* ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
* ![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
* [react-aria](https://react-spectrum.adobe.com/react-aria/)/[react-aria-components](https://react-spectrum.adobe.com/react-aria/react-aria-components.html) - library of React Hooks/components that provides accessible UI

## Pre-requisites

* Install [Node.js](https://nodejs.org/en/download) version 18

## Getting started

* Clone this repository
  
  ```bash
  git clone https://github.com/JR1b/schedules.git
  ```

* Install dependencies

  ```bash
  cd schedules
  pnpm install
  ```

* Run the app

  ```bash
   pnpm nx run-many --target=serve --projects=api,frontend --parallel
  ```

* Navigate to `http://localhost:4200`

## Storybook


### Running storybook

* Run storybook

  ```bash
  pnpm nx storybook ui
  ```

* Navigate to `http://localhost:4401`

Note: There was an attempt to create a storybook for all the libraries using [storybook composition](https://nx.dev/packages/storybook/documents/storybook-composition-setup). However, it seems that the storybook composition is not yet stable and not yet working as expected, maybe a miss configuration or some other issue. So only storybook for the ui library is available.
