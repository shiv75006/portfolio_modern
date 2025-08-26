/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        // New color palette based on reference design
        'dark-bg': "#121214", // Dark background base
        'soft-pink': "#e7d1d6", // Soft pink highlight
        'muted-purple': "#b99ed1", // Muted purple
        'neutral-slate': "#8a8a9a", // Neutral slate (replacing bluish-violet)
        'warm-gold': "#f0c16c", // Warm golden
        'sunset-orange': "#f28c6e", // Sunset orange
        'aqua-teal': "#9dd5d6", // Aqua teal
        'white-text': "#ffffff", // Text, accents
        
        // New color codes from requirements
        'dc9998': "#DC9998", 
        '7a264f': "#7A264F",
        'c04246': "#C04246",
        '851c3e': "#851C3E",
        '44165b': "#44165B",
        '00617a': "#00617A",
        '008395': "#008395",
        
        // Keep some existing colors for compatibility
        'primary': "#b99ed1", // Updated to muted purple
        'primary-light': "#e7d1d6", // Updated to soft pink
        'neon-gradient-from': "#8a8a9a", // Updated to neutral slate
        'neon-gradient-to': "#f28c6e", // Updated to sunset orange
        'gradient-1': "#8a8a9a", // Updated to neutral slate
        'gradient-2': "#b99ed1", // Updated to muted purple
        'gradient-3': "#f0c16c", // Updated to warm golden
        "dark": "#121214", // Updated to dark background base
        "dark-surface": "rgba(18, 18, 20, 0.7)", // Updated for glass panels
        "text": "#FFFFFF",
        "highlight": "#9dd5d6", // Updated to aqua teal
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "dark-400": "#1E1E3A",
        "text-purple": "#b99ed1", // Updated to muted purple
        "dark-blue": "#121214", // Updated to dark background base
        "teal": "#9dd5d6", // Updated to aqua teal
        "pink": "#f28c6e" // Updated to sunset orange
      },
      boxShadow: {
        'neon-glow': '0 0 10px rgba(157, 213, 214, 0.7), 0 0 20px rgba(185, 158, 209, 0.5)',
        'neon-glow-strong': '0 0 15px rgba(157, 213, 214, 0.8), 0 0 30px rgba(185, 158, 209, 0.6)',
        'glass': '0 8px 32px 0 rgba(18, 18, 20, 0.37)',
        'glass-hover': '0 8px 32px 0 rgba(18, 18, 20, 0.6)',
        'glass-card': '0 4px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'glass-button': '0 2px 10px rgba(157, 213, 214, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'gradient-glow': '0 0 15px rgba(185, 158, 209, 0.5), 0 0 30px rgba(125, 146, 224, 0.3)',
        'floating': '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        'glass': '12px',
        'light': '4px',
        'strong': '20px',
      },
      backgroundImage: {
        /* Removed all radial backgrounds */
        'gradient-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
        'gradient-button': 'linear-gradient(to right, #E47A69, #851C3E, #44165B)',
        'gradient-text': 'linear-gradient(to right, #e7e7e7, #d1d1d1, #f0f0f0)',
        'gradient-border': 'linear-gradient(to right, #008395, #44165B, #C04246)',
        'gradient-card-hover': 'linear-gradient(135deg, rgba(0, 97, 122, 0.1), rgba(68, 22, 91, 0.1))',
        'site-background': 'url("/src/assets/webbg.jpg")',
      },
      backgroundSize: {
        'auto-100': 'auto 100%',
        'auto-contain': 'cover',
      },
      backgroundPosition: {
        'center-top': 'center top',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(157, 213, 214, 0.5), 0 0 10px rgba(185, 158, 209, 0.3)' },
          '100%': { boxShadow: '0 0 10px rgba(157, 213, 214, 0.8), 0 0 20px rgba(185, 158, 209, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}