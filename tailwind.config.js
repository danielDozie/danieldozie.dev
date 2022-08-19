module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  safelist: [
    "dark",
    "bg-purple-500 bg-purple-300 bg-pink-500 bg-pink-300",
    "bg-green-500 bg-green-300 bg-blue-500 bg-blue-300 bg-green-100 text-green-800 text-green-500",
    "bg-yellow-500 bg-yellow-300 text-indigo-500 my-8 my-4",
    "rounded-full",
    "flex",
    "mt-20",
    "md:mt-0",
    "via-yellow-400",
    "to-yellow-800",
    "grid",
    "md:grid",
    "md:grid-cols-2",
    "px-8 pt-8 mt-2 text-xl font-extrabold text-gray-600 font-archivo lg:px-60 bg-clip-text dark:text-gray-300 to-purple-800 md:mt-0",
    "md:w-4/6 flex-shrink-0 w-4 h-4",
    "text-blue-500 cursor-pointer hover:text-gray-900 dark:hover:text-gray-200 gap-6 mx-8 mt-2 md:mx-60 mitr archivo text-gray-500 dark:text-gray-300",

  ],
  theme: {
    extend: {},
    fontFamily: {
      "archivo": ['"Archivo Black"'],
      "mitr": ["Mitr"],
    }
  },
  plugins: [],
}
