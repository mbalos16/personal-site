#!/bin/bash

# Abort on failure
set -e

# Get the path of the project
SCRIPTPATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

# cd to folder
pushd $SCRIPTPATH


echo "Syncing last changes..."
git checkout main
git pull --rebase
git checkout dev
git pull --rebase

echo "Rebasing main into dev..."
git rebase main dev

echo "Rebasing dev into main..."
git rebase dev main
git push

echo "CHANGES PUBLISHED SUCCESSFULLY! Checking out dev"
git checkout dev

