# Portfolio Application

A modern, full-stack portfolio application built with Angular, Spring Boot, and Microsoft SQL Server.

## 🚀 Features

- **Responsive Design**: Modern, mobile-first UI with smooth animations
- **Project Showcase**: Display your projects with images, descriptions, and links
- **Skills Management**: Showcase your technical skills with proficiency levels
- **Contact Form**: Functional contact form with backend integration
- **About Section**: Personal information and journey
- **Search & Filter**: Search projects and filter skills by category
- **Admin Ready**: Backend APIs ready for admin panel integration

## 🛠️ Tech Stack

### Frontend

- **Angular 17+**: Modern frontend framework with standalone components
- **TypeScript**: Type-safe development
- **SCSS**: Enhanced styling with variables and mixins
- **RxJS**: Reactive programming for API calls

### Backend

- **Spring Boot 3.x**: Java-based REST API
- **Spring Data JPA**: Database abstraction layer
- **Spring Validation**: Input validation
- **Maven**: Dependency management

### Database

- **Microsoft SQL Server**: Relational database
- **JPA/Hibernate**: ORM for database operations

## 📁 Project Structure

```
portfolio/
├── frontend/                 # Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/   # Reusable components
│   │   │   ├── pages/        # Page components
│   │   │   ├── services/     # API services
│   │   │   └── models/       # TypeScript interfaces
│   │   ├── assets/           # Static assets
│   │   └── environments/     # Environment configurations
│   ├── package.json
│   └── angular.json
├── backend/                  # Spring Boot application
│   ├── src/main/java/com/portfolio/api/
│   │   ├── controller/      # REST controllers
│   │   ├── service/         # Business logic
│   │   ├── repository/      # Data access layer
│   │   └── model/           # JPA entities
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
├── database/                 # Database scripts
│   ├── setup.sql            # Database creation script
│   └── README.md            # Database setup instructions
└── docs/                     # Documentation
```

## 🚀 Getting Started

### Prerequisites

Before running the application, ensure you have:

- **Node.js** (v18 or higher)
- **Angular CLI** (v17 or higher)
- **Java 17** or higher
- **Maven** (v3.6 or higher)
- **SQL Server** (2019 or higher)
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Set up the Database**

   - Install SQL Server if not already installed
   - Run the setup script: `database/setup.sql`
   - Update database credentials in `backend/src/main/resources/application.properties`

3. **Backend Setup**

   ```bash
   cd backend
   mvn clean install
   mvn spring-boot:run
   ```

   The backend will be available at `http://localhost:8080`

4. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm start
   ```
   The frontend will be available at `http://localhost:4200`

## 🔧 Configuration

### Database Configuration

Update `backend/src/main/resources/application.properties`:

```properties
# Database Configuration
spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=portfolio_db;encrypt=true;trustServerCertificate=true
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### Frontend Configuration

Update `frontend/src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: "http://localhost:8080/api",
};
```

## 📊 API Endpoints

### Projects

- `GET /api/projects` - Get all active projects
- `GET /api/projects/{id}` - Get project by ID
- `POST /api/projects` - Create new project
- `PUT /api/projects/{id}` - Update project
- `DELETE /api/projects/{id}` - Delete project
- `GET /api/projects/search/title?title={title}` - Search by title
- `GET /api/projects/search/technology?technology={tech}` - Search by technology

### Skills

- `GET /api/skills` - Get all active skills
- `GET /api/skills/{id}` - Get skill by ID
- `GET /api/skills/type/{skillType}` - Get skills by type
- `POST /api/skills` - Create new skill
- `PUT /api/skills/{id}` - Update skill
- `DELETE /api/skills/{id}` - Delete skill
- `GET /api/skills/search?name={name}` - Search by name

### Contact

- `POST /api/contact` - Send contact message
- `GET /api/contact` - Get all messages (admin)
- `GET /api/contact/unread` - Get unread messages
- `GET /api/contact/count` - Get unread count
- `PUT /api/contact/{id}/read` - Mark as read
- `DELETE /api/contact/{id}` - Delete message

## 🎨 Customization

### Adding New Projects

1. Use the API endpoint `POST /api/projects`
2. Or add directly to the database using the `projects` table
3. Required fields: `title`, `description`
4. Optional fields: `imageUrl`, `githubUrl`, `liveUrl`, `technologies`, `startDate`, `endDate`

### Adding New Skills

1. Use the API endpoint `POST /api/skills`
2. Or add directly to the database using the `skills` table
3. Required fields: `name`, `proficiencyLevel` (1-100)
4. Optional fields: `skillType` (Frontend, Backend, Database, Tools, etc.)

### Styling Customization

- Global styles: `frontend/src/styles.scss`
- Component styles: Each component has its own styles
- Color scheme: Update CSS custom properties
- Fonts: Change font imports in `frontend/src/index.html`

## 🚀 Deployment

### Backend Deployment

1. **Build the application**

   ```bash
   cd backend
   mvn clean package
   ```

2. **Deploy to your server**
   - Upload the JAR file to your server
   - Configure environment variables
   - Set up database connection
   - Run: `java -jar portfolio-api-0.0.1-SNAPSHOT.jar`

### Frontend Deployment

1. **Build for production**

   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to static hosting**
   - Upload the `dist/portfolio-frontend` folder
   - Configure your web server
   - Update API URL in environment files

### Database Deployment

1. **Production Database Setup**
   - Create production database
   - Run migration scripts
   - Configure connection strings
   - Set up backup procedures

## 🧪 Testing

### Backend Testing

```bash
cd backend
mvn test
```

### Frontend Testing

```bash
cd frontend
npm test
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Support

If you encounter any issues or have questions:

1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information
4. Contact: your.email@example.com

## 🔄 Updates

### Version 1.0.0

- Initial release
- Basic CRUD operations
- Responsive design
- Contact form functionality

### Future Enhancements

- [ ] Admin dashboard
- [ ] Image upload functionality
- [ ] Blog section
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Analytics integration

---

**Happy Coding! 🎉**
