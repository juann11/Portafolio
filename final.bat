@echo off
cd /d "%~dp0"
cmd /c "npm run build"
git add -A
git commit -m "SEO: metadataBase de produccion" --quiet
git push
git log --oneline -2
echo DEPLOYED
