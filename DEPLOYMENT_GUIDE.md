# NepalSewa Deployment Guide 🚀

Complete step-by-step guide to deploy the NepalSewa Digital Wallet with automated security scanning.

## Prerequisites Checklist

- [ ] GitHub account
- [ ] Git installed on your computer
- [ ] Basic knowledge of Git commands

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon → **"New repository"**
3. Repository details:
   - **Name:** `nepalsewa-wallet` (or your preferred name)
   - **Description:** "NepalSewa Digital Wallet - DevSecOps Security Demo"
   - **Visibility:** Public (required for GitHub Pages)
   - **Initialize:** Do NOT check "Add README" (we already have one)
4. Click **"Create repository"**

## Step 2: Upload Code to GitHub

### Option A: Using Git Command Line

```bash
# Navigate to the project folder
cd /path/to/nepalsewa-wallet

# Initialize Git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: NepalSewa Digital Wallet with security vulnerabilities"

# Add remote repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/nepalsewa-wallet.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option B: Using GitHub Desktop

1. Open GitHub Desktop
2. Click **"Add"** → **"Add Existing Repository"**
3. Select your project folder
4. Click **"Publish repository"**
5. Confirm settings and publish

### Option C: Upload via GitHub Web Interface

1. Go to your repository page
2. Click **"uploading an existing file"**
3. Drag and drop all project files
4. Click **"Commit changes"**

## Step 3: Configure GitHub Actions

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Navigate to **"Actions"** → **"General"**
4. Under **"Workflow permissions"**:
   - ✅ Select **"Read and write permissions"**
   - ✅ Check **"Allow GitHub Actions to create and approve pull requests"**
5. Click **"Save"**

## Step 4: Enable GitHub Pages

1. In repository **"Settings"**
2. Navigate to **"Pages"** (left sidebar)
3. Under **"Source"**:
   - Branch: Select **`gh-pages`** (it will be created automatically)
   - Folder: **`/ (root)`**
4. Click **"Save"**
5. Note: You may see "Branch not found" - this is normal before first deployment

## Step 5: Run the Security Pipeline

### Automatic Trigger (Push)
The pipeline runs automatically when you push to the main branch.

### Manual Trigger
1. Go to **"Actions"** tab
2. Click **"Security Scan & Auto-Fix Pipeline"**
3. Click **"Run workflow"** button (right side)
4. Select branch: **`main`**
5. Click **"Run workflow"**

## Step 6: Monitor Pipeline Execution

1. In the **"Actions"** tab, click on the running workflow
2. You'll see three jobs:
   - **Security Scanning** - Runs Gitleaks, Semgrep, Trivy, Checkov
   - **Auto-Fix Vulnerabilities** - Fixes detected issues
   - **Deploy to GitHub Pages** - Deploys secure version

3. Click on each job to see detailed logs

### Expected Results:

**Security Scan Job:**
```
✅ Gitleaks found: 15+ hardcoded secrets
✅ Semgrep found: 10+ code vulnerabilities
✅ Trivy found: Potential risks
✅ Checkov scanned GitHub Actions
```

**Auto-Fix Job:**
```
✅ Removed hardcoded credentials
✅ Fixed SQL injection vulnerabilities
✅ Prevented XSS attacks
✅ Secured authentication
✅ Committed fixes to repository
```

**Deploy Job:**
```
✅ Deployed to GitHub Pages
✅ Website is live!
```

## Step 7: Access Your Website

After successful deployment:

1. Go to **"Settings"** → **"Pages"**
2. You'll see: **"Your site is live at https://YOUR_USERNAME.github.io/nepalsewa-wallet/"**
3. Click the URL to view your website
4. Note: First deployment may take 2-3 minutes

## Step 8: View Security Results

### Security Tab
1. Go to **"Security"** tab in your repository
2. Click **"Code scanning"**
3. View all detected vulnerabilities
4. See which ones were auto-fixed

### Actions Summary
1. Go to **"Actions"** → Select completed workflow
2. Scroll down to **"Summary"**
3. View security scan report

## Verification Checklist

After deployment, verify:

- [ ] Website is accessible at GitHub Pages URL
- [ ] Homepage loads correctly with all sections
- [ ] Login form is functional
- [ ] All vulnerabilities were detected
- [ ] Auto-fix commit appears in repository
- [ ] Security tab shows scan results
- [ ] `gh-pages` branch was created

## Understanding the Pipeline Flow

```
1. CODE PUSH
   ↓
2. SECURITY SCAN (All Tools Run)
   - Gitleaks detects: API keys, passwords, tokens
   - Semgrep detects: SQL injection, XSS, eval()
   - Trivy detects: General vulnerabilities  
   - Checkov detects: IaC security issues
   ↓
3. AUTO-FIX
   - Removes hardcoded secrets
   - Fixes vulnerable code patterns
   - Implements security best practices
   ↓
4. COMMIT FIXES
   - Creates new commit with fixes
   - Pushes to main branch
   ↓
5. DEPLOY
   - Deploys secure version to gh-pages
   - Website goes live
```

## Troubleshooting

### Issue: "Branch gh-pages not found"
**Solution:** This is normal before first deployment. Run the workflow once, and the branch will be created automatically.

### Issue: "Workflow permissions error"
**Solution:** 
1. Settings → Actions → General
2. Enable "Read and write permissions"
3. Re-run the workflow

### Issue: "Website shows 404"
**Solution:**
1. Wait 2-3 minutes after first deployment
2. Check Settings → Pages is configured correctly
3. Verify gh-pages branch exists

### Issue: "Security scans failing"
**Solution:** This is expected! The vulnerabilities are intentional. The auto-fix job will correct them.

### Issue: "Deploy job skipped"
**Solution:** Deploy only runs on main/master branch. Ensure you pushed to the correct branch.

## Customization

### Change Website Title
Edit `index.html`, line 6:
```html
<title>Your Custom Title</title>
```

### Modify Color Scheme
Edit `styles.css`, change the colors:
```css
/* Nepal flag red */
background: linear-gradient(135deg, #DC143C 0%, #8B0000 100%);

/* Change to your preferred colors */
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
```

### Add More Features
Edit the features section in `index.html` to add/modify features.

## Testing the Auto-Fix

Want to see the auto-fix in action again?

1. Edit `script.js` and add a new hardcoded secret:
```javascript
const TEST_KEY = "sk_test_1234567890abcdefghijklmnop";
```

2. Commit and push:
```bash
git add script.js
git commit -m "Test: Add vulnerability"
git push
```

3. Watch the pipeline detect and fix it automatically!

## Security Reports

After each run, you can:

1. Download SARIF files from Actions artifacts
2. View detailed findings in Security tab
3. Track remediation history in commits
4. Generate compliance reports

## Project Structure Reference

```
nepalsewa-wallet/
├── index.html                    # Main website
├── styles.css                    # Styling
├── script.js                     # JavaScript (vulnerable → fixed)
├── README.md                     # Project documentation
├── DEPLOYMENT_GUIDE.md          # This file
├── .gitignore                   # Git ignore rules
├── .gitleaks.toml              # Gitleaks config
├── .semgrep.yml                # Semgrep config
└── .github/
    └── workflows/
        └── security-pipeline.yml # CI/CD pipeline
```

## Next Steps

After successful deployment:

1. ✅ Review the security scan results
2. ✅ Examine the auto-fix changes in the commit history
3. ✅ Test the website functionality
4. ✅ Present your research findings
5. ✅ Document compliance with NRB guidelines

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [Gitleaks Documentation](https://github.com/gitleaks/gitleaks)
- [Semgrep Documentation](https://semgrep.dev/docs/)
- [Trivy Documentation](https://trivy.dev/)
- [Checkov Documentation](https://www.checkov.io/)

## Support

For issues or questions:
1. Check the Troubleshooting section above
2. Review GitHub Actions logs
3. Open an issue in the repository

---

**Congratulations!** 🎉 You've successfully deployed NepalSewa with automated security compliance!

This demonstrates how modern DevSecOps practices can ensure fintech applications meet regulatory requirements automatically.
