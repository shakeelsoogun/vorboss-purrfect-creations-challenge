#!/usr/bin/env bash


# Serve the frontend, don't wait
cd ./app/dist
python3 -m http.server 3000 &
cd ../../

# Now run the backend
cd ./api
python3 -m gunicorn --bind=0.0.0.0 api:app