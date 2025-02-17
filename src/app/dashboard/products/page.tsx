import { ProductCard } from '@/products';
import { products } from '@/products/data/products';

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
      {/* ProductsCard */}
      {
        products.map((product) => (
            <ProductCard key={ product.id } { ...product } />
        ))
      }
    </div>
  );
}
