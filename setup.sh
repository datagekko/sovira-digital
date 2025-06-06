#!/bin/bash
# Sovira Digital - Project Setup Script
# This script helps set up the development environment for the Sovira Digital project.
# It installs the required dependencies and prepares the project for development.

# Color codes for output formatting
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print formatted section headers
print_section() {
  echo -e "\n${BLUE}==>${NC} ${GREEN}$1${NC}"
}

# Print a success message
print_success() {
  echo -e "${GREEN}✓${NC} $1"
}

# Print a warning message
print_warning() {
  echo -e "${YELLOW}⚠${NC} $1"
}

# Print an error message
print_error() {
  echo -e "${RED}✗${NC} $1"
}

# Check if a command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Welcome message
echo -e "${GREEN}=======================================${NC}"
echo -e "${GREEN}  Sovira Digital - Setup Script        ${NC}"
echo -e "${GREEN}=======================================${NC}"
echo -e "This script will set up your development environment for the Sovira Digital project."
echo -e "It will check for required dependencies and install missing ones."
echo ""
echo -e "Press ${YELLOW}ENTER${NC} to continue or ${YELLOW}CTRL+C${NC} to cancel..."
read -r

# Check operating system
print_section "Checking operating system"
if [[ "$OSTYPE" == "darwin"* ]]; then
  print_success "macOS detected"
  OS="mac"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
  print_success "Linux detected"
  OS="linux"
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
  print_success "Windows detected"
  OS="windows"
  print_warning "For Windows users: This script works best in Git Bash or WSL"
else
  print_warning "Unknown OS: $OSTYPE. Will attempt to continue anyway."
  OS="unknown"
fi

# Check for Git
print_section "Checking for Git"
if command_exists git; then
  GIT_VERSION=$(git --version | cut -d ' ' -f 3)
  print_success "Git is installed (version $GIT_VERSION)"
else
  print_error "Git is not installed!"
  echo "Please install Git before continuing:"
  echo "  - macOS: brew install git"
  echo "  - Linux: sudo apt-get install git"
  echo "  - Windows: https://git-scm.com/download/win"
  exit 1
fi

# Check for Node.js
print_section "Checking for Node.js"
if command_exists node; then
  NODE_VERSION=$(node --version)
  print_success "Node.js is installed (version $NODE_VERSION)"
  
  # Check Node.js version (require 16.x or higher)
  NODE_MAJOR_VERSION=$(echo $NODE_VERSION | cut -d '.' -f 1 | tr -d 'v')
  if [ "$NODE_MAJOR_VERSION" -lt 16 ]; then
    print_warning "Node.js version $NODE_VERSION may be too old. Sovira recommends version 16.x or higher."
    echo "Would you like to continue anyway? (y/n)"
    read -r response
    if [[ "$response" != "y" && "$response" != "Y" ]]; then
      exit 1
    fi
  fi
else
  print_error "Node.js is not installed!"
  echo "Please install Node.js before continuing:"
  echo "  - macOS: brew install node"
  echo "  - Linux: sudo apt-get install nodejs npm"
  echo "  - Windows: https://nodejs.org/en/download/"
  exit 1
fi

# Check for npm
print_section "Checking for npm"
if command_exists npm; then
  NPM_VERSION=$(npm --version)
  print_success "npm is installed (version $NPM_VERSION)"
else
  print_error "npm is not installed!"
  echo "npm should be installed with Node.js. Please check your installation."
  exit 1
fi

# Clone the repository if it doesn't exist
print_section "Setting up project repository"
if [ ! -d "sovira-digital" ]; then
  echo "Cloning the Sovira Digital repository..."
  git clone https://github.com/datagekko/sovira-digital.git
  if [ $? -ne 0 ]; then
    print_error "Failed to clone the repository. Please check your internet connection and GitHub access."
    exit 1
  fi
  print_success "Repository cloned successfully"
  cd sovira-digital
else
  print_warning "Directory 'sovira-digital' already exists"
  echo "Would you like to update it? (This will fetch the latest changes) (y/n)"
  read -r response
  if [[ "$response" == "y" || "$response" == "Y" ]]; then
    cd sovira-digital
    git fetch
    git pull
    print_success "Repository updated successfully"
  else
    cd sovira-digital
    print_warning "Skipping repository update"
  fi
fi

# Install dependencies
print_section "Installing project dependencies"
echo "This may take a few minutes..."
npm install
if [ $? -ne 0 ]; then
  print_error "Failed to install dependencies. Please check the error messages above."
  exit 1
fi
print_success "Dependencies installed successfully"

# Check for missing font files (known issue)
print_section "Checking font files"
if [ ! -d "public/fonts" ]; then
  print_warning "Font directory not found. Creating directory..."
  mkdir -p public/fonts
  print_success "Created directory 'public/fonts'"
else
  print_success "Font directory exists"
fi

# Explain the font warnings users might see
echo "Note: You might see 404 errors for font files in the console:"
echo "  - GET /fonts/NeueHaasDisplay-Bold.woff2 404"
echo "  - GET /fonts/Spectral-Italic.woff2 404"
echo "This is expected and non-blocking as fallback fonts are configured."
echo "When actual font files are available, add them to the 'public/fonts/' directory."

# Check for any untracked files that might need attention
print_section "Project status"
git status

# Start the development server
print_section "Ready to start development server"
echo "The setup is complete! You can now start the development server with:"
echo -e "  ${GREEN}npm run dev${NC}"
echo ""
echo "This will start the Next.js development server with Turbopack."
echo "You can access the site at:"
echo "  - Local:   http://localhost:3000"
echo "  - Network: http://<your-ip-address>:3000"
echo ""
echo "Would you like to start the development server now? (y/n)"
read -r response
if [[ "$response" == "y" || "$response" == "Y" ]]; then
  npm run dev
else
  echo "You can start the server later by running 'npm run dev' in this directory."
fi

# Final instructions
print_section "Documentation and resources"
echo "For more information, check out these files:"
echo "  - cursor-rules/developer-onboarding.mdc - Comprehensive onboarding guide"
echo "  - cursor-rules/sovira-styling-conventions.mdc - Styling guidelines"
echo "  - cursor-rules/quick-reference.mdc - Quick reference for common tasks"
echo ""
echo -e "${GREEN}=======================================${NC}"
echo -e "${GREEN}  Setup complete! Happy coding!        ${NC}"
echo -e "${GREEN}=======================================${NC}" 