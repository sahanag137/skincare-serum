# UNKNOWN Skincare Website

> **Reveal What Skin Can Become**

A premium, high-end frontend for the UNKNOWN luxury skincare brand. Built entirely with **HTML5**, **CSS3**, and **Vanilla JavaScript**—no frameworks, no dependencies. Pure, performant, and pixel-perfect.

## Overview

UNKNOWN is a sophisticated e-commerce website showcasing a premium skincare serum product. The site emphasizes luxury aesthetics, smooth animations, and interactive user experiences that reflect the brand's high-end positioning.

**Live Demo:** [View the site](https://your-domain.com)

## Features

### Visual Design

- **Luxury Aesthetic**: Black, white, silver, and frosted glass effects create a premium, sophisticated look

- **Smooth Animations**: Scroll-triggered reveals, floating elements, and micro-interactions enhance user engagement

- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices

- **Custom Cursor**: Interactive cursor that responds to hover states and interactive elements

### Interactive Components

- **Hero Section**: Animated bottle with particle background and call-to-action buttons

- **Product Showcase**: Before/after comparison slider with smooth transitions

- **Ingredient Cards**: Flipping cards that reveal ingredient benefits on hover

- **Testimonials**: Customer reviews carousel with ratings and feedback

- **FAQ Accordion**: Expandable questions and answers for customer support

- **Contact Form**: Newsletter subscription and contact message submission

- **Smooth Scrolling**: Page navigation with smooth scroll animations

### Performance

- **Zero Dependencies**: No frameworks or external libraries—pure vanilla implementation

- **Fast Loading**: Optimized assets and efficient CSS/JavaScript

- **GPU-Accelerated Animations**: Uses `transform` and `opacity` for smooth 60fps performance

- **Mobile-First Design**: Responsive breakpoints for all screen sizes

## Project Structure

```
unknown-serum/
├── index.html              # Main HTML file with all sections
├── css/
│   ├── style.css          # Core styling and layout
│   ├── animations.css     # Keyframe animations and transitions
│   └── responsive.css     # Mobile and tablet breakpoints
├── js/
│   ├── script.js          # Main JavaScript logic
│   ├── cursor.js          # Custom cursor interactions
│   ├── particles.js       # Particle system for hero background
│   └── scroll.js          # Scroll-triggered animations
└── assets/
    ├── images/            # Product and brand images
    ├── videos/            # Background or product videos
    ├── icons/
    │   └── icons.svg      # SVG symbol library for icons
    └── fonts/             # Custom fonts (if used)
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)

- A local web server (for development)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/unknown-skincare.git
   cd unknown-serum
   ```

1. **Start a local server:**

   **Using Python 3:**

   ```bash
   python3 -m http.server 8000
   ```

   **Using Python 2:**

   ```bash
   python -m SimpleHTTPServer 8000
   ```

   **Using Node.js (http-server ):**

   ```bash
   npx http-server -p 8000
   ```

   **Using VS Code Live Server:**
  - Install the "Live Server" extension
  - Right-click `index.html` and select "Open with Live Server"

1. **Open in browser:**

   ```
   http://localhost:8000
   ```

## File Descriptions

### HTML (`index.html` )

The main entry point containing all page sections:

- Navigation bar with smooth scroll links

- Hero section with animated bottle and particle background

- About section with statistics

- Benefits section with feature cards

- Ingredients section with flipping cards

- Before/after results comparison

- Timeline of product development

- Testimonials carousel

- Gallery showcase

- FAQ accordion

- Contact form

- Newsletter subscription

- Footer with links

### CSS Files

**`style.css`** - Core styling

- Global styles and typography

- Layout and spacing

- Color palette and design tokens

- Component styles (cards, buttons, forms)

- Glass-morphism effects

**`animations.css`** - Animations and transitions

- Keyframe animations for smooth effects

- Scroll-triggered reveal animations

- Floating and bouncing animations

- Fade-in and slide-in transitions

- Hover effects and micro-interactions

**`responsive.css`** - Responsive design

- Mobile breakpoints (< 768px)

- Tablet breakpoints (768px - 1024px)

- Desktop optimizations (> 1024px)

- Touch-friendly interface adjustments

### JavaScript Files

**`script.js`** - Main application logic

- DOM manipulation and event handling

- Form submission and validation

- Counter animations for statistics

- FAQ accordion toggle functionality

- Navigation active state management

**`cursor.js`** - Custom cursor system

- Tracks mouse movement

- Creates interactive cursor effects

- Responds to hover states on interactive elements

- Smooth cursor animations

**`particles.js`** - Particle system

- Generates animated particles in hero section

- Canvas-based rendering for performance

- Configurable particle count and behavior

- Smooth animation loop

**`scroll.js`** - Scroll interactions

- Detects scroll position and triggers animations

- Reveals elements as they enter viewport

- Updates navbar on scroll

- Smooth scroll behavior for navigation links

## Customization

### Changing Colors

Edit the color variables in `css/style.css`:

```css
:root {
  --primary-color: #ffffff;
  --secondary-color: #000000;
  --accent-color: #c0c0c0;
  --glass-color: rgba(255, 255, 255, 0.1);
}
```

### Modifying Animations

Adjust animation timing in `css/animations.css`:

```css
.reveal {
  animation: revealUp 0.8s ease-out forwards;
}

@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Adding New Sections

1. Add HTML markup to `index.html`

1. Style in `css/style.css`

1. Add animations in `css/animations.css`

1. Add responsive styles in `css/responsive.css`

1. Add JavaScript logic to `js/script.js` if needed

### Updating Assets

Replace images in `assets/images/` with your own product photos. Update image paths in `index.html`:

```html
<img src="assets/images/your-image.jpg" alt="Description">
```

## Browser Support

- **Chrome** 90+

- **Firefox** 88+

- **Safari** 14+

- **Edge** 90+

Modern CSS features used:

- CSS Grid and Flexbox

- CSS Custom Properties (variables)

- CSS Animations and Transitions

- CSS Clip-path for diagonal sections

## Performance Optimization

### Current Optimizations

- No external dependencies (zero bloat)

- Efficient CSS with minimal repaints

- GPU-accelerated animations (transform + opacity only)

- Lazy-loaded images (native lazy loading)

- Minified CSS and JavaScript

### Tips for Further Optimization

1. **Image Optimization**: Use WebP format with PNG fallbacks

1. **Code Splitting**: Separate JavaScript into feature modules if needed

1. **Critical CSS**: Inline critical styles for faster first paint

1. **Asset Compression**: Gzip CSS/JS files on server

## Development Workflow

### Adding a New Feature

1. Create HTML structure in `index.html`

1. Style in appropriate CSS file

1. Add animations if needed

1. Implement JavaScript logic in `script.js`

1. Test on mobile, tablet, and desktop

1. Commit changes with descriptive messages

### Testing

- Test on multiple browsers

- Verify responsive design at breakpoints (320px, 768px, 1024px)

- Check animation performance on lower-end devices

- Validate HTML with W3C validator

- Test form submissions and interactions

## Deployment

### Static Hosting (Recommended)

Deploy to any static hosting service:

- **Netlify**: Drag and drop your folder

- **Vercel**: Connect your GitHub repository

- **GitHub Pages**: Push to `gh-pages` branch

- **AWS S3 + CloudFront**: For enterprise deployments

### Steps to Deploy

1. Ensure all assets are in the `assets/` folder

1. Test locally one final time

1. Upload all files to your hosting service

1. Configure custom domain (if applicable)

1. Enable HTTPS/SSL

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository

1. Create a feature branch (`git checkout -b feature/amazing-feature`)

1. Commit changes (`git commit -m 'Add amazing feature'`)

1. Push to branch (`git push origin feature/amazing-feature`)

1. Open a Pull Request

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact & Support

For questions, feedback, or support:

- **Email**: [support@unknown-skincare.com](mailto:support@unknown-skincare.com)

- **Website**: [https://unknown-skincare.com](https://unknown-skincare.com)

- **GitHub Issues**: [Report a bug](https://github.com/yourusername/unknown-skincare/issues)

## Credits

**Design & Development**: Sahana G

**Brand**: UNKNOWN Serum

**Year**: 2026

---

## Changelog

### Version 1.0.0 (Initial Release)

- Launch of UNKNOWN skincare website

- Responsive design for all devices

- Smooth animations and micro-interactions

- Contact form and newsletter subscription

- Testimonials and FAQ sections

- Before/after product comparison

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**

*"Reveal What Skin Can Become"*

