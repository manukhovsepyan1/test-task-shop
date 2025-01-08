
const URL = `${process.env.PUBLIC_API_URL}/products`

const getCategories = async (): Promise<Array<string>> => {
    const res = await fetch(`${URL}/category-list`, {
        cache: 'no-store',
      });
      if(!res.ok) {
        throw new Error('Failed to fatch data');
      }
      const data = await res.json()
      return data
}

export default getCategories;
