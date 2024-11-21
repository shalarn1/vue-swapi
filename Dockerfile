# Use a Node.js base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /instrumentl

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port used by the app (usually 8080)
EXPOSE 8080

# Start the development server
CMD ["npm", "run", "dev"]