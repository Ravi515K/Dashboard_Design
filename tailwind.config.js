/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': '#CFC3FB',
        'blue':'#A9C9FC',
        'green':'#89E3BB',
        'light-green':'#C8F576',
        'dark-green':'#0099A2',
        'violet':'#BFAFFB',
        'btn-clr':'#161B18',
         'sky':'#A9C9FC',
         'middle-bg':'#DBDCDE',
         'white':'#FFFFFF',
         'red':'#A21717',
         'blue-200':'#0F658D',
         'grey':'#E8E8E8'
      },
     
      height: {
        '20':'20px',
        '30':'30px',
        '40':'40px',
        '50':'50px',
        '60':'60px',
        '100':'100px',
        '200':'200px',
        '220':'220px',
        '250':'250px',
        '128': '32rem',
      },
      width: {
        '20':'20px',
        '30':'30px',
        '40':'40px',
        '50': '50px',  
        '60': '60px',
        '70':'70px',
        '100': '100px',  
        '150': '150px',  
        '200': '200px',
        '300': '300px',  
        '30%':'30%'
      },
      fontSize: {
        sm: '12px',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '10':'10px',
        '15':'15px'
      },
      colors: {
        'regal-blue': '#243c5a',
        'brown':'#AAACAB',
        'dark-brown':'#7C7B7C'
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

