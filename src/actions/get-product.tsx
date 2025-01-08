import { Product } from "@/types/product"

const URL = `${process.env.PUBLIC_API_URL}/products`

const getProduct = async ( id: string ): Promise<Product> => {
    const res = await fetch(`${URL}/${id}`, {
        cache: 'no-store',
      });
      if(!res.ok) {
        throw new Error('Failed to fatch data');
      }
      const data = await res.json()
      return data
}

  

export default getProduct;