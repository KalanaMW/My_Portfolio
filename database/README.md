# Database Setup Instructions

## Prerequisites

- SQL Server 2019 or later
- SQL Server Management Studio (SSMS) or Azure Data Studio

## Setup Steps

### 1. Install SQL Server

If you don't have SQL Server installed:

- Download SQL Server Developer Edition (free) from Microsoft
- Install with default settings
- Remember the SA password you set during installation

### 2. Create Database

1. Open SQL Server Management Studio
2. Connect to your SQL Server instance
3. Run the `setup.sql` script in this directory
4. This will create the `portfolio_db` database with all required tables

### 3. Update Application Properties

Update the database connection details in `backend/src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=portfolio_db;encrypt=true;trustServerCertificate=true
spring.datasource.username=sa
spring.datasource.password=YOUR_SA_PASSWORD_HERE
```

### 4. Test Connection

Run the Spring Boot application to test the database connection:

```bash
cd backend
mvn spring-boot:run
```

## Database Schema

### Tables Created:

- **projects**: Stores portfolio project information
- **skills**: Stores technical skills and proficiency levels
- **contact_messages**: Stores contact form submissions

### Sample Data:

The setup script includes sample projects and skills to get you started.

## Troubleshooting

### Common Issues:

1. **Connection Refused**: Ensure SQL Server is running
2. **Authentication Failed**: Check username/password in application.properties
3. **Database Not Found**: Run the setup.sql script first
4. **Port Issues**: Default SQL Server port is 1433

### Alternative Setup with Docker:

If you prefer using Docker:

```bash
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=YourPassword123" -p 1433:1433 --name sqlserver -d mcr.microsoft.com/mssql/server:2019-latest
```
