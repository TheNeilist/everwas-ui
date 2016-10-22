#!/bin/sh

git filter-branch --env-filter '
OLD_EMAIL=""
CORRECT_NAME="TheNeilist"
CORRECT_EMAIL="hireahoosier@yahoo.com"
export GIT_AUTHOR_NAME="$CORRECT_NAME"
export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"

' --tag-name-filter cat -- --branches --tags
