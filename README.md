# Front end - test project

## Overview

This project demonstrates a robust front-end development setup. It's built with a focus on ease of use, scalability, and modern web development practices.

## Built With:

- [Nextjs](https://nextjs.org/) - A React framework for production
- [React](https://react.dev/) - A JavaScript library for building user interfaces
  - [react-input-mask](https://github.com/sanniassin/react-input-mask) - For masked input components
  - [react-zorm](https://github.com/esamattis/react-zorm) Type-safe <form> - Type-safe forms using Zod
- [Typescript](https://www.typescriptlang.org/) - A typed superset of JavaScript
- [TailWind](https://www.typescriptlang.org/) - A utility-first CSS framework
- [Zod](https://zod.dev/) - TypeScript-first schema validation
- [Zustand](https://github.com/pmndrs/zustand) - A simple, state management solution
- [Vitest](https://vitest.dev/) - A testing framework
- [Testing-library](https://testing-library.com/) - Testing utilities
- [Cypress](https://www.cypress.io/) - End-to-end testing framework

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en) - _LTS version recommended_
- npm/[yarn](https://yarnpkg.com)/[pnpm](https://pnpm.io/pt/)
- [Docker](https://www.docker.com/) (optional)

### Installation

Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install # recommended
```

### Running the Development Server

Start the server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev # recommended
```

### Building the Project

Compile and prepare the project for production:

```bash
npm run build
# or
yarn build
# or
pnpm build # recommended
```

Run the server in production mode:

```bash
npm run start
# or
yarn start
# or
pnpm start # recommended
```

### Docker Integration

Build and manage the Docker container:

```bash
make build # to build and run the container
make up    # to run the container
make stop  # to stop the container
```

Refer to the `Makefile` for additional commands.

## Running Tests

### Unit Tests

Execute unit tests:

```bash
npm run test
# or
yarn test
# or
pnpm test # recommended
```

### End-to-End Tests

Run Cypress for end-to-end testing:

```bash
npm run cypress:open
# or
yarn cypress:open
# or
pnpm cypress:open # recommended
```

## Accessing the Application

The application will be running at [http://localhost:3000](http://localhost:3000).
