import SectionTitle from "../../Components/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";

const Featured = () => {
    return (
        <div className="featured-item text-white  my-20 bg-black bg-opacity-70">
            <div
                className="bg-fixed bg-black bg-opacity-70"
                style={{
                    backgroundImage: `url(${featuredImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="bg-black bg-opacity-70 py-16 px-20">
                    <SectionTitle subHeading="---Check it out---" heading="From Our Menu" />
                    <div className="md:flex justify-center items-center">
                        <div className="md:w-1/2">
                            <img className="rounded-lg shadow-lg" src={featuredImg} alt="Featured Item" />
                        </div>

                        <div className="md:w-1/2 md:ml-10 text-left">
                            <p className="text-gray-300">March 20, 2023</p>
                            <h3 className="text-2xl font-semibold uppercase mt-2">Where Can I Get Some?</h3>
                            <p className="mt-4 text-gray-200">At DebugAndDine, we are passionate about bringing you an unforgettable dining experience. Whether you’re here for a casual meal with friends or celebrating a special occasion, we offer a diverse menu that caters to all tastes. From mouthwatering appetizers to decadent desserts, each dish is crafted with the finest ingredients and a touch of creativity.</p>

                            <button className="btn btn-outline border-white text-white border-b-4 mt-6 px-6 py-2 hover:bg-white hover:text-black transition-all">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;