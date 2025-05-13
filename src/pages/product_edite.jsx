import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { axiosInstants } from '../config/axiosInstants';
import toast from 'react-hot-toast';

const Product_edite = () => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstants.get(`/product/get_product/${id}`);
        const product = response.data.product;

        setValue("name", product.name);
        setValue("price", product.price);
        setValue("description", product.description);
        setValue("category", product.category);
      } catch (error) {
        toast.error("Failed to load product");
        console.error(error);
      }
    };

    fetchProduct();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("category", data.category);
      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      await axiosInstants.put(`/product/update_product/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Product updated successfully");
    } catch (error) {
      toast.error("Update failed");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg flex flex-col space-y-4"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold text-gray-700 text-center">Edit Product</h2>

        <input
          type="text"
          placeholder="Product Name"
          className="p-3 border border-gray-300 rounded-lg"
          {...register("name", { required: true })}
        />
        {errors.name && <span className="text-red-500 text-sm">Name is required</span>}

        <input
          type="number"
          placeholder="Price"
          className="p-3 border border-gray-300 rounded-lg"
          {...register("price", { required: true })}
        />
        {errors.price && <span className="text-red-500 text-sm">Price is required</span>}

        <textarea
          rows={4}
          placeholder="Description"
          className="p-3 border border-gray-300 rounded-lg"
          {...register("description", { required: true })}
        />
        {errors.description && <span className="text-red-500 text-sm">Description is required</span>}

        <input
          type="text"
          placeholder="Category"
          className="p-3 border border-gray-300 rounded-lg"
          {...register("category", { required: true })}
        />
        {errors.category && <span className="text-red-500 text-sm">Category is required</span>}

        <input
          type="file"
          accept="image/*"
          className="p-3 border border-gray-300 rounded-lg"
          {...register("image")}
        />
        <span className="text-sm text-gray-400">Upload only if you want to change the image</span>

        <button
          type="submit"
          className="bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default Product_edite;
