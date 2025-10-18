# Quick Start Guide

## 🚀 Get Your Portfolio Running in 5 Steps

### Step 1: Prerequisites Check

Make sure you have these installed:

- Node.js (v18+)
- Java 17+
- SQL Server
- Git

### Step 2: Database Setup

1. Open SQL Server Management Studio
2. Run the script: `database/setup.sql`
3. Note your database credentials

### Step 3: Backend Configuration

1. Open `backend/src/main/resources/application.properties`
2. Update database credentials:
   ```properties
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

### Step 4: Start Backend

```bash
cd backend
mvn spring-boot:run
```

✅ Backend running at: http://localhost:8080

### Step 5: Start Frontend

```bash
cd frontend
npm install
npm start
```

✅ Frontend running at: http://localhost:4200

## 🎉 You're Done!

Visit http://localhost:4200 to see your portfolio!

## 🔧 Quick Customization

### Add Your Projects

1. Go to http://localhost:8080/api/projects
2. Use POST method to add projects
3. Or add directly to database

### Update Your Skills

1. Go to http://localhost:8080/api/skills
2. Use POST method to add skills
3. Set proficiency level (1-100)

### Customize Content

- Update `frontend/src/app/pages/about/about.component.ts`
- Modify contact information in contact page
- Change colors in `frontend/src/styles.scss`

## 🆘 Troubleshooting

**Backend won't start?**

- Check Java version: `java -version`
- Verify database connection
- Check port 8080 is available

**Frontend won't start?**

- Check Node version: `node -v`
- Run `npm install` again
- Check port 4200 is available

**Database connection failed?**

- Verify SQL Server is running
- Check credentials in application.properties
- Ensure database exists

## 📞 Need Help?

Check the full documentation in README.md or create an issue on GitHub.
