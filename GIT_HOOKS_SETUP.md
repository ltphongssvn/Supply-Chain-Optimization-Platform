# ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/GIT_HOOKS_SETUP.md

# Git Hooks Setup for Supply Chain Optimization Platform

## Overview
Automated Git hooks to maintain pristine repository hygiene for Node.js/React multi-agent system.

## Components

### 1. Pre-commit Configuration (`.pre-commit-config.yaml`)
Hooks that run before each commit:
- **detect-secrets**: Scans for API keys, tokens, credentials
- **block-node-modules**: Prevents accidental commit of node_modules
- **block-build-artifacts**: Blocks dist/, build/, .log files
- **check-large-files**: Warns about files >1MB
- **auto-clean-untracked**: Moves untracked files to .backups/

### 2. Clean Commit Script (`git-clean-commit.sh`)
Ensures pristine working directory:
- Moves untracked files to `.backups/`
- Verifies no uncommitted changes
- Enforces clean status before commits

## Installation

### Install pre-commit framework
```bash
pip install pre-commit
```

### Initialize hooks
```bash
pre-commit install
```

### Verify installation
```bash
pre-commit run --all-files
```

## Usage Workflow

### 1. Make changes to code
```bash
# Work on your feature
```

### 2. Stage specific files only
```bash
git add path/to/file1.js path/to/file2.jsx
```

### 3. Check status
```bash
git status
```

### 4. Commit (hooks run automatically)
```bash
git commit -m "feat: your feature description"
```

### 5. If untracked files exist
The `auto-clean-untracked` hook automatically moves them to `.backups/`

## Manual Cleanup

### Run clean script manually
```bash
./git-clean-commit.sh
```

### Check what's in backups
```bash
ls -la .backups/
```

## Hooks Behavior

### Before Commit
1. Checks for secrets/credentials
2. Blocks node_modules, build artifacts
3. Warns about large files
4. Moves untracked files to .backups/
5. Verifies pristine working directory

### After Moving Files
```
Working directory status:
On branch feature/example
nothing to commit, working tree clean
Working directory is pristine ✓
```

## Troubleshooting

### Hook fails with secrets detected
```bash
# Review the detected secret
# Remove or add to .secrets.baseline if false positive
detect-secrets scan --baseline .secrets.baseline
```

### Build artifacts in staging
```bash
# Unstage them
git rm --cached dist/bundle.js
```

### Large file warning
```bash
# Consider adding to .gitignore or compressing
echo "large-file.zip" >> .gitignore
```

## Best Practices

1. **Never use `git add .` or `git add -A`**
   - Always stage specific files explicitly

2. **Keep working directory pristine**
   - No untracked files (moved to .backups/)
   - No uncommitted changes
   - No staged files waiting

3. **Review .backups/ periodically**
   - Delete unnecessary files
   - Recover accidentally moved files if needed

4. **Stage, commit, push in sequence**
```bash
   git add file1 file2 && git status
   git commit -m "message" && git status
   git push && git status
```

## Integration with GitFlow

Works seamlessly with squash-merge workflow:
- Feature branch stays clean
- PR contains only relevant files
- Squash merge creates single clean commit
- Remote branch deleted automatically

## Files Modified

### `.gitignore` (auto-updated)
Script adds `.backups/` if not present

### `.secrets.baseline`
Created on first detect-secrets run
```bash
detect-secrets scan --baseline .secrets.baseline
```

## Verification Commands

### Check hook installation
```bash
pre-commit run --all-files
```

### Test clean script
```bash
./git-clean-commit.sh
```

### Verify pristine state
```bash
git status --short
# Should show nothing or only ?? .backups/
```

## Node.js/React Specific Checks

- Blocks `node_modules/` commits
- Blocks `dist/`, `build/` artifacts
- Blocks `.log` files
- Checks for large bundle files
- Preserves package.json, package-lock.json controls via .gitignore

## CI/CD Integration

Hooks run locally before push, ensuring:
- Clean commits reach remote
- No secrets in repository
- No bloat in version control
- Faster CI/CD pipelines (no large files)
