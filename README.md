# Copiers Solutions Website

A modern, responsive website for Copiers Solutions - your trusted partner for photocopier machines from leading brands like Canon and Kyocera. The website offers information about both sales and rental services with direct contact options for customer inquiries.

## Features

### 🏠 **Homepage**
- Hero section with company introduction
- Featured photocopier machines
- Customer testimonials
- Business statistics and achievements
- Direct contact information

### 📱 **Responsive Design**
- Mobile-first design approach
- Optimized for all screen sizes
- Modern UI with Tailwind CSS
- Smooth animations and transitions

### 🖥️ **Machine Catalog**
- Complete collection of photocopiers
- Advanced filtering (brand, category, type, price range)
- Search functionality
- Detailed machine specifications
- High-quality product images

### 📄 **Machine Details**
- Comprehensive product information
- Image gallery with multiple views
- Technical specifications
- Features and benefits
- Direct inquiry options (email/phone)

### 👥 **About Us**
- Company information and history
- Team member profiles
- Mission and values
- Service offerings

### 📞 **Contact**
- Multiple contact methods (phone, email, visit)
- Contact form that opens email client
- Business hours and location
- Frequently asked questions
- Interactive contact options

## Technology Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Deployment**: Vercel (configured)

## Contact Information

- **Phone**: 99887 76655
- **Email**: keshav@gmail.com
- **Address**: 1, Mahadev Apt, Nashik, Maharashtra, India
- **Business Hours**: 
  - Monday - Friday: 9:00 AM - 6:00 PM
  - Saturday: 9:00 AM - 4:00 PM
  - Sunday: Closed

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd copiers-solutions
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Visit `http://localhost:3000` to view the website.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment

The website is configured for deployment on Vercel with proper SPA routing support via `vercel.json`.

### Deploy to Vercel

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

Or connect your GitHub repository to Vercel for automatic deployments.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation bar
│   └── Footer.js       # Footer component
├── pages/              # Main page components
│   ├── Home.js         # Homepage
│   ├── Machines.js     # Machine catalog
│   ├── MachineDetail.js # Individual machine details
│   ├── About.js        # About page
│   └── Contact.js      # Contact page
├── data/               # Static data
│   └── machineData.js  # Machine information
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles
```

## Key Features

### Machine Catalog
- 8 different photocopier models from Canon and Kyocera
- Detailed specifications and pricing
- High-quality product images
- Filtering and search capabilities

### Contact Integration
- Direct phone links for instant calling
- Email links that open default email client
- Contact forms that generate pre-filled emails
- Clear business information and hours

### User Experience
- Fast loading times
- Intuitive navigation
- Professional design
- Mobile-responsive layout

## Customization

### Adding New Machines
Edit `src/data/machineData.js` to add new photocopier models:

```javascript
{
  id: 9,
  name: "New Machine Model",
  brand: "Canon",
  price: 25000,
  // ... other properties
}
```

### Updating Contact Information
Update contact details in:
- `src/components/Navbar.js`
- `src/components/Footer.js`
- `src/pages/Contact.js`
- `src/pages/Home.js`

### Styling
- Global styles: `src/index.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styling using Tailwind classes

## Support

For technical support or inquiries about the website:
- **Email**: keshav@gmail.com
- **Phone**: 99887 76655

## License

This project is proprietary and confidential. All rights reserved to Copiers Solutions.

---

**Copiers Solutions** - Your trusted partner for photocopier machines from Canon, Kyocera, and more. Quality machines, reliable service, competitive prices. 