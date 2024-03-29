FROM node:20.11-alpine
ARG GIT_TOKEN
ENV VITE_GIT_TOKEN=${GIT_TOKEN}
WORKDIR /srv/app
COPY . .
RUN npm install
EXPOSE 5173
CMD ["npm", "run", "dev"]