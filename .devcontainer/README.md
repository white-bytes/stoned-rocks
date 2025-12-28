# DevContainer Documentation

## Overview

This devcontainer provides a complete development environment for the Stoned Rock Astro project with PostgreSQL database support.

## Features

- **Node.js 20 LTS** with TypeScript support
- **PostgreSQL 16** database with Alpine Linux (lightweight)
- **VS Code Extensions** pre-configured for Astro, Tailwind, MDX, and more
- **Auto-formatting** on save with Prettier
- **Database health checks** ensuring DB is ready before app starts
- **Node modules volume** for faster installs and avoiding permission issues

## Getting Started

1. Open the project in VS Code
2. Click "Reopen in Container" when prompted (or use Command Palette: "Dev Containers: Reopen in Container")
3. Wait for the container to build and start
4. Dependencies will automatically install via `postCreateCommand`

## Services

### Application (app)
- **Port**: 4555 (Astro dev server)
- **Node Version**: 20 (LTS)
- **Working Directory**: /workspace
- **Environment Variables**:
  - `NODE_ENV=development`
  - `DATABASE_URL=postgresql://postgres:postgres@localhost:5432/db`

### Database (db)
- **Port**: 5432
- **Image**: PostgreSQL 16 Alpine
- **Default Database**: `db`
- **Username**: `postgres`
- **Password**: `postgres`
- **Health Check**: Automatic pg_isready checks every 10 seconds

## Available Scripts

Use the development helper script for common tasks:

```bash
# Check if services are running
./.devcontainer/dev-helper.sh check

# Install dependencies
./.devcontainer/dev-helper.sh install

# Start development server
./.devcontainer/dev-helper.sh dev

# Build project
./.devcontainer/dev-helper.sh build

# Run migrations
./.devcontainer/dev-helper.sh migrate
```

Or use yarn commands directly:

```bash
yarn dev      # Start development server
yarn build    # Build for production
yarn preview  # Preview production build
```

## Database Connection

Connect to PostgreSQL from within the container:

```bash
psql -h localhost -U postgres -d db
```

Connection string:
```
postgresql://postgres:postgres@localhost:5432/db
```

## VS Code Extensions Included

- Astro Language Support
- Tailwind CSS IntelliSense
- ESLint
- Prettier
- MDX Support
- Docker Support
- GitHub Copilot (if available)

## Editor Settings

- **Format on Save**: Enabled
- **ESLint Auto-fix**: Enabled on save
- **Default Formatter**: Prettier (except Astro files use Astro formatter)
- **Tailwind IntelliSense**: Configured for class regex patterns

## Volumes

- **postgres-data**: Persistent database storage
- **node_modules**: Separate volume for faster installs

## Customization

### Adding VS Code Extensions

Edit [.devcontainer/devcontainer.json](.devcontainer/devcontainer.json) and add extension IDs to the `extensions` array.

### Database Initialization

Add SQL scripts to [.devcontainer/init-scripts](.devcontainer/init-scripts/) directory. Scripts are executed in alphabetical order when the database is first created.

### Environment Variables

Add environment variables in [.devcontainer/compose.yml](.devcontainer/compose.yml) under the `app` service's `environment` section.

## Troubleshooting

### Container won't start
- Ensure Docker is running
- Check Docker logs: `docker compose logs`
- Rebuild container: "Dev Containers: Rebuild Container"

### Database connection fails
- Wait for health check to pass (may take 30-60 seconds on first start)
- Check logs: `docker compose logs db`

### Port already in use
- Change ports in devcontainer.json and compose.yml
- Stop conflicting services on host machine

### Slow performance
- Ensure Docker has enough resources allocated (Settings > Resources)
- Consider using Docker volumes instead of bind mounts for node_modules

## Additional Resources

- [Astro Documentation](https://astro.build/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Dev Containers Documentation](https://containers.dev/)
