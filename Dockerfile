FROM node:16
  
# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Vue application
RUN npm run build

# Expose the port that the Vue app will run on
EXPOSE 8080

# Command to start the Vue application
CMD ["npm", "run", "preview"]