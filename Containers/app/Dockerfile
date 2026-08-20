FROM ubuntu:22.04

# Avoid interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Install Node.js + npm (NodeSource gives a modern version; Ubuntu's default repo is outdated)
RUN apt update && \
    apt install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt install -y nodejs && \
    apt clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY main.js main.js

# EXPOSE PORT

ENTRYPOINT ["node", "main.js"]
