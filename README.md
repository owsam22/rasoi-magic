# 🍽️ Rasoi Magic - Premium Recipe Finder

A beautifully designed, premium Recipe Finder application built with React, Vite, and Tailwind CSS. Rasoi Magic helps you discover delicious recipes tailored to your dietary needs with a smooth, glassmorphism-inspired interface.

![Rasoi Magic App Preview](https://via.placeholder.com/800x450.png?text=Rasoi+Magic+App+Preview) 
*(Replace this placeholder with an actual screenshot of your app)*

## ✨ Features

- **🔍 Smart Search**: Instantly find recipes by ingredients (e.g., "chicken, lemon").
- **🥗 Advanced Filtering**: Filter by Diet (Vegan, Keto, Gluten-Free, etc.) and Meal Type (Breakfast, Dinner, etc.).
- **⚡ Premium UI**: Glassmorphism design, smooth animations, and responsive layout.
- **📱 Mobile Optimized**: Full-screen recipe details and touch-friendly interface on mobile devices.
- **⏱️ Quick Info**: See preparation time, servings, and health scores at a glance.
- **📝 Detailed Recipes**: View full ingredients list and step-by-step cooking instructions.

## 🛠️ Tech Stack

- **Frontend**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **API**: [Spoonacular API](https://spoonacular.com/food-api)

## 🚀 Getting Started

Follow these steps to get the project running locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/culinara.git
    cd culinara
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure API Key**
    - Get a free API Key from [Spoonacular](https://spoonacular.com/food-api/console#profile).
    - Rename the `.env.example` file to `.env`:
      ```bash
      # Windows
      copy .env.example .env
      # Mac/Linux
      cp .env.example .env
      ```
    - Open `.env` and add your key:
      ```env
      VITE_SPOONACULAR_API_KEY=your_actual_api_key_here
      ```

4.  **Run the App**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📱 Mobile Experience

Rasoi Magic is designed with a "Mobile-First" premium approach.
- **Touch-Friendly**: Large touch targets for buttons and cards.
- **Immersive Details**: Recipe details open in a full-screen view on mobile devices for better readability.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Your Name]
