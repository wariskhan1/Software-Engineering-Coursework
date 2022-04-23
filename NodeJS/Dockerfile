# Base image to use
FROM node:latest

# Set a working directory
WORKDIR /src

# Copy across project configuration information
COPY package*.json /src/

# Copy across all files
COPY . /src

# Expose application port
EXPOSE 3000

# Run no-demon so files can be updated
CMD ["nodemon", "bin/www"]
