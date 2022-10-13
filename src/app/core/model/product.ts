export interface Product {
  id?: string;
  title?: string;
  price?: string;
  description?: string;
  image?: string;
  weight?: string;
  subcategory_id?: string;
  created_at?: string;
  updated_at?: string;
  subcategory?: Subcategory;
}

export interface Subcategory {
  id?: string;
  name?: string;
  category_id?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Category {
  id?: string;
  name?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}
