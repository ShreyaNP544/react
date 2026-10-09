const Navbar = ({ showForm, onToggle }) => {
  return (
    <nav className="flex items-center justify-between bg-gray-900 px-8 py-4 text-white shadow-md">
      <h1 className="text-2xl font-bold tracking-wide text-blue-400">Logo</h1>

      <ul className="flex gap-8 font-medium">
        <li className="cursor-pointer hover:text-blue-400">Home</li>
        <li className="cursor-pointer hover:text-blue-400">About</li>
        <li className="cursor-pointer hover:text-blue-400">Contacts</li>
      </ul>

      <button
        onClick={onToggle}
        className="rounded bg-blue-500 px-4 py-2 font-medium transition hover:bg-blue-600"
      >
        {showForm ? 'View Cards' : 'Create'}
      </button>
    </nav>
  );
};

export default Navbar;
