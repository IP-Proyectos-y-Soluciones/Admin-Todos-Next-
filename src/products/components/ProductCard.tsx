'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoAddCircleOutline, IoTrashOutline } from 'react-icons/io5';
import { Star } from './Star';
import { addProductToCart } from '@/shopping-cart/actions/actions';
import { removeProductFromCart } from '../../shopping-cart/actions/actions';

interface Props {
    id    : string;
		name  : string;
		price : number;
		rating: number;
		image : string;
}

export const ProductCard = ({ id, name, price, rating, image }:Props) => {

	const router = useRouter();

	const onAddToCart = () => {
		addProductToCart(id);
		router.refresh();
	}

	const onRemoveFromCart = () => {
		removeProductFromCart(id);
		router.refresh();
	}

  return (
    <div className="max-w-sm rounded-lg bg-white shadow dark:border-gray-100 dark:bg-gray-800">
      {/* Product Image */}
      <div className="p-2">
        <Image
          width={500}
          height={500}
          className="rounded"
          src={ image }
          alt="product image"
        />
      </div>

      {/* Title */}
      <div className="px-5 pb-5">
        <a href="#">
          <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            { name }
          </h3>
        </a>
        <div className="mt-2.5 mb-5 flex items-center">
          {/* Stars */}
					{
						Array(rating).fill(0).map((x,i) => (
							<Star key={ i } />
						))
					}

          {/* Rating Number */}
          <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
            { rating.toFixed(2) }
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${ price.toFixed(2) }
          </span>

          <div className="flex">
            <button 
							onClick={ onAddToCart }
							className="mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <IoAddCircleOutline size={25} />
            </button>
            <button 
							onClick={ onRemoveFromCart }
							className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              <IoTrashOutline size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
