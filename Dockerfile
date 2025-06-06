FROM node:22-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN apk add --no-cache tzdata

FROM base AS development
LABEL stage=intermediate
ENV NODE_ENV=development
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

FROM development AS builder
RUN npm run build

FROM base AS production
ENV NODE_ENV=production
RUN npm ci --production
COPY --from=builder /usr/src/app/dist ./src
CMD ["node", "src/server.js"]