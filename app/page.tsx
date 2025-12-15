'use client'

import { useState } from 'react'
import { Search, ChefHat, Flame, Clock } from 'lucide-react'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Recipes', count: '1000+' },
    { id: 'veg', name: 'Vegetarian', count: '400+' },
    { id: 'chicken', name: 'Chicken', count: '350+' },
    { id: 'mutton', name: 'Mutton', count: '250+' },
  ]

  const featuredRecipes = [
    {
      id: 1,
      name: 'Butter Chicken',
      category: 'chicken',
      cuisine: 'North Indian',
      time: 45,
      difficulty: 'Medium',
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400'
    },
    {
      id: 2,
      name: 'Paneer Butter Masala',
      category: 'veg',
      cuisine: 'North Indian',
      time: 30,
      difficulty: 'Easy',
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400'
    },
    {
      id: 3,
      name: 'Mutton Rogan Josh',
      category: 'mutton',
      cuisine: 'Kashmiri',
      time: 90,
      difficulty: 'Hard',
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400'
    },
    {
      id: 4,
      name: 'Masala Dosa',
      category: 'veg',
      cuisine: 'South Indian',
      time: 40,
      difficulty: 'Medium',
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400'
    },
    {
      id: 5,
      name: 'Chicken Biryani',
      category: 'chicken',
      cuisine: 'Hyderabadi',
      time: 60,
      difficulty: 'Hard',
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400'
    },
    {
      id: 6,
      name: 'Dal Makhani',
      category: 'veg',
      cuisine: 'Punjabi',
      time: 120,
      difficulty: 'Medium',
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ChefHat className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">Desh Ka Swaad</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-primary">Home</a>
              <a href="#" className="text-gray-700 hover:text-primary">Recipes</a>
              <a href="#" className="text-gray-700 hover:text-primary">Categories</a>
              <a href="#" className="text-gray-700 hover:text-primary">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Discover Authentic Indian Recipes
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            1000+ recipes from across India - Veg, Chicken & Mutton
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for recipes, ingredients, or cuisines..."
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-primary focus:outline-none text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-6 rounded-xl border-2 transition-all ${
                selectedCategory === category.id
                  ? 'border-primary bg-primary text-white'
                  : 'border-gray-200 bg-white hover:border-primary'
              }`}
            >
              <div className="text-2xl font-bold">{category.count}</div>
              <div className="text-sm mt-1">{category.name}</div>
            </button>
          ))}
        </div>

        {/* Featured Recipes */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Featured Recipes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className="relative h-48">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                    {recipe.category}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{recipe.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{recipe.cuisine}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{recipe.time} min</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Flame className="w-4 h-4 text-orange-500" />
                      <span>{'🌶️'.repeat(recipe.spiceLevel)}</span>
                    </div>
                    <div className="px-2 py-1 bg-gray-100 rounded">
                      {recipe.difficulty}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">🍛 Desh Ka Swaad</p>
          <p className="text-gray-400">Bringing authentic Indian flavors to your kitchen</p>
          <p className="text-gray-500 text-sm mt-4">© 2025 Desh Ka Swaad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}