module.exports = {
  darkMode: "class",
  purge:{
    content:["./pages/**/*.tsx", "./components/**/*.tsx"],
    safelist: [
      "dark",
      "bg-purple-500",
      "bg-purple-300",
      "bg-pink-500",
      "bg-pink-300",
      "bg-green-500",
      "bg-green-300",
      "bg-blue-500",
      "bg-blue-300",
      "bg-yellow-500",
      "bg-yellow-300",
      "text-indigo-500",
      "my-8", 
      "my-4",
      "rounded-full",
      "bg-green-100", 
      "text-green-800", 
      "text-green-500",
      "flex-shrink-0",
      "flex",
      "mt-20", 
      "md:mt-0",
      "via-yellow-400", 
      "to-yellow-800",
      "grid",
      "md:grid", 
      "md:grid-cols-2", 
      "gap-6",
      
    ]},
  theme: {
    extend: {},
    fontFamily: {
      "archivo": ['"Archivo Black"'],
      "mitr": ["Mitr"],
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
