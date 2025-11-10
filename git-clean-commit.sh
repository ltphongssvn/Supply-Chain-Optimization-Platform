#!/bin/bash
# ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/git-clean-commit.sh

# Ensure .backups/ is in .gitignore
if ! grep -q "^\.backups/$" .gitignore 2>/dev/null; then
    echo ".backups/" >> .gitignore
    echo "Added .backups/ to .gitignore"
fi

# Check for modified/deleted files that need staging (space in first column = unstaged)
if [ -n "$(git status --porcelain | grep '^ [MD]')" ]; then
    echo "ERROR: Unstaged changes detected. Stage your changes first:"
    git status --porcelain | grep '^ [MD]'
    exit 1
fi

# Only move untracked files if everything else is staged
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
git status

echo "Working directory is pristine ✓"
