# Specify base image (NodeJS)
FROM node:latest

# Update the Ubuntu image
RUN apt-get -y update

# 
FROM base AS requirements

# Specify another image (MySQL)
FROM mysql:latest

# Install the requirements
RUN pip3 install -r requirements.txt

# Create an intermediate image layer for testing purpose
FROM requirements AS test

# Create the build context
COPY /usr/src/coursework /desktop/coursework

# Run script after image is built
CMD [ "cmd", "project.js" ]
