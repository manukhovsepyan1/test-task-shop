"use client";
import { useEffect, useState, useCallback } from "react";
import { Product } from "@/types/product";
import NoResults from "./ui/no-results";
import Card from "./card";
import getProducts from "@/actions/get-products";
import { ClipLoader } from "react-spinners"; // Import the loader
import { debounce } from '@/lib/debounce';

interface ProductListProps {
    items: Product[];
    categories: Array<string>;
}

const ProductList: React.FC<ProductListProps> = ({
    items,
    categories,
}) => {
    const [data, setData] = useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setData(items);
    }, [items]);

    const fetchProducts = async (params: { category?: string; searchQuery?: string }) => {
        setIsLoading(true);
        const products = await getProducts(params);
        setData(products);
        setIsLoading(false);
    };

    const debouncedSearch = useCallback(
        debounce((query: string) => {
            fetchProducts({ searchQuery: query });
            setSelectedCategory("");
        }, 500),
        [debounce]
    );

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        debouncedSearch(query);
    };

    const handleCategoryChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const category = e.target.value;
        setSearchQuery("");
        setSelectedCategory(category);
        fetchProducts({ category });
    };

    return (
        <>
            <div className="flex flex-col gap-4 px-4 sm:px-6 lg:px-8">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="border rounded px-4 py-2"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <select
                    className="border rounded px-4 py-2"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <option value="">All Categories</option>
                    {categories.map((category: string) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            {isLoading ? (
                <div className="flex justify-center items-center h-40">
                    <ClipLoader size={50} color="#4A90E2" />
                </div>
            ) : (
                <div className="space-y-4">
                    {data.length === 0 && <NoResults />}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {data.map((item) => (
                            <Card key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductList;
