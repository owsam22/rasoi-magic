import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="w-full max-w-2xl mx-auto mb-8 relative"
        >
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for Indian flavors (e.g., Paneer, Masala)..."
                    className="w-full px-6 py-4 pl-12 rounded-full border-2 border-orange-100 bg-white/90 backdrop-blur-sm
                     text-slate-800 placeholder-amber-700/50 focus:outline-none focus:ring-4 focus:ring-orange-200
                     focus:border-orange-400 shadow-lg shadow-orange-100/50 transition-all duration-300 hover:shadow-xl"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5" />
                <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white
                     px-6 py-2 rounded-full font-bold hover:from-orange-600 hover:to-red-600 transition-all shadow-md"
                >
                    Search
                </button>
            </div>
        </motion.form>
    );
};

export default SearchBar;
