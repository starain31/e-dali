FROM node:14.17.6

WORKDIR /code

ENV PORT 3000
ENV JWT_SECREET ""

COPY package.json /code/package.json

RUN npm install

COPY . /code

CMD ["npm", "run", "dev"]