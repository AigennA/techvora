-- Create favorites table for users to like products
CREATE TABLE public.favorites (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  product_price NUMERIC NOT NULL,
  product_image TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, product_id)
);

-- Enable Row Level Security
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;

-- Create policies for favorites
CREATE POLICY "Users can view their own favorites" 
ON public.favorites 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can add to their favorites" 
ON public.favorites 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove from their favorites" 
ON public.favorites 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create index for faster queries
CREATE INDEX idx_favorites_user_id ON public.favorites(user_id);
CREATE INDEX idx_favorites_product_id ON public.favorites(product_id);