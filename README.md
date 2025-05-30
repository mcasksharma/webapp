# Company WebApp - Full Stack Application

This is a full-stack web application for a software company's webapp, built with Java 17/Spring Boot for the backend and React with TypeScript for the frontend.

## Project Structure

```
├── backend/ - Spring Boot application with Maven
│   └── src/
│       ├── main/
│       │   ├── java/com/company/webapp/
│       │   │   ├── config/
│       │   │   ├── controller/
│       │   │   ├── model/
│       │   │   ├── payload/
│       │   │   ├── repository/
│       │   │   ├── security/
│       │   │   └── service/
│       │   └── resources/
│       └── test/
└── frontend/ - React TypeScript application
    ├── public/
    └── src/
        ├── components/
        │   ├── auth/
        │   └── dashboard/
        └── services/
```

## Features

### Backend
- REST API with Spring Boot 3.1 and Java 17
- JWT Authentication and Authorization
- Spring Security integration
- H2 In-memory database for easy testing and demo
- Sample company info and services endpoints
- Runs on port 8082

### Frontend
- React with TypeScript
- React Router for navigation
- JWT Authentication flow
- Login and Registration pages
- Dashboard with company info and services
- Modern, responsive UI
- Static HTML version available at http://localhost:8000/public/index-standalone.html

## Quick Start

The easiest way to start the application is using the provided batch scripts:

1. Check if all prerequisites are installed:
   ```
   check-env.bat
   ```
   This will verify that Java, Node.js, and npm are properly installed.

2. Start both the backend and frontend with a single command:
   ```
   start-app.bat
   ```

This will start:
- Backend on http://localhost:8082
- Frontend on http://localhost:8000 (serving the static HTML page)

## Manual Setup

### Backend

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Run the Spring Boot application:
   ```
   # On Windows:
   mvnw.cmd spring-boot:run
   
   # On Linux/Mac:
   ./mvnw spring-boot:run
   ```

### Frontend

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the React development server:
   ```
   npm start
   ```

## API Endpoints

### Public endpoints:
- `POST /api/auth/signin` - Login
- `POST /api/auth/signup` - Register

### Protected endpoints (require JWT authentication):
- `GET /api/company/info` - Company information
- `GET /api/company/services` - Company services

## Test Credentials

The application comes with pre-configured test users:

1. Admin User
   - Username: `admin`
   - Password: `admin123`

2. Regular User
   - Username: `user`
   - Password: `user123`

## Development

### Backend Development
- The backend is a Maven project
- H2 console is available at http://localhost:8081/h2-console
  - JDBC URL: `jdbc:h2:mem:testdb`
  - Username: `sa`
  - Password: `password`

### Frontend Development
- The frontend uses React 18 with TypeScript
- API URLs are configured in `src/config.ts`
- Two options are available:
  1. Static HTML version (available at `http://localhost:8000/public/index-standalone.html`)
  2. Full React application (available at `http://localhost:3000` when started with `npm start`)

## Troubleshooting

### Common Issues

1. **Backend fails to start**
   - Check Java version (Java 17 required)
   - Ensure port 8081 is not already in use
   - Try running with Maven directly: `mvn clean spring-boot:run`

2. **Frontend fails to start**
   - Check Node.js and npm installation 
   - Try clearing npm cache: `npm cache clean --force`
   - Run `npm install` before starting

3. **API Connection Issues**
   - Verify that backend is running and accessible
   - Check the API URL configuration in `frontend/src/config.ts`
   - Ensure CORS is properly configured in the backend

## Deployment

For production deployment:

1. Build the backend:
   ```
   cd backend
   mvn clean package
   ```
   This will generate a JAR file in the `target/` directory.

2. Build the frontend:
   ```
   cd frontend
   npm run build
   ```
   This will generate a static build in the `build/` directory.

3. Deploy the backend JAR to your server and serve the frontend build files from a web server of your choice.
