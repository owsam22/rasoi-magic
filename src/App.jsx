import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, ChefHat, Heart } from 'lucide-react';
import SearchBar from './components/SearchBar';
import FilterSystem from './components/FilterSystem';
import RecipeCard from './components/RecipeCard';
import RecipeDetails from './components/RecipeDetails';
import CategoryGrid from './components/CategoryGrid';
import Footer from './components/Footer';
import { searchRecipes, getRecipeDetails } from './services/api';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ diet: '', type: '', vegetarian: false });
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('rasoi_favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    localStorage.setItem('rasoi_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (recipe) => {
    setFavorites(prev => {
      if (prev.some(r => r.id === recipe.id)) {
        return prev.filter(r => r.id !== recipe.id);
      } else {
        return [...prev, recipe];
      }
    });
  };

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    setSearchQuery(query);
    setShowFavorites(false);

    // Construct filters for API
    const apiFilters = { ...filters };
    if (apiFilters.vegetarian) {
      apiFilters.diet = 'vegetarian';
      // Note: This overrides other diet selections if vegetarian is toggled
      // If you want to allow "Vegetarian" + "Gluten Free", API might handle comma separated
      // But for "Strict Veg Toggle", setting diet=vegetarian is safest.
    }

    try {
      const data = await searchRecipes(query, apiFilters);
      setRecipes(data.results);
      if (data.results.length === 0) {
        setError('No recipes found. Try different ingredients or filters.');
      }
    } catch (err) {
      setError('Failed to fetch recipes. Please check your network or API key.');
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Auto-search if query exists, OR if categories clicked
    if (searchQuery) {
      // We need to trigger search with new filters
      // But handleSearch takes query as arg. 
      // We can use a useEffect or just call api here.
      // For simplicity, let's just update filters. The user might need to hit search again 
      // OR we can debounce. 
      // Better UX: Trigger search immediately if there is a query.
      // However, state update might not be immediate. 
      // We'll pass the *new* filters to the API function directly if we were to call it.
      // For now, let's let the user hit search, OR duplicate logic. 
      // Actually, let's use a useEffect to watch filters? No, that might trigger too often.
      // Let's just update state. The functional search button is fine.
      // WAIT: If I toggle Veg, I expect results to update.
    }
    // Re-trigger search if query exists
    if (searchQuery) {
      // We'll call an internal helper or just replicate logic
      // But state 'filters' won't be updated yet inside this function scope.
      // So we should pass newFilters to search logic.
      // Let's do a quick hack:
      // Actually, let's effectively "Apply" filters when changed if results are showing.
    }
  };

  // Effect to trigger search when filters change AND query exists
  useEffect(() => {
    if (searchQuery && !showFavorites) {
      handleSearch(searchQuery);
    }
  }, [filters]);


  const handleRecipeClick = async (id) => {
    setDetailsLoading(true);
    try {
      const details = await getRecipeDetails(id);
      setSelectedRecipe(details);
    } catch (err) {
      console.error("Failed to load details", err);
    } finally {
      setDetailsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF0] text-slate-900 font-sans p-6 md:p-12 transition-colors duration-500 relative overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-300/30 blur-[100px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-red-400/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-amber-200/40 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-orange-100 rounded-full mr-3 border border-orange-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.5-3.3a9 9 0 0 0 12 10" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 font-display">
              Rasoi Magic
            </h1>
          </div>
          <p className="text-xl text-orange-800/80 font-medium max-w-2xl mx-auto italic mb-6">
            "The Authentic Taste of India & Beyond"
          </p>

          <button
            onClick={() => setShowFavorites(!showFavorites)}
            className={`inline-flex items-center px-6 py-2 rounded-full font-bold transition-all ${showFavorites
              ? 'bg-red-500 text-white shadow-lg shadow-red-200'
              : 'bg-white text-red-500 border-2 border-red-100 hover:bg-red-50'
              }`}
          >
            <Heart className={`w-5 h-5 mr-2 ${showFavorites ? 'fill-current' : ''}`} />
            {showFavorites ? 'View All Recipes' : 'My Cookbook'}
          </button>
        </motion.header>

        {!showFavorites && (
          <>
            <SearchBar onSearch={handleSearch} />
            <FilterSystem filters={filters} onFilterChange={setFilters} />
            {!searchQuery && !loading && (
              <CategoryGrid onCategorySelect={(cat) => handleSearch(cat)} />
            )}
          </>
        )}

        {showFavorites && (
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">My Cookbook</h2>
            <p className="text-slate-500">{favorites.length} saved recipes</p>
          </div>
        )}

        {error && !showFavorites && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-red-500 bg-red-50 py-3 rounded-lg mb-8 max-w-md mx-auto"
          >
            {error}
          </motion.div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 text-orange-600 animate-spin" />
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <AnimatePresence>
              {(showFavorites ? favorites : recipes).map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onClick={handleRecipeClick}
                  isFavorite={favorites.some(r => r.id === recipe.id)}
                  onToggleFavorite={() => toggleFavorite(recipe)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Empty States */}
        {!loading && !error && !showFavorites && recipes.length === 0 && searchQuery && (
          <div className="text-center text-slate-400 mt-12">
            No recipes found for "{searchQuery}".
          </div>
        )}

        {/* Favorites Empty State */}
        {showFavorites && favorites.length === 0 && (
          <div className="text-center text-slate-400 mt-12">
            <Heart className="w-16 h-16 opacity-20 mx-auto mb-4" />
            <p className="text-lg">You haven't saved any recipes yet.</p>
            <button
              onClick={() => setShowFavorites(false)}
              className="mt-4 text-orange-600 font-bold hover:underline"
            >
              Start Exploring
            </button>
          </div>
        )}

        <RecipeDetails
          recipe={selectedRecipe}
          isOpen={!!selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          isFavorite={selectedRecipe ? favorites.some(r => r.id === selectedRecipe.id) : false}
          onToggleFavorite={() => toggleFavorite(selectedRecipe)}
        />

        {detailsLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <Loader2 className="w-12 h-12 text-white animate-spin" />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
