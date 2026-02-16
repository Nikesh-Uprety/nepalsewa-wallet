# NepalSewa - Quick Start Guide 🚀

## What You've Got

A complete fintech security demonstration project with:
- ✅ Clean, professional digital wallet website
- ✅ 20+ intentional security vulnerabilities
- ✅ Automated security scanning (Gitleaks, Semgrep, Trivy, Checkov)
- ✅ Auto-fix capabilities via GitHub Actions
- ✅ CI/CD pipeline for GitHub Pages deployment

## 5-Minute Setup

### Step 1: Create GitHub Repository
1. Go to github.com and create new repository named `nepalsewa-wallet`
2. Make it **Public** (required for GitHub Pages)
3. Don't initialize with README

### Step 2: Upload Files
```bash
cd nepalsewa-wallet
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nepalsewa-wallet.git
git push -u origin main
```

### Step 3: Enable GitHub Actions
1. Go to Settings → Actions → General
2. Select "Read and write permissions"
3. Check "Allow GitHub Actions to create and approve pull requests"
4. Save

### Step 4: Enable GitHub Pages
1. Go to Settings → Pages
2. Source: Deploy from branch `gh-pages`
3. Save

### Step 5: Run Pipeline
1. Go to Actions tab
2. Click "Security Scan & Auto-Fix Pipeline"
3. Click "Run workflow"
4. Wait 2-3 minutes

### Step 6: View Results
Your website will be live at:
```
https://YOUR_USERNAME.github.io/nepalsewa-wallet/
```

## What Happens Automatically

1. **Security Scan** - Detects all vulnerabilities
2. **Auto-Fix** - Removes secrets, fixes code issues
3. **Deploy** - Publishes secure version to GitHub Pages

## File Overview

| File | Purpose |
|------|---------|
| `index.html` | Main website structure |
| `styles.css` | Professional styling (Nepal theme) |
| `script.js` | Vulnerable JavaScript (gets auto-fixed) |
| `.github/workflows/security-pipeline.yml` | CI/CD automation |
| `README.md` | Full documentation |
| `DEPLOYMENT_GUIDE.md` | Detailed deployment steps |
| `VULNERABILITIES.md` | Complete vulnerability catalog |
| `.gitleaks.toml` | Gitleaks configuration |
| `.semgrep.yml` | Semgrep rules |
| `.gitignore` | Git ignore rules |

## Key Features

### Website Features
- 🇳🇵 Nepal-themed design (crimson red colors)
- 💳 Digital wallet interface
- 🔒 Security research showcase
- 📱 Fully responsive
- 🎨 Clean, modern UI

### Security Features
- 🔍 4 security tools (Gitleaks, Semgrep, Trivy, Checkov)
- 🤖 Automated vulnerability detection
- ✨ One-click auto-remediation
- 📊 Compliance reporting
- 🔐 DevSecOps best practices

## Vulnerabilities Included

The vulnerable `script.js` contains:
1. Hardcoded API keys (Gitleaks detects)
2. AWS secrets (Gitleaks detects)
3. Database passwords (Gitleaks detects)
4. SQL injection (Semgrep detects)
5. XSS vulnerabilities (Semgrep detects)
6. Weak passwords (Semgrep detects)
7. Insecure crypto (Semgrep detects)
8. Private keys (Gitleaks detects)
9. ...and 12 more!

## Viewing Security Results

After pipeline runs:
1. **Actions tab** → View scan results
2. **Security tab** → See detected issues
3. **Commits** → Check auto-fix commit
4. **Website** → See secure version live

## Research Context

This project demonstrates:
> "Automating Regulatory Compliance in Nepal's Fintech Sector: An Artificial Intelligence-Driven DevSecOps Framework for Policy-as-Code Enforcement of Nepal Rastra Bank Guidelines"

Shows how fintech apps can automatically comply with NRB regulations through DevSecOps.

## Troubleshooting

**Pipeline fails?**
→ Check Actions permissions in Settings

**No gh-pages branch?**
→ Wait for first pipeline run to complete

**Website shows 404?**
→ Wait 2-3 minutes after deployment

**Want to see auto-fix again?**
→ Add a new hardcoded key and push

## Next Steps

1. ✅ Review security scan results
2. ✅ Check the auto-fix commit
3. ✅ Test the live website
4. ✅ Present your findings
5. ✅ Customize for your needs

## Need Help?

See the detailed guides:
- `README.md` - Complete project overview
- `DEPLOYMENT_GUIDE.md` - Step-by-step deployment
- `VULNERABILITIES.md` - All vulnerability details

---

**You're all set!** Upload to GitHub and watch the magic happen. 🎉
