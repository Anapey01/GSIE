# GhIE AAMUSTED Student Chapter - Collaborator Onboarding Setup Script (Windows PowerShell)

Write-Host "=========================================================" -ForegroundColor Cyan
Write-Host " Ghana Institution of Engineering (GhIE) - AAMUSTED      " -ForegroundColor Yellow
Write-Host " Collaborator Environment Setup Script                   " -ForegroundColor Cyan
Write-Host "=========================================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check Node.js installation
Write-Host "[1/4] Checking Node.js environment..." -ForegroundColor Green
try {
    $nodeVersion = node -v
    Write-Host "  ✓ Node.js detected: $nodeVersion" -ForegroundColor Gray
} catch {
    Write-Host "  ✖ Error: Node.js is not installed or not found on PATH." -ForegroundColor Red
    Write-Host "    Please download & install Node.js (v18+) from https://nodejs.org/" -ForegroundColor Red
    Exit 1
}

# Step 2: Check npm installation
Write-Host "[2/4] Checking npm package manager..." -ForegroundColor Green
try {
    $npmVersion = npm -v
    Write-Host "  ✓ npm detected: v$npmVersion" -ForegroundColor Gray
} catch {
    Write-Host "  ✖ Error: npm is not installed." -ForegroundColor Red
    Exit 1
}

# Step 3: Create .env.local if missing
Write-Host "[3/4] Checking environment configuration (.env.local)..." -ForegroundColor Green
if (-not (Test-Path ".env.local")) {
    Write-Host "  Creating default .env.local file..." -ForegroundColor Gray
    "NEXT_PUBLIC_APP_NAME=GhIE AAMUSTED Chapter" | Out-File -Encoding utf8 .env.local
    Write-Host "  ✓ Created .env.local" -ForegroundColor Gray
} else {
    Write-Host "  ✓ .env.local already exists" -ForegroundColor Gray
}

# Step 4: Install Dependencies
Write-Host "[4/4] Installing project dependencies (npm install)..." -ForegroundColor Green
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=========================================================" -ForegroundColor Cyan
    Write-Host "  ✓ Setup Complete! Starting Next.js Dev Server...       " -ForegroundColor Yellow
    Write-Host "  Open http://localhost:3000 in your browser            " -ForegroundColor Cyan
    Write-Host "=========================================================" -ForegroundColor Cyan
    Write-Host ""
    npm run dev
} else {
    Write-Host "  ✖ Dependency installation failed. Please check error log above." -ForegroundColor Red
}
