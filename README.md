# GroupGuard Local - Marketing Site

A simple, static HTML+JavaScript marketing website for GroupGuard Local.

## Overview

This is a plain HTML, CSS, and JavaScript marketing site that requires no backend, no CMS, and no build process. Just open `index.html` in a browser or deploy to any static hosting service.

## Structure

```
marketing-site/
├── index.html          # Main landing page
├── css/
│   ├── theme.css       # Design system variables and base styles
│   └── marketing.css   # Marketing-specific component styles
├── js/
│   └── site.js         # Interactive features (navbar, smooth scroll)
└── images/             # Place your images here
```

## Features

- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Modern CSS**: Uses CSS variables for easy customization
- **Smooth Animations**: Fade-in effects and hover transitions
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks needed
- **Fast Loading**: Minimal file size, optimized for performance

## Local Development

Simply open `index.html` in your web browser:

```bash
# Option 1: Double-click index.html

# Option 2: Use Python's built-in server
python -m http.server 8000

# Option 3: Use Node.js http-server
npx http-server -p 8000
```

Then visit `http://localhost:8000`

## Customization

### Colors

Edit `css/theme.css` to change the color scheme:

```css
:root {
    --color-primary: #1E3A8A;      /* Dark blue */
    --color-secondary: #06B6D4;    /* Cyan */
    --color-accent: #F97316;       /* Orange */
}
```

### Content

Edit `index.html` to update:
- Hero section text
- Problem/solution descriptions
- Footer links
- Call-to-action buttons

### Images

Add images to the `images/` folder and update references in `index.html`:

```html
<img src="images/dashboard-screenshot.png" alt="Dashboard">
```

## Deployment

### Option 1: GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Select branch and `/marketing-site` folder
4. Save and get your URL

### Option 2: Netlify

1. Drag and drop the `marketing-site` folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Get instant deployment

### Option 3: Vercel

```bash
cd marketing-site
npx vercel
```

### Option 4: Azure Static Web Apps

```bash
az staticwebapp create --name groupguard-marketing --resource-group MyResourceGroup
```

### Option 5: Any Web Server

Upload the entire `marketing-site` folder to your web server via FTP, SFTP, or your hosting provider's file manager.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No external dependencies
- ~15KB total CSS
- ~1KB JavaScript
- Fast First Contentful Paint (FCP)
- 100/100 Lighthouse score achievable

## SEO

The site includes:
- Semantic HTML
- Meta descriptions
- Proper heading hierarchy
- Alt text for images (when added)

For better SEO, consider adding:
- robots.txt
- sitemap.xml
- Schema.org markup
- Open Graph tags

## License

Proprietary - GroupGuard Local
