FROM nikolaik/python-nodejs:python3.11-nodejs19-slim

ENV AIRTABLE_API_KEY=
ENV AIRTABLE_BASE_ID=
ENV AIRTABLE_TABLE_NAME=

ENV FLASK_APP=./api/api.py
ENV VITE_API_URL=http://localhost:8000

WORKDIR /app

COPY ./api/requirements.txt ./api/requirements.txt
RUN pip3 install -r ./api/requirements.txt

COPY ./api ./api

COPY ./app/package.json ./app/package.json ./app/
RUN npm install --prefix ./app

COPY ./app ./app

WORKDIR /app/app
RUN npm run build
WORKDIR /app

COPY run.sh ./

CMD [ "./run.sh" ]
