import type { Product } from '@/products/data/products';
import { cookies } from 'next/headers';
import { products } from '@/products/data/products';
import { ItemCard } from '@/shopping-cart';
import { WidgetItem } from '@/components';

export const metadata = {
  title: 'Carrito de compras',
  description: 'SEO title',
};

interface ProductInCart {
  product: Product;
  quantity: number;
}

const getProductInCart = (cart: { [id: string]: number }) => {
  const productsInCart: ProductInCart[] = [];

  for (const id of Object.keys(cart)) {
    const product = products.find((prod) => prod.id === id);

    if (product) {
      productsInCart.push({ product, quantity: cart[id] });
    }
  }

  return productsInCart;
};

export default function CartPage() {
  const cookieStore = cookies();
  const cart = JSON.parse(cookieStore.get('cart')?.value ?? '{}') as {
    [id: string]: number;
  };
  const productsInCart = getProductInCart(cart);

  const totalPay = productsInCart.reduce(
    (prev, current) => current.product.price * current.quantity + prev,
    0,
  );

  return (
    <div>
      <h1 className="text-5xl text-black">Productos en el carrito</h1>
      <hr className="mb-2 dark:border-2 dark:border-b-gray-800" />

      <div className="flex w-full flex-col gap-2 sm:flex-row">
        <div className="flex w-full flex-col gap-2 sm:w-8/12">
          {
            productsInCart.map(({ product, quantity }) => (
              <ItemCard key={product.id} product={product} quantity={quantity} />
            ))
          }
        </div>

        <div className="flex w-full flex-col gap-2 sm:w-4/12">
          <WidgetItem title="Total a Pagar">
            <div className="mt-2 flex justify-center gap-4">
              <h3 className="text-3xl font-bold text-gray-700">
                ${(totalPay * 1.15).toFixed(2)}
              </h3>
            </div>
            <span className="text-center font-bold text-gray-500">
              Impuestos 15% ${(totalPay * 0.15).toFixed(2)}
            </span>
          </WidgetItem>
        </div>
      </div>
    </div>
  );
}
