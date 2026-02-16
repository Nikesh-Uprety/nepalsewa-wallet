# Security Vulnerabilities Documentation 🔒

This document lists all intentional security vulnerabilities in the NepalSewa project and how they are detected and fixed.

## Overview

The `script.js` file contains **20+ intentional security vulnerabilities** that demonstrate common security issues in fintech applications. These vulnerabilities are detected by industry-standard security tools and automatically remediated.

---

## Vulnerability Catalog

### 1. Hardcoded API Keys
**Category:** Secrets Management  
**Severity:** CRITICAL  
**CWE:** CWE-798 (Use of Hard-coded Credentials)

**Vulnerable Code:**
```javascript
const API_KEY = "sk_live_51MqP9xHzKj8vW2NmXyZ3Qr4Tb5Vc6Wd7Xe8Yf9Zg0Ah1Bi2Cj3Dk4El5Fm6Gn7Ho8Ip9Jq0";
```

**Detected By:** Gitleaks  
**Risk:** Exposes sensitive API credentials that can be used to access payment systems

**Fix:**
```javascript
const API_KEY = process.env.API_KEY || '';
```

---

### 2. AWS Secret Keys
**Category:** Secrets Management  
**Severity:** CRITICAL  
**CWE:** CWE-798

**Vulnerable Code:**
```javascript
const AWS_SECRET_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";
const awsConfig = {
    accessKeyId: "AKIAIOSFODNN7EXAMPLE",
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
};
```

**Detected By:** Gitleaks, Semgrep  
**Risk:** Allows unauthorized access to AWS resources and services

**Fix:** Use environment variables and AWS IAM roles

---

### 3. Database Credentials
**Category:** Secrets Management  
**Severity:** CRITICAL  
**CWE:** CWE-798

**Vulnerable Code:**
```javascript
const DATABASE_PASSWORD = "admin123!@#Nepal";
const dbConfig = {
    user: "root",
    password: "Nepal@2024!Database"
};
```

**Detected By:** Gitleaks, Semgrep  
**Risk:** Provides direct access to the database

**Fix:** Use environment variables and secure credential management

---

### 4. JWT Secret Exposure
**Category:** Secrets Management  
**Severity:** CRITICAL  
**CWE:** CWE-798

**Vulnerable Code:**
```javascript
const JWT_SECRET = "my_super_secret_jwt_key_12345_nepal_sewa_wallet";
```

**Detected By:** Gitleaks  
**Risk:** Allows token forgery and unauthorized access

**Fix:** Use strong, randomly generated secrets from environment variables

---

### 5. SQL Injection
**Category:** Injection  
**Severity:** CRITICAL  
**CWE:** CWE-89 (SQL Injection)

**Vulnerable Code:**
```javascript
function getUserData(username) {
    const query = "SELECT * FROM users WHERE username = '" + username + "'";
    return query;
}
```

**Detected By:** Semgrep  
**Risk:** Attackers can execute arbitrary SQL commands

**Fix:** Use parameterized queries or ORM
```javascript
function getUserData(username) {
    // Use parameterized queries
    return db.query('SELECT * FROM users WHERE username = ?', [username]);
}
```

---

### 6. Cross-Site Scripting (XSS)
**Category:** Injection  
**Severity:** HIGH  
**CWE:** CWE-79 (Cross-site Scripting)

**Vulnerable Code:**
```javascript
function displayMessage(userInput) {
    document.getElementById('message').innerHTML = userInput;
}
```

**Detected By:** Semgrep  
**Risk:** Allows execution of malicious scripts in user browsers

**Fix:** Use textContent instead of innerHTML
```javascript
function displayMessage(userInput) {
    document.getElementById('message').textContent = userInput;
}
```

---

### 7. Insecure HTTP Communication
**Category:** Cryptography  
**Severity:** HIGH  
**CWE:** CWE-319 (Cleartext Transmission)

**Vulnerable Code:**
```javascript
const API_BASE_URL = "http://api.nepalsewa.com";
```

**Detected By:** Semgrep, Manual Review  
**Risk:** Data transmitted in cleartext can be intercepted

**Fix:**
```javascript
const API_BASE_URL = "https://api.nepalsewa.com";
```

---

### 8. Weak Password Validation
**Category:** Authentication  
**Severity:** MEDIUM  
**CWE:** CWE-521 (Weak Password Requirements)

**Vulnerable Code:**
```javascript
function validatePassword(password) {
    return password.length >= 6;
}
```

**Detected By:** Semgrep, Manual Review  
**Risk:** Allows weak passwords that are easy to crack

**Fix:**
```javascript
function validatePassword(password) {
    const minLength = 12;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    
    return password.length >= minLength && 
           hasUpperCase && hasLowerCase && 
           hasNumbers && hasSpecialChar;
}
```

---

### 9. Insecure Random Number Generation
**Category:** Cryptography  
**Severity:** MEDIUM  
**CWE:** CWE-338 (Weak PRNG)

**Vulnerable Code:**
```javascript
function generateToken() {
    return Math.random().toString(36).substring(2);
}
```

**Detected By:** Semgrep  
**Risk:** Predictable tokens can be guessed by attackers

**Fix:**
```javascript
function generateToken() {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}
```

---

### 10. Sensitive Data in localStorage
**Category:** Data Exposure  
**Severity:** MEDIUM  
**CWE:** CWE-312 (Cleartext Storage)

**Vulnerable Code:**
```javascript
localStorage.setItem('userPassword', userData.password);
localStorage.setItem('creditCard', userData.creditCard);
```

**Detected By:** Semgrep  
**Risk:** Sensitive data accessible to JavaScript, vulnerable to XSS

**Fix:** Never store sensitive data client-side; use secure session tokens

---

### 11. Dangerous eval() Usage
**Category:** Code Injection  
**Severity:** CRITICAL  
**CWE:** CWE-95 (Eval Injection)

**Vulnerable Code:**
```javascript
function executeCommand(command) {
    eval(command);
}
```

**Detected By:** Semgrep  
**Risk:** Allows arbitrary code execution

**Fix:** Remove eval() entirely; use specific functions

---

### 12. Credentials in URL Parameters
**Category:** Information Disclosure  
**Severity:** HIGH  
**CWE:** CWE-598 (GET Request with Sensitive Info)

**Vulnerable Code:**
```javascript
const url = `${API_BASE_URL}/auth?username=${username}&password=${password}&api_key=${API_KEY}`;
```

**Detected By:** Semgrep  
**Risk:** Credentials logged in server logs and browser history

**Fix:** Use POST requests with credentials in request body

---

### 13. Disabled SSL Verification
**Category:** Cryptography  
**Severity:** HIGH  
**CWE:** CWE-295 (Certificate Validation)

**Vulnerable Code:**
```javascript
const config = {
    ssl_verify: false
};
```

**Detected By:** Semgrep, Checkov  
**Risk:** Vulnerable to man-in-the-middle attacks

**Fix:**
```javascript
const config = {
    ssl_verify: true
};
```

---

### 14. Wildcard CORS Configuration
**Category:** Access Control  
**Severity:** MEDIUM  
**CWE:** CWE-942 (Overly Permissive CORS)

**Vulnerable Code:**
```javascript
const corsConfig = {
    origin: '*',
    credentials: true
};
```

**Detected By:** Semgrep  
**Risk:** Allows any website to make authenticated requests

**Fix:**
```javascript
const corsConfig = {
    origin: 'https://nepalsewa.com',
    credentials: true
};
```

---

### 15. Base64 as Encryption
**Category:** Cryptography  
**Severity:** MEDIUM  
**CWE:** CWE-327 (Broken Crypto)

**Vulnerable Code:**
```javascript
function encryptData(data) {
    let encrypted = btoa(data);
    return encrypted;
}
```

**Detected By:** Semgrep  
**Risk:** Base64 is encoding, not encryption; easily reversible

**Fix:** Use Web Crypto API with AES-GCM or similar

---

### 16. Information Disclosure in Errors
**Category:** Information Disclosure  
**Severity:** LOW  
**CWE:** CWE-209 (Error Message Info Leak)

**Vulnerable Code:**
```javascript
function handleError(error) {
    console.error("Database connection failed:", dbConfig);
    alert("Error: " + error.stack);
}
```

**Detected By:** Manual Review  
**Risk:** Exposes internal system details to attackers

**Fix:** Log detailed errors server-side; show generic messages to users

---

### 17. Command Injection Risk
**Category:** Injection  
**Severity:** CRITICAL  
**CWE:** CWE-78 (OS Command Injection)

**Vulnerable Code:**
```javascript
function processPayment(amount, description) {
    const command = `process_payment --amount ${amount} --desc "${description}"`;
    executeCommand(command);
}
```

**Detected By:** Semgrep  
**Risk:** Allows arbitrary command execution

**Fix:** Validate and sanitize all inputs; use proper APIs

---

### 18. Private Key Exposure
**Category:** Secrets Management  
**Severity:** CRITICAL  
**CWE:** CWE-798

**Vulnerable Code:**
```javascript
const PRIVATE_KEY = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA1234567890abcdefghijklmnop...
-----END RSA PRIVATE KEY-----`;
```

**Detected By:** Gitleaks  
**Risk:** Complete compromise of cryptographic security

**Fix:** Never commit private keys; use secure key management systems

---

### 19. Logging Sensitive Data
**Category:** Information Disclosure  
**Severity:** MEDIUM  
**CWE:** CWE-532 (Insertion of Sensitive Info into Log)

**Vulnerable Code:**
```javascript
console.log('API Key:', API_KEY);
```

**Detected By:** Semgrep  
**Risk:** Sensitive data in logs accessible to unauthorized users

**Fix:** Never log sensitive information

---

### 20. Plaintext Password Storage
**Category:** Cryptography  
**Severity:** CRITICAL  
**CWE:** CWE-256 (Plaintext Storage of Password)

**Vulnerable Code:**
```javascript
const userData = {
    password: password
};
storeUserSession(userData);
```

**Detected By:** Semgrep  
**Risk:** Passwords compromised if storage is breached

**Fix:** Never store passwords; use secure session tokens

---

## Detection Summary

| Tool | Vulnerabilities Detected | Type |
|------|-------------------------|------|
| **Gitleaks** | 6+ | Secrets, Keys, Credentials |
| **Semgrep** | 15+ | Code Patterns, Logic Flaws |
| **Trivy** | Various | Dependencies, Configs |
| **Checkov** | 2+ | IaC Security |

---

## Nepal Rastra Bank (NRB) Compliance

These vulnerabilities violate several NRB guidelines for fintech security:

1. ❌ **Data Protection:** Storing sensitive data insecurely
2. ❌ **Authentication:** Weak password requirements
3. ❌ **Encryption:** Insecure communication (HTTP)
4. ❌ **Access Control:** Overly permissive CORS
5. ❌ **Audit Logging:** Logging sensitive information
6. ❌ **Secure Development:** Multiple code-level vulnerabilities

After auto-fix, the application complies with:

1. ✅ **Secure Authentication:** Strong password requirements
2. ✅ **Encrypted Communication:** HTTPS-only
3. ✅ **Secrets Management:** Environment variables
4. ✅ **Input Validation:** SQL injection prevention
5. ✅ **Output Encoding:** XSS prevention
6. ✅ **Secure Sessions:** Proper token management

---

## Testing Methodology

Each vulnerability can be tested as follows:

### Manual Testing
1. Review code for hardcoded secrets
2. Attempt SQL injection attacks
3. Test XSS payloads
4. Verify HTTPS enforcement

### Automated Testing
1. Run Gitleaks: `gitleaks detect --source .`
2. Run Semgrep: `semgrep --config auto .`
3. Run Trivy: `trivy fs .`
4. Run Checkov: `checkov -d .`

---

## Remediation Statistics

- **Total Vulnerabilities:** 20+
- **Critical:** 10
- **High:** 5
- **Medium:** 5
- **Auto-Fixed:** 100%
- **Time to Fix:** < 30 seconds (automated)

---

## Educational Value

This project demonstrates:

1. ✅ Common fintech security vulnerabilities
2. ✅ Effectiveness of security scanning tools
3. ✅ Automated remediation capabilities
4. ✅ DevSecOps best practices
5. ✅ Regulatory compliance automation

---

**Note:** All vulnerabilities are intentional for educational purposes. Never deploy vulnerable code to production.
