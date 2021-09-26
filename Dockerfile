FROM node:14.17.6

WORKDIR /code

ENV PORT 3000
ENV JWT_SECREET "I don't do drugs. I am drugs."

COPY package.json /code/package.json

RUN npm install

COPY . /code

CMD ["npm", "run", "dev"]