import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Users, Flame, ChevronLeft, Heart, Share2 } from 'lucide-react';

const RecipeDetails = ({ recipe, isOpen, onClose, isFavorite, onToggleFavorite }) => {
    if (!isOpen || !recipe) return null;

    const handleShare = () => {
        const text = `Check out this delicious recipe: ${recipe.title}`;
        const url = recipe.sourceUrl || window.location.href;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center sm:p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white w-full h-full sm:h-auto sm:max-h-[85vh] sm:rounded-3xl sm:max-w-4xl shadow-2xl relative flex flex-col md:flex-row overflow-hidden"
                >
                    {/* Mobile Back Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 left-4 z-20 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white sm:hidden transition-all duration-300"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Action Buttons (Desktop & Mobile) */}
                    <div className="absolute top-4 right-4 z-20 flex gap-2">
                        <button
                            onClick={handleShare}
                            className="p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all duration-300"
                            title="Share on WhatsApp"
                        >
                            <Share2 className="w-6 h-6" />
                        </button>
                        <button
                            onClick={onToggleFavorite}
                            className="p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all duration-300"
                            title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                        >
                            <Heart className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-all duration-300 hidden sm:block"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="w-full md:w-5/12 h-64 md:h-auto relative shrink-0">
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden">
                            <h2 className="text-3xl font-bold text-white font-display leading-tight shadow-black drop-shadow-lg">{recipe.title}</h2>
                        </div>
                    </div>

                    <div className="w-full md:w-7/12 p-6 md:p-8 overflow-y-auto bg-white flex-1">
                        <h2 className="text-3xl font-bold text-slate-900 font-display mb-4 hidden md:block">
                            {recipe.title}
                        </h2>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {recipe.readyInMinutes && (
                                <div className="flex items-center px-3 py-1 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium border border-orange-100">
                                    <Clock className="w-4 h-4 mr-2" />
                                    {recipe.readyInMinutes} min
                                </div>
                            )}
                            {recipe.servings && (
                                <div className="flex items-center px-3 py-1 bg-amber-50 text-amber-700 rounded-lg text-sm font-medium border border-amber-100">
                                    <Users className="w-4 h-4 mr-2" />
                                    {recipe.servings} ppl
                                </div>
                            )}
                            {recipe.healthScore && (
                                <div className="flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-100">
                                    <Flame className="w-4 h-4 mr-2" />
                                    Health: {recipe.healthScore}
                                </div>
                            )}
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                                Ingredients
                                <span className="ml-3 text-sm font-normal text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100">
                                    {recipe.extendedIngredients?.length} items
                                </span>
                            </h3>
                            <ul className="space-y-3">
                                {recipe.extendedIngredients?.map((ingredient) => (
                                    <li key={ingredient.id} className="flex items-start text-slate-700 bg-orange-50/50 p-3 rounded-xl border border-orange-50">
                                        <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full mr-3 flex-shrink-0" />
                                        <span className="font-medium">{ingredient.original}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Instructions</h3>
                            <div
                                className="prose prose-slate prose-headings:text-slate-800 prose-p:text-slate-600 prose-a:text-orange-600 hover:prose-a:text-orange-700"
                                dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default RecipeDetails;
