# Specify base image (NodeJS)
FROM node:latest

# Update the Ubuntu image
RUN apt-get -y update

# Create another image layer on top of base to install requirements
FROM base AS requirements

# Install the requirements
RUN pip3 install -r requirements.txt

# Create an intermediate image layer for testing purpose
FROM requirements AS test

# Create the build context
COPY /usr/src/coursework /desktop/coursework

# Run script after image is built
CMD [ "cmd", "project.js" ]
