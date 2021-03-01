FROM node

WORKDIR /app/frontend
COPY package.json /app/frontend

RUN npm install
# RUN npm install 'react-router-dom'

EXPOSE 3000
CMD ["npm", "start"]
 