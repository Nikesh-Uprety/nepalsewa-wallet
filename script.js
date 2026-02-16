// NepalSewa Digital Wallet - JavaScript

// VULNERABILITY 1: Hardcoded API Keys (Gitleaks will detect this)
const API_KEY = process.env.API_KEY || "YOUR_API_KEY_HERE";
const AWS_SECRET_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";
const DATABASE_PASSWORD = "admin123!@#Nepal";