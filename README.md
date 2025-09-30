AgriLink Frontend Project
🌟 Project Overview
AgriLink is our Smart India Hackathon (SIH) project focused on [You can add a one-line mission statement here, e.g., connecting farmers directly with markets].

This application is the user interface, containerized using Docker and leveraging GitHub Actions for a robust Continuous Deployment pipeline.

🌐 Repository Link
The source code is hosted here:
https://github.com/pratikjojode/agrilink-frontend.git

💻 Technology Stack
The frontend application is built on modern web technologies:

Framework: React 19

Build Tool: Vite

Styling: TailwindCSS

Routing: React Router for client-side routing

Icons: lucide-react

👥 Team & Responsibilities
Name

Role

Responsibilities

Zaid Aslam Dhanse

Project Leader / Product Manager

Overall vision, team coordination, task prioritization, presentation

Pratik Ravindra Jojode

Backend Lead Developer

Server architecture, database design, API development (Node.js/NestJS)

Aman Ashok Yadav

Frontend Lead Developer

PWA development, UI/UX design (React)

Trunal Sandeep Dhopte

Business & Data Analyst

Go-to-market strategy, user research, partnership development

Sarthak Maurya

Impact & Market Analyst

Market sizing, opportunity analysis, competitive landscape & viability

Gauri Garate

Strategy & Communications Lead

Narrative integration, storyboarding, critical review

🚀 Local Development Setup
To run the application locally in a containerized environment, you must have Docker and Docker Compose installed.

Prerequisites
Docker Engine (running)

Docker Compose (or Docker CLI with docker compose command)

Steps to Run Locally
Clone the Repository:

git clone [https://github.com/pratikjojode/agrilink-frontend.git](https://github.com/pratikjojode/agrilink-frontend.git)
cd agrilink-frontend

Build and Start the Containers:
Run the following command from the project root directory (where docker-compose.yml is located):

docker compose up --build

The --build flag ensures that the Docker image is built from the frontend/Dockerfile before starting the container.

If you just want to run it without rebuilding: docker compose up

Access the Application:
Once the service starts, the frontend will be accessible at:

🌐 http://localhost:5173

Stopping the Container:
To stop and remove the container in the background:

docker compose down

📦 Container Configuration
frontend/Dockerfile
This file defines how the application is built and packaged into a lightweight container using a Node 20 Alpine base image, followed by the build and preview commands.

Step

Purpose

FROM node:20-alpine

Uses a lightweight Node.js base for building.

RUN npm run build

Executes the frontend build process (e.g., creating the dist folder).

EXPOSE 4173

Opens the internal port where the application's preview server runs.

CMD ["npm", "run", "preview", ...]

Sets the default command to start the lightweight production server.

docker-compose.yml
This file orchestrates the local environment, mapping the local port 5173 to the container's internal port 4173.

version: "3.9"

services:
frontend:
build:
context: ./frontend
dockerfile: Dockerfile
container_name: agrilink-frontend
ports: - "5173:4173"
restart: always

☁️ Continuous Deployment (CI/CD) Pipeline
The deployment pipeline is fully automated using GitHub Actions, triggered on every push to the main branch. The workflow is located at .github/workflows/deploy.yml.

Workflow File: .github/workflows/frontend-deploy.yml
This workflow handles the building and distribution of the final container image:

Checkout & Build: Checks out the code and runs the local Node build steps.

Docker Build: Builds the final agrilink-frontend Docker image.

Push to Docker Hub: Logs into Docker Hub using repository secrets and pushes the tagged image (DOCKER_USERNAME/agrilink-frontend:latest).

Required GitHub Secrets
For the CI/CD pipeline to successfully push your image, the following secrets must be configured in your GitHub repository settings:

Secret Name

Purpose

DOCKER_USERNAME

Your Docker Hub username.

DOCKER_PASSWORD

Your Docker Hub access token or password (recommended: use a Personal Access Token).

⚙️ Production Deployment Script
The prd.sh script is designed to be executed directly on the production server to apply the latest changes.

Note: This script performs a fresh build on the production server. If you want a faster deployment, you should modify this script to pull the pre-built image from Docker Hub instead.

Usage: prd.sh
SSH into the Production Server.

Navigate to the Project Root (where the docker-compose.yml and project source code exist).

Run the Deployment Script:

chmod +x prd.sh # Make the script executable
./prd.sh

The script will:

Run docker-compose up -d --build.

Stop any old containers and start the new one in detached mode (-d).

The app will be accessible on the server's public IP at port 5173.
