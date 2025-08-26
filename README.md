# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with glass morphism effects
- Dark theme with gradient accents
- Contact form that submits to Google Sheets
- Project showcase with filtering capabilities
- Animated sections using AOS library

## Technologies Used

- React.js
- Vite
- Tailwind CSS
- AOS (Animate On Scroll)
- Google Sheets API (for contact form)

## Recent Updates

### Contact Form Fix (August 2025)
- Fixed issue where contact form submissions weren't appearing in Google Sheets
- Updated Google Form URL and entry IDs
- Added improved error handling and user feedback
- See `contact-form-update-documentation.md` for detailed information

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Contact Form Setup

The contact form submits data to Google Sheets via Google Forms. To set up your own form:

1. Create a Google Form with fields for name, email, and message
2. Get the form URL and entry IDs for each field
3. Update the values in `src/components/Footer.jsx`

For more details, refer to the documentation in `contact-form-update-documentation.md`.
# portfolio_modern
