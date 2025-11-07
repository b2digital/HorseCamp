import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
codex/create-next.js-base-for-horsecamp-application
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'

    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
main
  ],
  theme: {
    extend: {
      colors: {
codex/create-next.js-base-for-horsecamp-application
        brand: {
          primary: '#1D2B53',
          accent: '#38BDF8',
          background: '#F6F7FB'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []

        primary: '#1D2B53',
        accent: '#38BDF8',
        background: '#F6F7FB',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
main
};

export default config;
