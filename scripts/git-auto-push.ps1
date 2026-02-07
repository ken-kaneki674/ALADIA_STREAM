<#
Simple helper to stage, commit and push changes from PowerShell (Windows).

Usage:
  .\scripts\git-auto-push.ps1 -Message "Your commit message"
If no -Message provided, you will be prompted.
#>

param(
    [string]$Message
)

if (-not $Message) {
    $Message = Read-Host "Commit message (leave blank for 'Update files')"
}

if ([string]::IsNullOrWhiteSpace($Message)) {
    $Message = "Update files"
}

Write-Host "Staging all changes..."
git add -A

Write-Host "Committing with message: '$Message'"
git commit -m "$Message"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Commit failed or no changes to commit." -ForegroundColor Yellow
    exit $LASTEXITCODE
}

Write-Host "Pushing to remote..."
git push origin HEAD
if ($LASTEXITCODE -ne 0) {
    Write-Host "Push failed." -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host "Done: changes staged, committed and pushed." -ForegroundColor Green
