# Use a Node.js base image
FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# Set the working directory inside the container
WORKDIR /instrumentl

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vue.js app for production
RUN npm run build

# Expose the port used by the app (usually 8080)
EXPOSE 8080

# Start the application using a simple HTTP server
CMD ["npx", "http-server", "dist"]