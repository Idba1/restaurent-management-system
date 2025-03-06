import featuredImg from "../../assets/home/chef-service.jpg";

const DebugAndDine = () => {
    return (
        <div>
            <div className="featured-item text-white my-20 bg-black bg-opacity-20">
                <div
                    className="bg-fixed bg-black bg-opacity-20"
                    style={{
                        backgroundImage: `url(${featuredImg})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="bg-black bg-opacity-20 py-28 px-20">
                        <div className="md:flex justify-center items-center">
                            <div className="text-black bg-white py-16 px-40 text-left">
                                <h3 className="text-2xl mx-auto text-center font-semibold uppercase">DebugAndDine</h3>
                                <p className="mt-4">At DebugAndDine, we are passionate about bringing you an unforgettable dining experience. Whether you’re here for a casual meal with friends or celebrating a special occasion, we offer a diverse menu that caters to all tastes.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quasi iste architecto nesciunt dolor reprehenderit iure similique at alias nam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DebugAndDine;
