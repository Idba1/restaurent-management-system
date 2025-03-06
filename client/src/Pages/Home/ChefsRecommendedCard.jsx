import React from 'react';

const ChefsRecommendedCard = ({ imageSrc, title, description }) => {
    return (
        <div className="card bg-base-200 w-96 shadow-sm">
            <div className='w-full'>
                <img className='w-full h-[200px] object-cover' src={imageSrc} alt={title} />
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center">
                    <button className="px-6 py-2 mt-6 text-[#BB8506] border-b-4 border-[#BB8506] border-t-0 border-l-0 border-r-0 bg-slate-200 hover:bg-[#1F2937] transition-all rounded-md">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChefsRecommendedCard;