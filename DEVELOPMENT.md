# Development Guide

## 🛠️ Development Setup

### IDE Recommendations

- **IntelliJ IDEA** (for Spring Boot)
- **Visual Studio Code** (for Angular)
- **SQL Server Management Studio** (for database)

### Recommended Extensions

#### VS Code Extensions

- Angular Language Service
- TypeScript Importer
- Prettier
- ESLint
- GitLens

#### IntelliJ IDEA Plugins

- Spring Boot Helper
- Database Navigator
- Lombok (if using)

## 🏗️ Architecture Overview

### Frontend Architecture

```
Angular App (Standalone Components)
├── Components (Reusable UI elements)
├── Pages (Route components)
├── Services (API communication)
├── Models (TypeScript interfaces)
└── Routes (Navigation configuration)
```

### Backend Architecture

```
Spring Boot Application
├── Controllers (REST endpoints)
├── Services (Business logic)
├── Repositories (Data access)
├── Models (JPA entities)
└── Configuration (App settings)
```

### Database Schema

```
Tables:
├── projects (id, title, description, imageUrl, githubUrl, liveUrl, technologies, startDate, endDate, isActive)
├── skills (id, name, proficiencyLevel, skillType, isActive)
└── contact_messages (id, name, email, subject, message, createdAt, isRead)
```

## 🔧 Development Workflow

### 1. Feature Development

1. Create feature branch: `git checkout -b feature/new-feature`
2. Make changes
3. Test locally
4. Commit changes: `git commit -m "Add new feature"`
5. Push branch: `git push origin feature/new-feature`
6. Create pull request

### 2. Backend Development

```bash
# Start development server with hot reload
cd backend
mvn spring-boot:run

# Run tests
mvn test

# Build for production
mvn clean package
```

### 3. Frontend Development

```bash
# Start development server
cd frontend
npm start

# Run tests
npm test

# Build for production
npm run build
```

## 📝 Code Standards

### TypeScript/Angular

- Use TypeScript strict mode
- Follow Angular style guide
- Use standalone components
- Implement proper error handling
- Use reactive forms
- Follow naming conventions

### Java/Spring Boot

- Follow Java naming conventions
- Use proper annotations
- Implement proper exception handling
- Use validation annotations
- Follow REST API best practices
- Write unit tests

### Database

- Use meaningful table and column names
- Implement proper indexes
- Use appropriate data types
- Follow normalization principles

## 🧪 Testing Strategy

### Backend Testing

```java
@SpringBootTest
class ProjectServiceTest {

    @Test
    void shouldReturnAllActiveProjects() {
        // Test implementation
    }
}
```

### Frontend Testing

```typescript
describe("ProjectComponent", () => {
  it("should display projects", () => {
    // Test implementation
  });
});
```

## 🔍 Debugging

### Backend Debugging

- Use IDE debugger
- Add logging statements
- Check application logs
- Use database query tools

### Frontend Debugging

- Use browser dev tools
- Add console.log statements
- Use Angular DevTools extension
- Check network requests

## 📦 Build & Deployment

### Local Build

```bash
# Backend
cd backend && mvn clean package

# Frontend
cd frontend && npm run build
```

### Docker Deployment

```dockerfile
# Backend Dockerfile
FROM openjdk:17-jdk-slim
COPY target/portfolio-api-*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

### Environment Configuration

- Development: Local database, debug logging
- Staging: Staging database, limited logging
- Production: Production database, minimal logging

## 🔒 Security Considerations

### Backend Security

- Input validation
- SQL injection prevention
- CORS configuration
- Error handling (no sensitive data exposure)

### Frontend Security

- XSS prevention
- Input sanitization
- HTTPS enforcement
- Content Security Policy

## 📊 Performance Optimization

### Backend Optimization

- Database query optimization
- Caching strategies
- Connection pooling
- Lazy loading

### Frontend Optimization

- Lazy loading modules
- Image optimization
- Bundle size optimization
- CDN usage

## 🔄 CI/CD Pipeline

### GitHub Actions Example

```yaml
name: CI/CD Pipeline
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: |
          cd backend && mvn test
          cd frontend && npm test
```

## 📚 Learning Resources

### Angular

- [Angular Documentation](https://angular.io/docs)
- [Angular Style Guide](https://angular.io/guide/styleguide)

### Spring Boot

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Spring Data JPA Guide](https://spring.io/guides/gs/accessing-data-jpa/)

### SQL Server

- [SQL Server Documentation](https://docs.microsoft.com/en-us/sql/)
- [T-SQL Reference](https://docs.microsoft.com/en-us/sql/t-sql/)

## 🤝 Contributing Guidelines

1. Fork the repository
2. Create a feature branch
3. Follow coding standards
4. Write tests
5. Update documentation
6. Submit pull request

## 📞 Support

For development questions:

- Check existing issues
- Create new issue
- Contact maintainers
- Join community discussions
