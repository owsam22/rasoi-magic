import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart } from 'lucide-react';

const RecipeCard = ({ recipe, onClick, isFavorite, onToggleFavorite }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onClick(recipe.id)}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-orange-100 cursor-pointer group hover:border-orange-300 transition-all duration-300 hover:shadow-orange-200/50 relative"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite();
                    }}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-red-500 transition-transform hover:scale-110 active:scale-95 shadow-sm"
                >
                    <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
            </div>
            <div className="p-6 bg-gradient-to-b from-white to-orange-50/30">
                <h3 className="text-xl font-bold text-slate-800 mb-2 font-display line-clamp-2 min-h-[3.5rem] group-hover:text-orange-600 transition-colors">
                    {recipe.title}
                </h3>
                {recipe.readyInMinutes && (
                    <div className="flex items-center text-amber-700/80 text-sm mt-2 font-medium">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Ready in {recipe.readyInMinutes} minutes</span>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default RecipeCard;
