# Email Template Builder

A modern, intuitive React-based email template builder with Tailwind CSS styling. Create beautiful, responsive email templates with a drag-and-drop interface and export them as HTML or JSON.

## Features

### ✨ Core Features

- **Visual Template Builder**: Drag-and-drop interface for creating email templates
- **Live Preview**: Real-time preview of your email template with desktop and mobile views
- **Component Library**: Pre-built components including headers, text blocks, buttons, images, and dividers
- **Property Editor**: Comprehensive property panel for customizing component appearance
- **HTML Export**: Generate clean, email-client compatible HTML code
- **JSON Export**: Export templates in structured JSON format for storage and reuse
- **Template Management**: Save and manage multiple email templates

### 🎨 Customization Options

- **Colors**: Full color picker for backgrounds, text, and borders
- **Typography**: Multiple font sizes and text alignment options
- **Layout**: Flexible alignment and spacing controls
- **Images**: URL-based image insertion with alt text and sizing
- **Buttons**: Customizable call-to-action buttons with links

### 📧 Email Components

1. **Header**: Title and subtitle with custom backgrounds
2. **Text Block**: Rich text content with formatting options
3. **Button**: Call-to-action buttons with custom styling
4. **Image**: Responsive images with alignment controls
5. **Divider**: Horizontal separators with custom styling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:5173` to access the email template builder.

## Usage Guide

### Building Your First Template

1. **Add Components**: Click on components in the left sidebar to add them to your template
2. **Customize**: Click on any component in the preview to open the properties panel
3. **Edit Properties**: Use the right panel to modify colors, text, links, and styling
4. **Preview**: Toggle between desktop and mobile views to ensure responsiveness
5. **Export**: Use the header buttons to copy HTML or save as JSON

### Export Options

#### HTML Export

Generates email-client compatible HTML with inline CSS styles for maximum compatibility.

#### JSON Export

Creates structured data including template metadata, component configuration, and generated HTML code.

Built with ❤️ using React, Tailwind CSS, and Vite.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
