import React from 'react';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import UserCards from './components/UserCards';

const App = () => {
  const [users, setUsers] = React.useState([]);
  const [showForm, setShowForm] = React.useState(false);
  const [editingUser, setEditingUser] = React.useState(null);

  const handleToggle = () => {
    setEditingUser(null);
    setShowForm((prev) => !prev);
  };

  const handleSubmit = (formData) => {
    if (editingUser) {
      setUsers((prev) =>
        prev.map((user) => (user.id === editingUser.id ? formData : user))
      );
    } else {
      setUsers((prev) => [...prev, { ...formData, id: Date.now() }]);
    }
    setEditingUser(null);
    setShowForm(false);
  };

  const handleUpdate = (user) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar showForm={showForm} onToggle={handleToggle} />

      <main className="p-10">
        {showForm ? (
          <UserForm
            key={editingUser ? editingUser.id : 'new'}
            onSubmit={handleSubmit}
            editingUser={editingUser}
          />
        ) : (
          <UserCards
            users={users}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        )}
      </main>
    </div>
  );
};

export default App;
