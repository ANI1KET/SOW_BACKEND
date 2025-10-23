# Stage 1: Base for build
FROM node:23-alpine AS base

RUN apk add --no-cache openssl

WORKDIR /app/SOW_BACKEND

COPY package.json package-lock.json ./
RUN npm ci

COPY prisma ./prisma
RUN npx prisma generate

COPY src ./src
COPY tsconfig.json ./

RUN npm run build
RUN npm prune --production


# Stage 2: Final runtime image
FROM node:23-alpine AS room

RUN apk add --no-cache openssl

WORKDIR /app

COPY --from=base /app/SOW_BACKEND/build SOW_BACKEND/build
COPY --from=base /app/SOW_BACKEND/node_modules SOW_BACKEND/node_modules
COPY --from=base /app/SOW_BACKEND/package.json SOW_BACKEND/package.json

WORKDIR /app/SOW_BACKEND

CMD ["node", "build/server.js"]
