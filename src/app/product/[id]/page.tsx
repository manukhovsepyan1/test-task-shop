import getProduct from "@/actions/get-product";
import Info from "@/components/info";
import Container from "@/components/ui/container";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const { id } = await params
  const product = await getProduct(id);

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Info data={product} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;

