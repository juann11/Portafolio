@echo off
cd /d "%~dp0"
del /q rename.cjs findauth.bat checkenv.bat whoami.bat projhelp.bat doren.bat aliasls.bat 2>nul
cmd /c "npm run build"
git add -A
git commit -m "SEO: dominio portafolio-juann11s-projects" --quiet
git push
git log --oneline -2
echo SHIPPED
