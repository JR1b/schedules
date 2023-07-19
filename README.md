# ◭ Blue Prism UI Tech Test ◭

## Overview

This is a simple application that allows a user to view a list of schedules and their logs. This tries to implement the [Blue Prism UI Tech Test](docs/bp-ui-tech-test.md) requirements.

Live demo: [schedules](https://schedules-weld.vercel.app/)

## Pre-requisites

- Install [Node.js](https://nodejs.org/en/download) version 18

## Getting started

- Clone this repository
  
  ```bash
  git clone https://github.com/JR1b/schedules.git
  ```

- Install dependencies

  ```bash
  cd schedules
  pnpm install
  ```

- Run the app

  ```bash
   pnpm nx run-many --target=serve --projects=api,frontend --parallel
  ```

- Navigate to `http://localhost:4200`
