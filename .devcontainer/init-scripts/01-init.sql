-- Initial database setup script
-- This script runs when the PostgreSQL container is first created

-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Example: Create a development schema
CREATE SCHEMA IF NOT EXISTS development;

-- Grant privileges to the postgres user
GRANT ALL PRIVILEGES ON SCHEMA development TO postgres;

-- Log initialization
DO $$
BEGIN
    RAISE NOTICE 'Database initialized successfully for stoned-rock project';
END $$;
