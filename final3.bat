@echo off
cd /d "%~dp0"
cmd /c "npm run build"
git add -A
git commit -m "SEO: dominio final portafolio-juanjose-ospina" --quiet
git push
git log --oneline -2
del /q final3.bat
git add -A
git status --short
echo DONE
