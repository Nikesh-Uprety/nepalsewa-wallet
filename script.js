// NepalSewa Digital Wallet - JavaScript

// VULNERABILITY 1: Hardcoded API Keys (Gitleaks will detect this)
const API_KEY = process.env.API_KEY || "";
const AWS_SECRET_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";
const DATABASE_PASSWORD = "admin123!@#Nepal";

// VULNERABILITY 2: Hardcoded JWT Secret (Gitleaks will detect this)
const JWT_SECRET = "my_super_secret_jwt_key_12345_nepal_sewa_wallet";

// VULNERABILITY 3: Insecure API endpoint (Semgrep might flag this)
const API_BASE_URL = "http://api.nepalsewa.com"; // Using HTTP instead of HTTPS

// VULNERABILITY 4: SQL Injection vulnerability (Semgrep will detect this)
function getUserData(username) {
    // This is vulnerable to SQL injection
    const query = "SELECT * FROM users WHERE username = '" + username + "'";
    console.log("Executing query: " + query);
    return query;
}

// VULNERABILITY 5: XSS vulnerability (Semgrep will detect this)
function displayMessage(userInput) {
    // Directly injecting user input into DOM without sanitization
    document.getElementById('message').innerHTML = userInput;
}

// VULNERABILITY 6: Weak password validation
function validatePassword(password) {
    // Weak validation - only checks length
    return password.length >= 6;
}

// VULNERABILITY 7: Insecure random number generation (Semgrep will detect this)
function generateToken() {
    return Math.random().toString(36).substring(2);
}

// VULNERABILITY 8: Sensitive data in localStorage (Semgrep will detect this)
function storeUserSession(userData) {
    localStorage.setItem('userToken', userData.token);
    localStorage.setItem('userPassword', userData.password); // Never store passwords!
    localStorage.setItem('creditCard', userData.creditCard);
}

// VULNERABILITY 9: eval() usage (Semgrep will detect this)
function executeCommand(command) {
    eval(command); // Dangerous use of eval
}

// Login function
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    
    // VULNERABILITY 10: Weak authentication check
    if (username && password) {
        // Simulated authentication
        messageDiv.className = 'message success';
        messageDiv.textContent = 'Login successful! Welcome to NepalSewa';
        
        // VULNERABILITY 11: Storing sensitive data
        const userData = {
            username: username,
            password: password, // Never store plain text passwords!
            token: generateToken(),
            apiKey: API_KEY
        };
        
        // Store in localStorage (vulnerable)
        storeUserSession(userData);
        
        // Simulate API call with hardcoded credentials
        authenticateUser(username, password);
    } else {
        messageDiv.className = 'message error';
        messageDiv.textContent = 'Please enter valid credentials';
    }
}

// VULNERABILITY 12: Insecure API call with credentials in URL
function authenticateUser(username, password) {
    // NEVER put credentials in URL parameters
    const url = `${API_BASE_URL}/auth?username=${username}&password=${password}&api_key=${API_KEY}`;
    
    console.log('Authenticating user:', url);
    
    // Simulated fetch (would be vulnerable in real implementation)
    // fetch(url) - credentials exposed in URL
}

// VULNERABILITY 13: Disabled SSL verification (conceptual)
const config = {
    ssl_verify: false, // Never disable SSL verification
    allow_redirects: true,
    timeout: 30000
};

// VULNERABILITY 14: Exposed AWS credentials
const awsConfig = {
    accessKeyId: "AKIAIOSFODNN7EXAMPLE",
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    region: "ap-south-1"
};

// VULNERABILITY 15: Hardcoded database credentials
const dbConfig = {
    host: "localhost",
    user: "root",
    password: "Nepal@2024!Database",
    database: "nepalsewa_wallet",
    port: 3306
};

// Show login modal
function showLogin() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

// VULNERABILITY 16: CORS misconfiguration (conceptual)
const corsConfig = {
    origin: '*', // Allowing all origins is insecure
    credentials: true
};

// VULNERABILITY 17: Insecure cryptographic algorithm
function encryptData(data) {
    // Using deprecated/weak encryption
    let encrypted = btoa(data); // Base64 is NOT encryption!
    return encrypted;
}

// VULNERABILITY 18: Information disclosure in error messages
function handleError(error) {
    console.error("Database connection failed:", dbConfig); // Exposing sensitive config
    alert("Error: " + error.stack); // Exposing stack trace to user
}

// VULNERABILITY 19: Command injection possibility
function processPayment(amount, description) {
    const command = `process_payment --amount ${amount} --desc "${description}"`;
    executeCommand(command);
}

// VULNERABILITY 20: Private key exposure
const PRIVATE_KEY = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN
OPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQR
-----END RSA PRIVATE KEY-----`;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    console.log('NepalSewa Digital Wallet initialized');
    console.log('API Key:', API_KEY); // VULNERABILITY: Logging sensitive data
    console.log('Environment:', 'production'); // Using production with test keys
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
