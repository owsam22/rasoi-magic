import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart } from 'lucide-react';

const RecipeCard = ({ recipe, onClick, isFavorite, onToggleFavorite }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onClick(recipe.id)}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 group transition-all duration-300 relative"
        >
            <div className="relative h-52 overflow-hidden">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite();
                    }}
                    className="absolute top-3 right-3 p-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 shadow-lg border border-slate-100 transition-all duration-300 hover:scale-110 active:scale-95"
                >
                    <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                </button>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 font-display line-clamp-2 min-h-[3.5rem] group-hover:text-orange-600 transition-colors leading-tight">
                    {recipe.title}
                </h3>
                {recipe.readyInMinutes && (
                    <div className="flex items-center text-slate-500 text-sm font-medium">
                        <Clock className="w-4 h-4 mr-2 text-orange-500" />
                        <span>Ready in {recipe.readyInMinutes} mins</span>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default RecipeCard;
