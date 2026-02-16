# NepalSewa Digital Wallet 🇳🇵

A demonstration fintech digital wallet application showcasing automated security compliance and DevSecOps practices for Nepal Rastra Bank (NRB) regulatory requirements.

## 🎓 Research Project

**Title:** Automating Regulatory Compliance in Nepal's Fintech Sector: An Artificial Intelligence-Driven DevSecOps Framework for Policy-as-Code Enforcement of Nepal Rastra Bank Guidelines in Kathmandu Valley

This project demonstrates how modern DevSecOps tools can automatically detect and fix security vulnerabilities in fintech applications, ensuring compliance with regulatory standards.

## 🔒 Security Features

This repository intentionally contains security vulnerabilities (in the original code) to demonstrate the effectiveness of automated security scanning tools:

### Security Tools Used:
1. **Gitleaks** - Secret detection and prevention
2. **Semgrep** - Static code analysis for security patterns
3. **Checkov** - Infrastructure as Code security scanning
4. **Trivy** - Comprehensive vulnerability scanning

### Vulnerabilities Demonstrated:
- ❌ Hardcoded API keys and secrets
- ❌ SQL injection vulnerabilities
- ❌ Cross-Site Scripting (XSS) vulnerabilities
- ❌ Weak password validation
- ❌ Insecure random number generation
- ❌ Sensitive data in localStorage
- ❌ Dangerous eval() usage
- ❌ Insecure API authentication
- ❌ And more...

## 🚀 Getting Started

### Prerequisites
- Git
- GitHub account
- GitHub Pages enabled

### Setup Instructions

1. **Fork or Clone this Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/nepalsewa-wallet.git
   cd nepalsewa-wallet
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Click Save

3. **Enable GitHub Actions**
   - Go to repository Settings
   - Navigate to Actions → General
   - Under "Workflow permissions", select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"
   - Click Save

4. **Trigger the Security Pipeline**
   - Push any change to the main branch, OR
   - Go to Actions tab → Select "Security Scan & Auto-Fix Pipeline" → Click "Run workflow"

5. **View Results**
   - The pipeline will:
     - ✅ Scan for vulnerabilities using all 4 security tools
     - ✅ Automatically fix detected issues
     - ✅ Commit fixes back to the repository
     - ✅ Deploy the secure version to GitHub Pages

## 📊 CI/CD Pipeline Flow

```
┌─────────────────┐
│  Code Push      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Security Scan  │
│  - Gitleaks     │
│  - Semgrep      │
│  - Trivy        │
│  - Checkov      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Auto-Fix      │
│  Vulnerabilities│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Commit Fixes   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Deploy to Pages │
└─────────────────┘
```

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript

### DevSecOps Tools
- **GitHub Actions** - CI/CD automation
- **Gitleaks** - Secret scanning
- **Semgrep** - SAST (Static Application Security Testing)
- **Checkov** - IaC security
- **Trivy** - Vulnerability detection

### Deployment
- GitHub Pages

## 📁 Project Structure

```
nepalsewa-wallet/
├── index.html              # Main HTML file
├── styles.css              # Styling
├── script.js               # JavaScript (with intentional vulnerabilities)
├── .github/
│   └── workflows/
│       └── security-pipeline.yml  # CI/CD pipeline
└── README.md               # This file
```

## 🎯 Key Features

1. **Automated Security Scanning**
   - Runs on every push and pull request
   - Multiple security tools for comprehensive coverage
   - Results visible in GitHub Security tab

2. **Auto-Fix Capability**
   - Automatically remediates common vulnerabilities
   - Commits fixes back to repository
   - Maintains code functionality while improving security

3. **Compliance Reporting**
   - Generates security scan summaries
   - Tracks vulnerability remediation
   - Provides audit trail for regulatory compliance

4. **Continuous Deployment**
   - Automatic deployment to GitHub Pages
   - Only deploys after security checks pass
   - Zero-downtime updates

## 📈 Compliance with NRB Guidelines

This framework ensures compliance with Nepal Rastra Bank's fintech security requirements:

- ✅ Secure authentication mechanisms
- ✅ Data encryption in transit and at rest
- ✅ Regular security audits
- ✅ Vulnerability management
- ✅ Secure development practices
- ✅ Audit logging and monitoring

## 🔐 Security Best Practices Demonstrated

After auto-fix, the code implements:

- Environment variables for sensitive configuration
- HTTPS-only API communications
- Parameterized queries to prevent SQL injection
- Input sanitization to prevent XSS
- Strong password requirements
- Cryptographically secure random generation
- Secure session management
- Proper error handling without information disclosure

## 📝 License

This project is for educational and research purposes.

## 👨‍💻 Author

**Research Project**  
Kathmandu Valley, Nepal

## 🤝 Contributing

This is a research demonstration project. For academic collaboration or questions about the DevSecOps framework, please open an issue.

## 📞 Contact

For questions about this research project, please open an issue in the repository.

## ⚠️ Disclaimer

This project intentionally contains security vulnerabilities for educational purposes. The vulnerable version should NOT be used in production. Always use the auto-fixed version deployed to GitHub Pages.

---

**Note:** This is a demonstration project for academic research on automated security compliance in fintech applications. The vulnerabilities are intentional and serve to showcase the effectiveness of DevSecOps tools in detecting and remediating security issues.
