import React, { useState, useEffect } from 'react';
import ChefsRecommendedCard from './ChefsRecommendedCard';
import slide1 from '../../assets/home/slide1.jpg';

const ChefsRecommendedSection = () => {
    const [recommendedDishes, setRecommendedDishes] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const dishes = [
                {
                    imageSrc: slide1,
                    title: "Spaghetti Carbonara",
                    description: "A classic Italian pasta dish with creamy sauce, bacon, and Parmesan.",
                },
                {
                    imageSrc: slide1,
                    title: "Grilled Chicken Salad",
                    description: "A fresh, healthy salad topped with tender grilled chicken and a zesty vinaigrette.",
                },
                {
                    imageSrc: slide1,
                    title: "Cheese Burger",
                    description: "Juicy beef patty with melted cheese, lettuce, and pickles on a toasted bun.",
                },
            ];

            setRecommendedDishes(dishes);
        };

        fetchData();
    }, []);

    return (
        <div className="flex justify-center items-center flex-wrap gap-6">
            {recommendedDishes.map((dish, index) => (
                <ChefsRecommendedCard
                    key={index}
                    imageSrc={dish.imageSrc}
                    title={dish.title}
                    description={dish.description}
                />
            ))}
        </div>
    );
};

export default ChefsRecommendedSection;