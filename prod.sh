#!/bin/bash

echo "🚀 Building and starting AgriLink frontend..."

# Build and start in detached mode
docker-compose up -d --build

echo "✅ Deployment complete. Your app is running at http://localhost:5173/"
