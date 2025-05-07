# Luxterior — Interior Design Website

Luxterior is a modern, responsive interior design website built using **Next.js** and **Tailwind CSS**. It showcases elegant layouts, smooth responsiveness, and clean code organization — perfect for luxury interior design brands or portfolios.

## 🚀 Live Demo

> Coming soon...

## 📂 Project Structure
```bash
/app
├── about/page.js               # About Us page
├── Contactus/page.js           # Contact Us page
├── Features/page.js            # Features page
├── api/
│   ├── sendmail/route.js       # API for Contact Us form using Nodemailer
│   └── subscribe/route.js      # API for newsletter subscription using Nodemailer
├── layout.js                   # Layout file for app
├── page.js                     # Main Home page

/components
├── about/
│   ├── Details.jsx
│   ├── Hero.jsx
│   └── Overview.jsx
├── Contactus/
│   └── ContactUs.jsx
├── Features/
│   ├── Fourseater.jsx
│   ├── Hero.jsx
│   └── Topcategories.jsx
├── Benefits.jsx
├── Experience.jsx
├── Footer.jsx
├── Hero.jsx
├── Navbar.jsx
├── Process.jsx
├── Subscribe.jsx
├── Testimonials.jsx

/public
└── images/                     # Static assets

/styles
└── globals.css
```
## 🛠️ Built With

- [Next.js](https://nextjs.org/) – React Framework  
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework  
- [Nodemailer](https://nodemailer.com/about/) – For email handling in forms


## 📧 Features
- Fully responsive layout
- Four main pages: Home, About Us, Features, Contact Us
- Reusable modular components for scalability
- Newsletter Subscription (Home page) — powered by Nodemailer
- Contact Us Form — sends emails using Nodemailer
- Clean project structure with proper separation of concerns


## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/harshitarr/Luxterior-Furniture-Website.git
cd Luxterior-Furniture-Website
```

## 2. Install dependencies
```bash
npm install
```

## 3. Create .env.local and add the following:
```bash
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
```

## 4. Run the development server
```bash
npm run dev
```
**Visit http://localhost:3000 to view the site in your browser.**


## 📄 License
This project is open-source and available under the MIT License.
