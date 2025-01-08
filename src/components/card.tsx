
"use client";
import Image from 'next/image';
import { Product } from '@/types/product';
import { useRouter } from 'next/navigation';
import Button from './ui/button';

type cardProps = {
    key: number;
    data: Product
};


const Card: React.FC<cardProps> = ({ data }) => {
    const router = useRouter();
    
    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    };

    return (
        <div className="container mx-auto my-4">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md w-72">
                <Image
                    priority
                    src={data.images[0]}
                    alt={data.title}
                    width={300}
                    height={200}
                    style={{
                        maxHeight: '180px',
                        objectFit: 'contain',
                    }}
                />
                <div className="p-4">
                    <div className="flex justify-center items-start">
                        <h4 className="text-lg font-semibold truncate overflow-hidden whitespace-nowrap">
                            {data.title}
                        </h4>
                    </div>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 p-4">
                    <h5 className="text-lg font-bold text-gray-800 mr-2" >${data.price}</h5>
                    <Button text={'Show More Info'}  onClick={handleClick}/>
                </div>
            </div>
        </div>
    )
};

export default Card;