import { Product } from "@/types/product";

const URL = `https://dummyjson.com/products`;

interface Query {
  category?: string;
  searchQuery?: string;
}

const getProducts = async (query: Query = {}): Promise<Product[]> => {
  let url = URL
  if (query?.category) url = `${URL}/category/${query?.category}`
  if (query?.searchQuery) url = `${URL}/search?q=${query?.searchQuery}`
    const res = await fetch(`${url}`, {
    cache: 'no-store',
  });

  if(!res.ok) {
    throw new Error('Failed to fatch data');
  }
  const data = await res.json()
  return data.products

}
export default getProducts;