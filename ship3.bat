@echo off
cd /d "%~dp0"
del /q prot.bat alias2.bat updhelp.bat 2>nul
cmd /c "npm run build"
git add -A
git commit -m "SEO: metadataBase en dominio publico" --quiet
git push
git log --oneline -2
git status --short
echo SHIPPED
