# Use official Node.js image
FROM node:24

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port the app will run on
EXPOSE 8080

# Command to run the app
CMD ["node", "server.js"]
