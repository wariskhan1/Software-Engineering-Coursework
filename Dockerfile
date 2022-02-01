# Specify image of NodeJS
FROM node:latest
# Define maintainer
LABEL maintainer " "

# Define working directory
WORKDIR /app
# Copy the .json file to the container
COPY /app/coursework.json
# Install npm
RUN npm install
# Copy rest of file to the container
COPY /app

# Run script after image is built
CMD [ "npm", "start" ]
