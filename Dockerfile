# Each step is like a layer which gets cached. Cache gets updated when there a change. e.g If I made a change to index.js everything after and including copy . . will be executed.
# Start your image with a node base image
FROM node:22

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./

RUN npm install \
    && npm install -g serve

# Copy local directories to the current local directory of our docker image (/app)
COPY . .

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN && npm run build \
    && rm -fr node_modules

# app is running on port 3000 so expose 3000. When running the container, map it to port 80:- docker run -p 80:3000 aninext
EXPOSE 3000

# Start the app using serve command
CMD [ "serve", "-s", "dist" ]