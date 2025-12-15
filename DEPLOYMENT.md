# 🚀 Deployment Guide - Desh Ka Swaad

## Quick Deploy (5 Minutes)

### Step 1: Deploy to Vercel (2 minutes)

**Option A: One-Click Deploy**
1. Click this button: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JKVCREATORS/desh-ka-swaad)
2. Sign in with GitHub
3. Click "Deploy"
4. Wait for deployment to complete

**Option B: Manual Deploy**
1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import `JKVCREATORS/desh-ka-swaad`
4. Click "Deploy"

**Your app will be live at:** `https://desh-ka-swaad.vercel.app`

---

### Step 2: Set Up Supabase Database (3 minutes)

1. **Create Supabase Project:**
   - Go to https://supabase.com
   - Click "New Project"
   - Name: `desh-ka-swaad`
   - Database Password: (create a strong password)
   - Region: Choose closest to you
   - Click "Create Project" (takes 2 minutes)

2. **Run Database Schema:**
   - In Supabase dashboard, go to "SQL Editor"
   - Click "New Query"
   - Copy content from `database/schema.sql` in your repo
   - Click "Run"
   - ✅ Tables created!

3. **Get API Keys:**
   - Go to "Project Settings" → "API"
   - Copy:
     - `Project URL`
     - `anon public` key

4. **Add to Vercel:**
   - Go to your Vercel project
   - Settings → Environment Variables
   - Add:
     - `NEXT_PUBLIC_SUPABASE_URL` = your project URL
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your anon key
   - Click "Save"
   - Go to "Deployments" → Click "..." → "Redeploy"

---

### Step 3: Add Sample Recipes (1 minute)

1. In Supabase dashboard, go to "Table Editor"
2. Select "recipes" table
3. Click "Insert" → "Insert row"
4. Or use the SQL Editor to bulk insert from `data/sample-recipes.json`

**SQL to insert sample recipe:**
```sql
INSERT INTO recipes (name, category, cuisine, difficulty, cooking_time, prep_time, servings, ingredients, instructions, image_url, spice_level, tags)
VALUES (
  'Butter Chicken',
  'chicken',
  'North Indian',
  'medium',
  45,
  20,
  4,
  '[{"name":"Chicken","quantity":"500","unit":"grams"}]'::jsonb,
  ARRAY['Marinate chicken', 'Cook in butter', 'Add cream'],
  'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
  2,
  ARRAY['popular', 'creamy']
);
```

---

## 🎉 You're Live!

**Your app is now accessible at:**
- Production: `https://desh-ka-swaad.vercel.app`
- Or your custom domain (if configured)

---

## Optional: Custom Domain

1. In Vercel project settings
2. Go to "Domains"
3. Add your domain (e.g., `deshkaswaad.com`)
4. Follow DNS configuration steps

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Supabase Docs: https://supabase.com/docs
- GitHub Repo: https://github.com/JKVCREATORS/desh-ka-swaad

---

## What's Next?

- [ ] Add more recipes (we can help with 1000+)
- [ ] Enable user authentication
- [ ] Add favorites feature
- [ ] Implement ratings & reviews
- [ ] Add recipe submission form
- [ ] Mobile app version

**Ready to add 1000+ recipes? Just ask!** 🍛