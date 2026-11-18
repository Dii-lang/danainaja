/**
 * Tailwind CSS configuration for DanaIn Aja investor dashboard.
 * Uses the brand color palette defined in the design system.
 */
module.exports = {
  content: ['./index.html', './src/**/*.{tsx,ts,jsx,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#1677D2',
        "primary-hover": '#1260AA',
        sky: '#65B9F5',
        "light-blue": '#EAF5FF',
        background: '#F5F9FD',
        "dark-navy": '#173B5E',
        "primary-text": '#243B53',
        "secondary-text": '#71869B',
        border: '#E2EBF4',
        success: '#10B981',
        "success-bg": '#ECFDF5',
      },
      borderRadius: {
        card: '0.75rem', // ~12px (rounded-xl)
      },
      spacing: {
        'gutter': '1.5rem',
        'gutter-sm': '1rem',
      },
    },
  },
  plugins: [],
};
