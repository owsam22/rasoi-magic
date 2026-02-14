import React from 'react';
import { motion } from 'framer-motion';

const FilterSystem = ({ filters, onFilterChange }) => {
    const diets = ['Vegan', 'Gluten Free', 'Ketogenic', 'Vegetarian', 'Pescetarian', 'Paleo'];
    const mealTypes = ['Breakfast', 'Main Course', 'Side Dish', 'Dessert', 'Appetizer', 'Salad'];

    const handleDietChange = (e) => {
        onFilterChange({ ...filters, diet: e.target.value });
    };

    const handleMealTypeChange = (e) => {
        onFilterChange({ ...filters, type: e.target.value });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-12"
        >
            <div className="w-full flex justify-center mb-6">
                <button
                    onClick={() => onFilterChange({ ...filters, vegetarian: !filters.vegetarian })}
                    className={`flex items-center space-x-2 px-6 py-2 rounded-full border-2 transition-all duration-300 ${filters.vegetarian
                            ? 'bg-green-50 border-green-500 text-green-700 shadow-lg shadow-green-100'
                            : 'bg-white/80 border-slate-200 text-slate-500 hover:border-green-300'
                        }`}
                >
                    <div className={`w-4 h-4 rounded-full border-[3px] flex items-center justify-center ${filters.vegetarian ? 'border-green-600' : 'border-slate-400'
                        }`}>
                        {filters.vegetarian && <div className="w-2 h-2 bg-green-600 rounded-full" />}
                    </div>
                    <span className="font-bold">Pure Veg Only</span>
                </button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
                <div className="relative">
                    <select
                        value={filters.diet || ''}
                        onChange={handleDietChange}
                        disabled={filters.vegetarian}
                        className={`appearance-none bg-white/90 backdrop-blur-sm border text-orange-900 py-3 px-6 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition-colors shadow-lg shadow-orange-100/50 cursor-pointer font-medium ${filters.vegetarian ? 'opacity-50 cursor-not-allowed border-slate-200' : 'border-orange-200 hover:border-orange-400'
                            }`}
                    >
                        <option value="">All Diets</option>
                        {diets.map((diet) => (
                            <option key={diet} value={diet}>
                                {diet}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-600">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>

                <div className="relative">
                    <select
                        value={filters.type || ''}
                        onChange={handleMealTypeChange}
                        className="appearance-none bg-white/90 backdrop-blur-sm border border-orange-200 text-orange-900 py-3 px-6 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-orange-500 hover:border-orange-400 transition-colors shadow-lg shadow-orange-100/50 cursor-pointer font-medium"
                    >
                        <option value="">All Meal Types</option>
                        {mealTypes.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-600">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default FilterSystem;
