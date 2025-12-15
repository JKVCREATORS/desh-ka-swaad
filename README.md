# 🍛 Desh Ka Swaad

A comprehensive Indian recipe app featuring 1000+ authentic recipes from across India.

## Features

- 🥗 **400+ Vegetarian Recipes** - Paneer, Dal, Sabzi, Rice, Breads, Snacks, Desserts
- 🍗 **350+ Chicken Recipes** - Curries, Biryani, Tandoori, Regional Specialties
- 🍖 **250+ Mutton Recipes** - Curries, Biryani, Regional Delicacies
- 📸 High-quality recipe images
- 🔍 Search and filter by cuisine, type, difficulty
- ⏱️ Cooking time and difficulty levels
- 📝 Step-by-step instructions
- 🌶️ Spice level indicators

## Tech Stack

- **Frontend**: Next.js 14 + React + TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Deployment**: Vercel
- **Images**: Unsplash API

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/JKVCREATORS/desh-ka-swaad.git
cd desh-ka-swaad
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Database Schema

### Recipes Table
- id (uuid)
- name (text)
- category (veg/chicken/mutton)
- cuisine (text)
- difficulty (easy/medium/hard)
- cooking_time (integer)
- ingredients (jsonb)
- instructions (text[])
- image_url (text)
- spice_level (integer)
- created_at (timestamp)

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JKVCREATORS/desh-ka-swaad)

## License

MIT License

## Created By

Varad Nerurkar - Desh Ka Swaad Team