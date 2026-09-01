#!/usr/bin/env bash

# GhIE AAMUSTED Student Chapter - Collaborator Onboarding Setup Script (Bash)

set -e

echo "========================================================="
echo " Ghana Institution of Engineering (GhIE) - AAMUSTED      "
echo " Collaborator Environment Setup Script                   "
echo "========================================================="
echo ""

# Step 1: Check Node.js
echo "[1/4] Checking Node.js environment..."
if ! command -v node &> /dev/null; then
    echo "  ✖ Error: Node.js is not installed. Please install Node.js (v18+) from https://nodejs.org/"
    exit 1
fi
echo "  ✓ Node.js detected: $(node -v)"

# Step 2: Check npm
echo "[2/4] Checking npm package manager..."
if ! command -v npm &> /dev/null; then
    echo "  ✖ Error: npm is not installed."
    exit 1
fi
echo "  ✓ npm detected: v$(npm -v)"

# Step 3: Setup .env.local
echo "[3/4] Checking environment configuration (.env.local)..."
if [ ! -f ".env.local" ]; then
    echo "NEXT_PUBLIC_APP_NAME=GhIE AAMUSTED Chapter" > .env.local
    echo "  ✓ Created default .env.local file"
else
    echo "  ✓ .env.local already exists"
fi

# Step 4: Install Dependencies & Run
echo "[4/4] Installing project dependencies (npm install)..."
npm install

echo ""
echo "========================================================="
echo "  ✓ Setup Complete! Starting Next.js Dev Server...       "
echo "  Open http://localhost:3000 in your browser            "
echo "========================================================="
echo ""
npm run dev
