import React from 'react';

const emptyForm = {
  name: '',
  email: '',
  image: ''
};

const UserForm = ({ onSubmit, editingUser }) => {
  const [formData, setFormData] = React.useState(editingUser || emptyForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(emptyForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-96 flex-col rounded-lg bg-white p-8 shadow-md"
    >
      <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
        {editingUser ? 'Update User' : 'Create User'}
      </h2>

      <input
        className="mb-4 w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
        required
      />
      <input
        className="mb-4 w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
      />
      <input
        className="mb-4 w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        type="url"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Enter image URL"
        required
      />
      <button
        type="submit"
        className="w-full rounded bg-blue-500 px-4 py-2 font-medium text-white transition hover:bg-blue-600"
      >
        {editingUser ? 'Update' : 'Submit'}
      </button>
    </form>
  );
};

export default UserForm;
