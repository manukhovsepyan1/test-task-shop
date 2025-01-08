import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import getProducts from "@/actions/get-products";
import getCategories from "@/actions/get-categories";

export default async function Home() {
  const products = await getProducts();
  const categories = await getCategories()
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList items={products} categories={categories} />
        </div>
      </div>
    </Container>
  );
}
