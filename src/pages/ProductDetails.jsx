import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { axiosInstants } from "../config/axiosInstants";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // For navigation after delete

  const [productDetails, setProductDetails] = useState(null);

  const getProductById = async () => {
    try {
      const response = await axiosInstants({
        method: "GET",
        url: `/product/get_product/${id}`,
      });
      setProductDetails(response.data.product);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleDelete = async () => {
    try {
      const response = await axiosInstants({
        method: "DELETE",
        url: `/product/delete_product/${id}`,
      });
      if (response.status === 200) {
        console.log("Product deleted successfully");
        // Redirect to another page (e.g., product list) after deletion
        navigate("/products");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    getProductById();
  }, []);

  if (!productDetails) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 text-xl">
        Loading product...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-10">
        {/* Edit Button */}
        <button
          onClick={() => {
            navigate(`/product_edit/${id}`);
          }}
          className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1.5 rounded-md flex items-center gap-2 hover:bg-indigo-700 transition text-sm"
        >
          Edit
        </button>

        {/* Delete Button */}
        <button
          onClick={handleDelete}
          className="absolute top-4 right-20 bg-red-600 text-white px-3 py-1.5 rounded-md flex items-center gap-2 hover:bg-red-700 transition text-sm"
        >
          Delete
        </button>

        {/* Image */}
        <div className="bg-gray-100 flex items-center justify-center p-6">
          <img
            src={productDetails.image}
            alt={productDetails.name}
            className="w-full h-auto max-h-[400px] object-contain rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="p-6 space-y-5 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800">
            {productDetails.name}
          </h1>

          <p className="text-gray-600 leading-relaxed">
            {productDetails.description}
          </p>

          <div className="text-gray-500 text-sm">
            Category:
            <span className="ml-2 text-indigo-600 font-semibold">
              {productDetails.category || "Uncategorized"}
            </span>
          </div>

          <div className="text-3xl font-bold text-indigo-700">
            ₹ {productDetails.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
