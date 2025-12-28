#!/bin/bash
# Development helper script for the devcontainer

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Stoned Rock Development Helper${NC}"
echo ""

# Function to check if PostgreSQL is ready
check_postgres() {
    echo -e "${YELLOW}Checking PostgreSQL connection...${NC}"
    if pg_isready -h localhost -p 5432 -U postgres; then
        echo -e "${GREEN}✓ PostgreSQL is ready${NC}"
        return 0
    else
        echo -e "${RED}✗ PostgreSQL is not ready${NC}"
        return 1
    fi
}

# Function to install dependencies
install_deps() {
    echo -e "${YELLOW}Installing dependencies...${NC}"
    yarn install
    echo -e "${GREEN}✓ Dependencies installed${NC}"
}

# Function to start development server
start_dev() {
    echo -e "${YELLOW}Starting Astro development server...${NC}"
    yarn dev
}

# Function to build the project
build_project() {
    echo -e "${YELLOW}Building project...${NC}"
    yarn build
    echo -e "${GREEN}✓ Build completed${NC}"
}

# Function to run database migrations (placeholder)
run_migrations() {
    echo -e "${YELLOW}Running database migrations...${NC}"
    # Add your migration commands here
    echo -e "${GREEN}✓ Migrations completed${NC}"
}

# Function to show help
show_help() {
    echo "Usage: ./dev-helper.sh [command]"
    echo ""
    echo "Commands:"
    echo "  check      - Check if all services are running"
    echo "  install    - Install project dependencies"
    echo "  dev        - Start development server"
    echo "  build      - Build the project"
    echo "  migrate    - Run database migrations"
    echo "  help       - Show this help message"
    echo ""
}

# Main command handler
case "${1:-help}" in
    check)
        check_postgres
        ;;
    install)
        install_deps
        ;;
    dev)
        check_postgres && start_dev
        ;;
    build)
        build_project
        ;;
    migrate)
        check_postgres && run_migrations
        ;;
    help|*)
        show_help
        ;;
esac
