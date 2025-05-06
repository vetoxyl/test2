/*
  # Create profiles table and setup auth

  1. New Tables
    - `profiles`
        - `id` (uuid, primary key, references auth.users)
        - `full_name` (text)
        - `avatar_url` (text)
        - `created_at` (timestamp)
        - `last_sign_in` (timestamp)
        - `current_weight` (numeric)
        - `goal_weight` (numeric)
        - `weekly_progress` (text)
        - `daily_calorie_limit` (numeric)
    - `meal_plans`
        - `id` (uuid, primary key)
        - `name` (text)
        - `ingredients` (text)
        - `calorie_count` (numeric)
        - `sodium_content` (numeric)
        - `dietary_category` (text)
  
  2. Security
    - Enable RLS on `profiles` table
    - Add policies for authenticated users to:
      - Read their own profile
      - Update their own profile
*/

CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  full_name text,
  avatar_url text,
    created_at timestamptz DEFAULT now(),
    current_weight numeric,
    goal_weight numeric,
    weekly_progress text,
    daily_calorie_limit numeric,
  last_sign_in timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Create a secure function to handle new user profiles
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Set up trigger to create profile on signup
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();


-- Create the meal_plans table
CREATE TABLE meal_plans (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT,
    ingredients TEXT,
    calorie_count NUMERIC,
    sodium_content NUMERIC,
    dietary_category TEXT
);