# Wee Invest Global Pvt. Ltd. Website

A form-based investment website built with Next.js and Supabase.

## Features

- Modern UI with Tailwind CSS
- Form-based investment platform
- Supabase backend integration
- TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18.x or later
- Supabase account (for backend functionality)

### Setup

1. Clone the repository

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   - Copy `.env.local.example` to `.env.local`
   - Fill in your Supabase credentials from your Supabase dashboard

4. Run the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `src/app`: Next.js App Router pages
- `src/components`: Reusable UI components
- `src/lib`: Utility functions and configurations

## Form Components

The project includes a sample investment form component that can be extended for various investment types. The form is connected to Supabase for data storage.

## Deployment

This project can be deployed on Vercel or any other hosting platform that supports Next.js applications.

```bash
npm run build
```

## License

All rights reserved. This project is proprietary to Wee Invest Global Pvt. Ltd.
