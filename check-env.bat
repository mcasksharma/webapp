@echo off
echo Checking environment and prerequisites...

echo.
echo Checking Java version:
java -version
if %ERRORLEVEL% NEQ 0 (
    echo Error: Java not found. Please install Java 17 or later.
    exit /b 1
)

echo.
echo Checking Node.js version:
node --version
if %ERRORLEVEL% NEQ 0 (
    echo Error: Node.js not found. Please install Node.js.
    exit /b 1
)

echo.
echo Checking npm version:
npm --version
if %ERRORLEVEL% NEQ 0 (
    echo Error: npm not found. Please install Node.js which includes npm.
    exit /b 1
)

echo.
echo All prerequisites are in place!
echo.
echo You can now run the application using the start-app.bat script.
echo.
echo - The backend will be available at http://localhost:8082
echo - The frontend will be available at http://localhost:8000
echo.
echo Sample login credentials:
echo - Username: admin, Password: admin123
echo - Username: user, Password: user123
