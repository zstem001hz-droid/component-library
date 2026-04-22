import React from "react";
import type { ProductDisplayProps } from "../../types/index";

// ProductDisplay = Displays product information with configurable display options
export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}) => {
  console.log("ProductDisplay rendered - product:", product.name);

  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
      {/* Renders product image if imageUrl is provided */}
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
      <p className="text-xl font-bold text-gray-900 mt-1">
        ${product.price.toFixed(2)}
      </p>

      {/* Conditionally renders description based on prop */}
      {showDescription && (
        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
      )}

      {/* Conditionally renders stock status with color indicator */}
      {showStockStatus && (
        <p
          className={`text-sm font-medium mt-2 ${product.inStock ? "text-green-600" : "text-red-600"}`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      )}

      {/* Renders children with visual separator if provided */}
      {children && (
        <div className="border-t border-gray-100 pt-3 mt-3">{children}</div>
      )}

      {/* Only renders Add to Cart button if onAddToCart handler was provided */}
      {onAddToCart && (
        <button
          onClick={() => {
            console.log("Add to Cart clicked - productId:", product.id);
            onAddToCart(product.id);
          }}
          disabled={!product.inStock}
          className={`mt-4 px-4 py-2 rounded text-sm text-white ${
            product.inStock
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
