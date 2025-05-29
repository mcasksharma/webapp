@echo off
echo ===============================================
echo    Company Website - Application Starter
echo ===============================================

echo Checking environment...
call check-env.bat
if %ERRORLEVEL% NEQ 0 (
    echo Environment check failed. Please install required dependencies.
    exit /b 1
)

echo.
echo Starting backend server...
cd backend
echo Using port 8082 for the backend...
set JAVA_OPTS=-Dserver.port=8082
start cmd /c mvnw spring-boot:run
echo Backend server is starting at http://localhost:8082

echo.
echo Waiting for backend to initialize...
timeout /t 10 /nobreak

echo.
echo Starting frontend server...
cd ../frontend

echo.
echo Option 1: Starting standalone HTML version...
start cmd /k powershell -Command "Write-Host 'Serving static HTML on http://localhost:8000'; cd frontend; python -m http.server 8000"
echo Static frontend available at: http://localhost:8000/public/index-standalone.html

echo.
echo Option 2: Starting React development server...
echo To start the React version, open a new terminal and run:
echo cd frontend
echo npm install
echo npm start
echo.

echo ===============================================
echo    Access the application at:
echo    - Static HTML: http://localhost:8000/public/index-standalone.html
echo    - React App (if started): http://localhost:3000
echo ===============================================
