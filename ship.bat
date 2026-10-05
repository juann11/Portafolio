@echo off
cd /d "%~dp0"
del /q gitinfo.bat 2>nul
git add -A
git -c user.name="Juan Jose Ospina" -c user.email="juanjoospina2018@gmail.com" commit -m "Portafolio v1: Next.js 16, 5 proyectos, stack con logos, SEO y OG"
git log --oneline -2
echo ---GH---
gh --version 2>nul
gh auth status 2>&1 | head -5
