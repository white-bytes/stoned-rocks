# Use the official Node.js devcontainer base image
FROM mcr.microsoft.com/devcontainers/typescript-node:20-bookworm

# Install additional system dependencies
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    postgresql-client \
    vim \
    curl \
    git \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set up environment variables
ENV NODE_ENV=development
ENV SHELL=/bin/zsh

# Install global npm packages useful for Astro development
RUN npm install -g \
    netlify-cli \
    npm-check-updates \
    serve

# Set the default user to node
USER node

# Set working directory
WORKDIR /workspace
