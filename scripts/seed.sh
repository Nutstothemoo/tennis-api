#!/bin/bash

echo "Running database migrations..."
docker-compose exec postgres psql -U postgres -d tennis -f /app/src/migrations/V1__init.sql

echo "Seeding database with initial data..."
docker-compose exec postgres psql -U postgres -d tennis -f /app/src/migrations/V2__seed_data.sql

echo "Database setup and seeding completed successfully!"
