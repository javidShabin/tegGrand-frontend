import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { axiosInstants } from "../config/axiosInstants";

export default function ProductCreatePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("image", data.image[0]);

      await axiosInstants.post("/product/create_product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Product created successfully!");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to create product");
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg flex flex-col space-y-4"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">
          Add New Product
        </h2>

        <input
          className="p-3 border border-gray-300 rounded-lg w-full"
          type="text"
          placeholder="Product Name"
          {...register("name", { required: true })}
        />
        {errors.name && <span className="text-red-500 text-sm">Name is required</span>}

        <input
          className="p-3 border border-gray-300 rounded-lg w-full"
          type="number"
          placeholder="Price"
          {...register("price", { required: true })}
        />
        {errors.price && <span className="text-red-500 text-sm">Price is required</span>}

        <textarea
          className="p-3 border border-gray-300 rounded-lg w-full"
          placeholder="Description"
          rows={4}
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="text-red-500 text-sm">Description is required</span>
        )}

        <input
          className="p-3 border border-gray-300 rounded-lg w-full"
          type="text"
          placeholder="Category"
          {...register("category", { required: true })}
        />
        {errors.category && <span className="text-red-500 text-sm">Category is required</span>}

        <input
          className="p-3 border border-gray-300 rounded-lg w-full"
          type="file"
          accept="image/*"
          {...register("image", { required: true })}
        />
        {errors.image && <span className="text-red-500 text-sm">Image is required</span>}

        <input
          type="submit"
          value="Create Product"
          className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 cursor-pointer"
        />
      </form>
    </div>
  );
}
