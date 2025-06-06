#!/bin/bash
# Non-interactive setup script for the Sovira Digital project
# Checks for Node.js and npm, then installs dependencies using npm ci.
set -e

# Ensure Node.js is installed
if ! command -v node >/dev/null 2>&1; then
    echo "Error: Node.js is not installed. Please install Node.js 16 or newer."
    exit 1
fi

# Ensure npm is installed
if ! command -v npm >/dev/null 2>&1; then
    echo "Error: npm is not installed. Please install Node.js which includes npm."
    exit 1
fi

# Install project dependencies
npm ci --no-fund --no-audit

echo "Setup complete. Run 'npm run dev' to start the development server."
