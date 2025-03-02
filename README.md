# README

Vue 3 in Vite.

## Install

### Clone the repository
```shell
git clone git@github.com:shalarn1/vue-swapi.git
cd vue-swapi
```
### Local development with Docker

The only local depedency should be Docker.

#### Once Docker is running:
```shell
# Build image and install app dependencies:
docker build -t web .

# Running the app (go to http://localhost:8080 in your browser)
docker run -p 8080:8080 web
```

## Non-Docker Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
# Running the app (go to http://localhost:8080 in your browser)
npm run dev
```

#### Relevant files for review:
```shell
index.html
src/main.js
src/App.vue
src/router/*.js
src/js/*.js
src/views/*.vue
src/components/*.vue

vite.config.js
package.json
Dockerfile
```

# Front-End Project

A basic website to display information from the Star Wars API.

Notes:

1. I implemented the table vue and details view for films, people, and vehicles. There is not a table view for the other categories, however, the details view does work, though the data is not formatted in an order of importance. This was implemented so that links to these records would work.
2. I implemented a very basic loading state and cache using axios interceptors to help with page loads. It's still a bit slow even so and the cache persists on refresh and expires after 60 minutes. If the project were more complex, I would have considered adding vuex/pinia.
3. It could benefit from UI pagination for the People and Films. In the real world I would have wanted to display pages with next and back buttons. The pagination works with the routes' query params so feel free play around with that if you manually construct it.
4. I opted for a rudimentary approach to css/responsiveness/styling. I had started to integrate tailwind but then decided to just maintain minor adjustments to the css boilerplate included from Vue in the interest of time, so the CSS has been left largely unpolished. The sidebar and the details page are major improvement areas. A fixed sidebar for one and for the details page, I would have wanted to make the data keys more human readable and of couse added css to make it more digestible as well as add a back button. There is some repeated code that should be made into reusable vue components. I also recognize the table is not a standard size among the categories.
5. In the real world it would also need error handling and specs. There is also some repeated logic and code among the top level 'View" files, particularly between the People and Vehicles logic. Upon implementing more categories, I would have wanted to abstract that logic into a shared file and maybe change the routing to a singular TableView similar to how the DetailsView functions or something of the sort.

