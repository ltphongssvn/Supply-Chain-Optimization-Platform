#!/bin/bash
# ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/git-clean-commit.sh
# Ensure .backups/ is in .gitignore
if ! grep -q "^\.backups/$" .gitignore 2>/dev/null; then
    echo ".backups/" >> .gitignore
    echo "Added .backups/ to .gitignore"
fi
# Check for untracked files
if [ -n "$(git status --porcelain | grep '^??')" ]; then
    echo "Moving untracked files to .backups/"
    mkdir -p .backups
    for file in $(git status --porcelain | grep '^??' | cut -c4-); do
        if [ "$file" != ".backups/" ]; then
            dir=$(dirname ".backups/$file")
            mkdir -p "$dir"
            mv "$file" ".backups/$file" 2>/dev/null && echo "Moved: $file"
        fi
    done
fi
# Show clean status
echo "Working directory status:"
git status --short
# Exit if not clean
if [ -n "$(git status --porcelain | grep -v "^?? \.backups/")" ]; then
    echo "ERROR: Working directory not pristine. Stage changes first."
    exit 1
fi
echo "Working directory is pristine ✓"
