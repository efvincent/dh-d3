#!/bin/sh

# Check if the http-server process is running
if ! pgrep -f 'http-server' > /dev/null; then
  echo "Starting the server..."
  yarn start
else
  echo "Server is already running"
fi