import featuredImg from "../../assets/home/chef-service.jpg";

const DebugAndDine = () => {
    return (
        <div>
            <div className="featured-item text-white my-20">
                <div
                    className="relative bg-black bg-opacity-20"
                    style={{
                        backgroundImage: `url(${featuredImg})`,
                        backgroundSize: "cover", // Ensures the image covers the entire container
                        backgroundPosition: "center", // Centers the image
                        backgroundRepeat: "no-repeat", // Prevents image repeat
                        height: "500px", // Set a specific height for the background container
                    }}
                >
                    {/* Text container with overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center px-6 sm:px-12 md:px-20 lg:px-40">
                        <div className="text-white text-center">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase">
                                DebugAndDine
                            </h3>
                            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
                                At DebugAndDine, we are passionate about bringing you an unforgettable dining experience.
                                Whether you’re here for a casual meal with friends or celebrating a special occasion, we
                                offer a diverse menu that caters to all tastes.. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Molestias, esse! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus quasi iste architecto nesciunt dolor reprehenderit iure similique at alias nam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DebugAndDine;