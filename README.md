# README

Vue 3 in Vite.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Install

### Clone the repository
```shell
git clone git@github.com:shalarn1/.git
cd 
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

## Non-Docker Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

# Front-End Project

A basic website to display information from the Star Wars API.

Notes:

1. I implemented a very basic loading state and cache using axios interceptors to help with page loads. It's still a bit slow even so. If the project were more complex, I would have considered adding vuex/pinia.
2. It could benefit from UI pagination for the People and Films. I set the default to load all the records in 1 page so that it would the user would be able to view everything possible, but in the real world I would have wanted to display pages with next and back buttons. The pagination works with the routes query params so feel free play around with that if you manually construct it.
3. I opted for a more basic approach to css/responsiveness/styling. I had planned to integrate tailwind but ultimately decided to just make minor adjustments to the css boilerplate included with the Vue.
4. In the real world it would also need error handling and specs.

