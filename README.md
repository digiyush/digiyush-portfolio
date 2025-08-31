# DigiYush - Digital Marketing Portfolio

A professional portfolio website for digital marketing services built with React, TypeScript, and Express.js.

## 🚀 Features

- **Modern Design**: Clean, professional interface with responsive design
- **Service Showcase**: Display of digital marketing services including Meta Ads, Google Ads, SEO, and more
- **Portfolio Section**: Case studies and client testimonials
- **Contact Form**: Functional contact form with backend API
- **Booking System**: Consultation booking with date/time selection
- **Mobile Responsive**: Optimized for all devices

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Wouter (routing)
- **Backend**: Node.js, Express.js, TypeScript
- **UI Components**: Radix UI primitives with shadcn/ui
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form with Zod validation

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/digiyush-portfolio.git
cd digiyush-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5000`

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Deploy to GitHub Pages:

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at `https://YOUR_USERNAME.github.io/digiyush-portfolio/`

### Manual Build:

```bash
# Build frontend only
npm run build:client

# Build full application (frontend + backend)
npm run build
```

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities and configurations
│   │   └── assets/         # Images and static assets
├── server/                 # Backend Express application
├── shared/                 # Shared types and schemas
└── .github/workflows/      # GitHub Actions deployment
```

## 📝 Customization

### Personal Information
Update your personal details in:
- `client/src/components/navigation.tsx` - Header name
- `client/src/components/footer.tsx` - Footer information
- `client/src/pages/home.tsx` - Hero section and bio
- `client/src/pages/contact.tsx` - Contact details

### Profile Image
Replace `client/src/assets/profile-optimized.jpeg` with your professional photo.

### Services
Modify the services array in `client/src/pages/services.tsx` to match your offerings.

### Portfolio
Update case studies and testimonials in:
- `client/src/pages/home.tsx` - Testimonials section
- `client/src/pages/portfolio.tsx` - Case studies

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

DigiYush - digiyush@gmail.com

Project Link: [https://github.com/YOUR_USERNAME/digiyush-portfolio](https://github.com/YOUR_USERNAME/digiyush-portfolio)
