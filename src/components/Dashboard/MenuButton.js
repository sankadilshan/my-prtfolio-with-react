function MenuButton({ text }) {
  return (
    <button className="bg-transparent mr-5 mb-5 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      {text}
    </button>
  );
}

export default MenuButton;
