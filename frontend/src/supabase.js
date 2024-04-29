import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://zwhdkkmxqvkbjpbxraah.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3aGRra214cXZrYmpwYnhyYWFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNDc2MzAsImV4cCI6MjAyOTkyMzYzMH0.LVC0IY0ee-uY5uDmzdyTKlqVlkF4Ny-Ox64mQjGsS9w"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)