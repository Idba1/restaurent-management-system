import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        });
       console.log(res.data)
    };

    return (
        <div className="container mx-auto p-6">
            <SectionTitle heading="Add an Item" subHeading="What's new?" />
            <div className="max-w-2xl mx-auto bg-slate-800 text-gray-50 p-8 rounded-lg shadow-lg mt-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Recipe Name */}
                    <div className="form-control w-full">
                        <label className="label text-lg font-semibold text-gray-50">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full p-3 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-blue-500" />
                    </div>

                    {/* Category & Price */}
                    <div className="flex gap-6 flex-col md:flex-row">
                        {/* Category */}
                        <div className="form-control w-full">
                            <label className="label text-lg font-semibold text-gray-50">
                                <span className="label-text">Category*</span>
                            </label>
                            <select
                                {...register('category', { required: true })}
                                className="select select-bordered w-full p-3 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
                            >
                                <option disabled>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        {/* Price */}
                        <div className="form-control w-full">
                            <label className="label text-lg font-semibold text-gray-50">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full p-3 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>

                    {/* Recipe Details */}
                    <div className="form-control w-full">
                        <label className="label text-lg font-semibold text-gray-50">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea
                            {...register('recipe')}
                            className="textarea textarea-bordered w-full p-3 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 h-24"
                            placeholder="Describe the recipe"
                        ></textarea>
                    </div>

                    {/* Image Upload */}
                    <div className="form-control w-full">
                        <label className="label text-lg font-semibold text-gray-50">
                            <span className="label-text">Recipe Image*</span>
                        </label>
                        <input
                            {...register('image', { required: true })}
                            type="file"
                            className="file-input w-full max-w-xs p-3 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-blue-500" />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn bg-[#1F2937] px-6 py-2 mt-6 border-b-4 text-[#BB8506] border-[#BB8506] border-t-0 border-l-0 border-r-0 rounded-md hover:bg-slate-200 hover:text-orange-500 hover:border-orange-500 transition-all focus:ring-2 duration-300 flex items-center justify-center mx-auto"
                        >
                            Add Item <FaUtensils className="ml-3" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;