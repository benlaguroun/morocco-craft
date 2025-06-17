# Maroc Chic - E-commerce Platform Documentation

## Table of Contents

1. [Project Overview](#projct-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Setup Instructions](#setup-instructions)
6. [Page Documentation](#page-documentation)
7. [Component Documentation](#component-documentation)
8. [Context & State Management](#context--state-management)
9. [Data Structure](#data-structure)
10. [Styling & Theme](#styling--theme)
11. [Routing](#routing)
12. [Local Storage](#local-storage)
13. [Development Guidelines](#development-guidelines)
14. [Deployment](#deployment)
15. [Troubleshooting](#troubleshooting)

## Project Overview

Maroc Chic is a modern e-commerce platform showcasing authentic Moroccan handicrafts, jewelry, bags, and accessories. The platform celebrates Morocco's vibrant culture and rich craftsmanship, featuring handmade products by local artisans.

### Key Highlights

- Responsive design with glass morphism aesthetic
- Product browsing and filtering
- Shopping cart functionality
- Multiple page navigation
- Dark/light theme support
- Professional business pages

## Features

### Core E-commerce Features

- **Product Catalog**: Browse products by category (jewelry, bags, accessories)
- **Product Details**: Detailed product pages with image galleries
- **Shopping Cart**: Add/remove items, quantity management, persistent storage
- **Checkout Process**: Complete order flow with payment options
- **Order Confirmation**: Post-purchase confirmation pages

### User Experience Features

- **Responsive Design**: Mobile-first approach with desktop optimization
- **Theme Toggle**: Dark/light mode switching
- **Glass Morphism UI**: Modern transparent glass effect design
- **Product Filtering**: Filter by category and sort by price
- **Wishlist**: Save favorite products (stored locally)
- **Newsletter Signup**: Email collection for marketing

### Business Pages

- **Home Page**: Hero section, categories, bestsellers, testimonials
- **About Page**: Company story and mission
- **Contact Page**: Contact form and company information
- **Privacy Policy**: Data protection and privacy information

## Technology Stack

### Frontend Framework

- **React 18.3.1**: Component-based UI library
- **TypeScript**: Type-safe JavaScript development
- **Vite**: Fast build tool and development server

### Styling & UI

- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built accessible components
- **Lucide React**: Modern icon library
- **Custom CSS**: Glass morphism effects and animations

### State Management

- **React Context**: Cart state management
- **React Hooks**: Local state management
- **Local Storage**: Persistent cart and wishlist data

### Routing & Navigation

- **React Router DOM 6.26.2**: Client-side routing
- **Dynamic imports**: Code splitting for performance

### Development Tools

- **ESLint**: Code linting and quality
- **TypeScript**: Static type checking
- **Vite**: Development server and build optimization

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── home/            # Home page specific components
│   ├── CartBadge.tsx    # Shopping cart indicator
│   ├── CategoryCard.tsx # Category display cards
│   ├── Footer.tsx       # Site footer
│   ├── GlassContainer.tsx # Glass morphism wrapper
│   ├── Header.tsx       # Site header and navigation
│   ├── MobileNav.tsx    # Mobile navigation menu
│   ├── NewsletterForm.tsx # Email signup form
│   ├── ProductCard.tsx  # Product display cards
│   └── ThemeToggle.tsx  # Dark/light mode toggle
├── contexts/            # React Context providers
│   └── CartContext.tsx  # Shopping cart state management
├── data/               # Static data and product information
│   ├── accessories.ts   # Accessories product data
│   ├── bags.ts         # Bags product data
│   ├── jewelry.ts      # Jewelry product data
│   └── index.ts        # Consolidated data exports
├── hooks/              # Custom React hooks
│   ├── use-mobile.tsx  # Mobile device detection
│   └── use-toast.ts    # Toast notification system
├── lib/                # Utility functions
│   └── utils.ts        # Tailwind class merging utilities
├── pages/              # Page components
│   ├── About.tsx       # About page
│   ├── AboutContact.tsx # Combined about/contact page
│   ├── Cart.tsx        # Shopping cart page
│   ├── Checkout.tsx    # Checkout process page
│   ├── Contact.tsx     # Contact form page
│   ├── Index.tsx       # Home page
│   ├── NotFound.tsx    # 404 error page
│   ├── OrderConfirmation.tsx # Order success page
│   ├── PrivacyPolicy.tsx # Privacy policy page
│   ├── ProductDetail.tsx # Individual product pages
│   └── Products.tsx    # Product listing page
└── App.tsx             # Main application component
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <your-repository-url>
   cd maroc-chic
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Page Documentation

### Home Page (`/`)

- **Hero Section**: Main banner with call-to-action
- **Gender Section**: Men's and women's collections
- **Features Section**: Shipping, authenticity, returns info
- **Categories Section**: Product category navigation
- **Bestsellers Section**: Featured products display
- **Testimonials Section**: Customer reviews
- **About Section**: Company information preview
- **Newsletter Form**: Email signup

### Products Page (`/products`)

- **Product Grid**: Responsive product card layout
- **Filtering**: Category-based filtering via URL parameters
- **Sorting**: Price and popularity sorting options
- **Search Results**: Dynamic product count display

### Product Detail Page (`/products/:id`)

- **Image Gallery**: Multiple product images with thumbnails
- **Product Information**: Name, price, description, materials
- **Action Buttons**: Add to cart, wishlist toggle
- **Related Products**: Same category recommendations
- **Responsive Design**: Mobile-optimized layout

### Shopping Cart Page (`/cart`)

- **Cart Items**: List of added products with quantities
- **Quantity Controls**: Increase/decrease item quantities
- **Price Calculation**: Subtotal, tax, and total calculation
- **Remove Items**: Delete products from cart
- **Checkout Link**: Proceed to checkout process

### Checkout Page (`/checkout`)

- **Customer Information**: Name, email, address forms
- **Payment Methods**: Cash on delivery, credit card options
- **Order Summary**: Final price breakdown
- **Order Placement**: Complete purchase process

### Business Pages

- **About** (`/about`): Company story and mission
- **Contact** (`/contact`): Contact form and information
- **Privacy Policy** (`/privacy-policy`): Legal information

## Component Documentation

### Core Components

#### `Header.tsx`

- Navigation menu with logo
- Theme toggle integration
- Cart badge with item count
- Mobile responsive menu

#### `ProductCard.tsx`

- Product image and information display
- Price formatting and display
- Add to cart functionality
- Hover effects and animations

#### `CartBadge.tsx`

- Cart item count display
- Links to cart page
- Real-time updates from cart context

#### `GlassContainer.tsx`

- Reusable glass morphism wrapper
- Customizable styling props
- Backdrop blur effects

### Home Page Components

#### `HeroSection.tsx`

- Main banner with hero image
- Call-to-action buttons
- Responsive typography

#### `CategoriesSection.tsx`

- Category navigation cards
- Product category filtering links
- Visual category representations

#### `BestsellersSection.tsx`

- Featured products display
- Product card grid layout
- Dynamic product loading

## Context & State Management

### CartContext

Located in `src/contexts/CartContext.tsx`

#### State Structure

```typescript
type CartProduct = {
  id: string;
  quantity: number;
};

type CartContextType = {
  cart: CartProduct[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalCount: () => number;
};
```

#### Key Functions

- **addToCart**: Add product or increment quantity
- **removeFromCart**: Remove product completely
- **updateQty**: Change product quantity
- **clearCart**: Empty entire cart
- **getTotalCount**: Get total item count

#### Persistence

- Cart data stored in localStorage
- Automatic sync between sessions
- Legacy cart format migration support

## Data Structure

### Product Interface

```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  images?: string[]; // Optional image gallery
  category: "jewelry" | "bags" | "accessories";
  desc: string;
  materials: string;
  dimensions: string;
}
```

### Data Organization

- **jewelry.ts**: Ring, necklace, bracelet products
- **bags.ts**: Handbag, clutch, tote products
- **accessories.ts**: Ceramic, textile, decorative items
- **index.ts**: Consolidated exports and featured products

## Styling & Theme

### Design System

- **Primary Colors**: Gold (#D4AF37), Emerald (#10B981)
- **Background**: Sand to emerald gradient
- **Glass Effect**: Backdrop blur with transparency
- **Typography**: Display fonts for headings, sans-serif for body

### Tailwind Configuration

Custom colors and styles defined in `tailwind.config.ts`:

- `gold`: Primary brand color
- `sand`: Background accent
- `emerald`: Secondary accent
- `glassBg`: Glass container background

### Responsive Breakpoints

- **Mobile**: Default (0px+)
- **Tablet**: md (768px+)
- **Desktop**: lg (1024px+)
- **Large**: xl (1280px+)

## Routing

### Route Structure

```
/ - Home page
/products - Product listing
/products/:id - Product detail
/cart - Shopping cart
/checkout - Checkout process
/order-confirmation - Order success
/about - About page
/contact - Contact page
/privacy-policy - Privacy policy
/about-contact - Combined about/contact
/* - 404 Not Found
```

### Navigation Components

- **Header**: Main navigation menu
- **Footer**: Secondary navigation links
- **MobileNav**: Mobile-specific navigation

## Local Storage

### Data Persistence

- **Cart**: `localStorage.cart` - Shopping cart contents
- **Wishlist**: `localStorage.wishlist` - Saved products
- **Theme**: Theme preference (handled by theme provider)

### Storage Functions

```typescript
const getLocal = <T>(key: string, fallback: T): T
const setLocal = <T>(key: string, value: T): void
```

## Development Guidelines

### Code Organization

- **Components**: Reusable UI elements in `/components`
- **Pages**: Route-specific components in `/pages`
- **Hooks**: Custom React hooks in `/hooks`
- **Utils**: Helper functions in `/lib`
- **Data**: Static data in `/data`

### TypeScript Standards

- Strict type checking enabled
- Interface definitions for all data structures
- Proper prop typing for components
- Generic type utilities where applicable

### Component Standards

- Functional components with hooks
- Props interface definitions
- Default export pattern
- Descriptive component and prop names

### Styling Guidelines

- Tailwind utility classes preferred
- Custom CSS for complex effects
- Responsive design patterns
- Accessibility considerations

## Deployment

### Build Process

```bash
npm run build
```

Generates optimized production files in `/dist`

### Deployment Platforms

- **Lovable**: Native platform deployment
- **Vercel**: Frontend hosting
- **Netlify**: Static site hosting
- **GitHub Pages**: Repository-based hosting

### Environment Setup

- No environment variables required for basic functionality
- Payment integration would require API keys
- Analytics tracking would need configuration

## Troubleshooting

### Common Issues

#### Cart Not Working

- Check CartProvider wrapping in App.tsx
- Verify localStorage permissions
- Clear browser localStorage data
- Check console for JavaScript errors

#### Routing Issues

- Verify React Router configuration
- Check route path definitions
- Ensure proper Link component usage

#### Styling Problems

- Check Tailwind CSS compilation
- Verify custom CSS imports
- Review responsive design classes

#### Build Failures

- Check TypeScript type errors
- Verify all imports are correct
- Review package.json dependencies

### Debug Tools

- React Developer Tools browser extension
- Browser console for error messages
- Network tab for failed requests
- Lighthouse for performance auditing

### Performance Tips

- Use React.memo() for expensive components
- Implement code splitting for large pages
- Optimize images for web delivery
- Monitor bundle size with build tools

---

## Contributing

When contributing to this project:

1. Follow the established code organization patterns
2. Maintain TypeScript strict typing
3. Add proper component documentation
4. Test responsive design thoroughly
5. Ensure accessibility standards compliance

## License

This project is proprietary to Maroc Chic. All rights reserved.

---

_Last updated: [Current Date]_
_Documentation version: 1.0_
