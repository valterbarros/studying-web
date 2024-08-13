FROM cypress/browsers
COPY . /app
WORKDIR /app
RUN npx cypress install # Install Cypress binary into image
