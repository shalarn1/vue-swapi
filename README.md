# vue-swapi

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# README

Ruby 3.3.5 / Rails 7.0.8

## Install

### Clone the repository
```shell
git clone git@github.com:shalarn1/instrumentl.git
cd instrumentl
```
### Local development with Docker

The only local depedency should be Docker.

#### Once Docker is running:
```shell
# Build image and install app dependencies:
docker compose build web

# Running the app (go to http://localhost:8080 in your browser)
docker compose run -p 8080:8080 web
```

#### Relevant files for review:
```shell

Dockerfile
docker-compose.yml
```

# Front-End Project

Imports data from a CSV of San Francisco restaurants, their inspections, and code violations to a relational (SQL) DB

Notes:
https://sarika-halarnakar.notion.site/CSV-Analysis-13ddd81f57b18031a281f45175b85a13?pvs=4


