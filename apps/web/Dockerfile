FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

FROM node:18-alpine AS builder
RUN npm install -g pnpm
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN pnpm run build

FROM node:18-alpine AS runner
WORKDIR /app

RUN apk add --no-cache curl

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENTRYPOINT ["pnpm", "start"]