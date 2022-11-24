FROM telkomindonesia/alpine:nodejs-14

# Set Environment Variable
ENV BABEL_DISABLE_CACHE=1 \
    HOST=0.0.0.0 \
    PORT=8080

# Set Working Directory
WORKDIR /usr/src/app

# Copy Node Packages Requirement
COPY package*.json ./

# Install Node Modules Based On Node Packages Requirement
RUN npm install

# Copy Node Source Code File
COPY . .

# Fix Permission Directories and Files
RUN find . -type d -exec chmod 775 {} \; \
    && find . -type f -exec chmod 664 {} \; \
    && chmod 775 node_modules/.bin/*

# Expose Application Port
EXPOSE 8080
RUN npm run build

# Run The Application
CMD ["npm", "start"]
