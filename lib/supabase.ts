import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Recipe {
  id: string
  name: string
  category: 'veg' | 'chicken' | 'mutton'
  cuisine: string
  difficulty: 'easy' | 'medium' | 'hard'
  cooking_time: number
  prep_time: number
  servings: number
  ingredients: Ingredient[]
  instructions: string[]
  image_url: string
  spice_level: number
  calories?: number
  protein?: number
  tags: string[]
  created_at: string
  updated_at: string
}

export interface Ingredient {
  name: string
  quantity: string
  unit: string
}

// Fetch all recipes
export async function getRecipes(category?: string) {
  let query = supabase.from('recipes').select('*')
  
  if (category && category !== 'all') {
    query = query.eq('category', category)
  }
  
  const { data, error } = await query.order('created_at', { ascending: false })
  
  if (error) throw error
  return data as Recipe[]
}

// Fetch single recipe
export async function getRecipe(id: string) {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) throw error
  return data as Recipe
}

// Search recipes
export async function searchRecipes(query: string) {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .or(`name.ilike.%${query}%,cuisine.ilike.%${query}%,tags.cs.{${query}}`)
  
  if (error) throw error
  return data as Recipe[]
}