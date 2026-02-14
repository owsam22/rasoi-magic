import React from 'react';
import { motion } from 'framer-motion';

const categories = [
    { id: 'biryani', name: 'Biryani', icon: '🍛', color: 'from-orange-400 to-red-500' },
    { id: 'paneer', name: 'Paneer', icon: '🧀', color: 'from-amber-400 to-orange-500' },
    { id: 'street food', name: 'Street Food', icon: '🥘', color: 'from-red-400 to-rose-500' },
    { id: 'sweets', name: 'Sweets', icon: '🍬', color: 'from-pink-400 to-rose-500' },
    { id: 'south indian', name: 'South Indian', icon: '🥥', color: 'from-green-400 to-emerald-500' },
    { id: 'healthy', name: 'Healthy', icon: '🥗', color: 'from-teal-400 to-green-500' },
];

const CategoryGrid = ({ onCategorySelect }) => {
    return (
        <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-800 mb-6 font-display text-center">
                Popular Categories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((category, index) => (
                    <motion.button
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onCategorySelect(category.name)}
                        className={`relative overflow-hidden rounded-2xl p-4 h-24 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all group`}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
                        <span className="relative z-10 text-3xl mb-1 filter drop-shadow-md">{category.icon}</span>
                        <span className="relative z-10 text-white font-bold text-sm tracking-wide shadow-black drop-shadow-sm">
                            {category.name}
                        </span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default CategoryGrid;
