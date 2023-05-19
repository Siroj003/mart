FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Build the Next.js application
# RUN npm run build

# Expose the port on which the Next.js app runs
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "dev"]