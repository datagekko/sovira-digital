#!/bin/bash
# Non-interactive setup script for the Sovira Digital project
# Checks for Node.js and npm, then installs dependencies using npm ci.
set -e

# Ensure Node.js is installed, install automatically if missing
if ! command -v node >/dev/null 2>&1; then
    echo "Node.js not found. Installing Node.js 18..."

    OS_NAME="$(uname)"
    case "$OS_NAME" in
        Linux)
            curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - && \
            sudo apt-get install -y nodejs
            ;;
        Darwin)
            if command -v brew >/dev/null 2>&1; then
                brew install node@18
            else
                echo "Homebrew not found. Please install Node.js 18 manually." >&2
                exit 1
            fi
            ;;
        *)
            echo "Unsupported OS: $OS_NAME. Please install Node.js 18 manually." >&2
            exit 1
            ;;
    esac
fi

# Ensure npm is installed
if ! command -v npm >/dev/null 2>&1; then
    echo "Error: npm is not installed. Please ensure Node.js 18 is installed correctly." >&2
    exit 1
fi

# Install project dependencies
npm ci --no-fund --no-audit

echo "Setup complete. Run 'npm run dev' to start the development server."
