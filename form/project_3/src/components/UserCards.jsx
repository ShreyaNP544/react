const UserCards = ({ users, onUpdate, onDelete }) => {
  if (users.length === 0) {
    return (
      <p className="text-center text-lg text-gray-500">
        No users yet. Click "Create" to add one.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex h-60% w-64 flex-col items-center justify-between rounded-lg bg-gray-400 p-2 shadow-md"
        >
          <img
            src={user.image}
            alt={user.name}
            className="h-[75%] w-50 rounded-2xl object-cover"
          />
          <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
          <p className="mb-4 text-gray-500">{user.email}</p>

          <div className="flex w-full gap-3">
            <button
              onClick={() => onUpdate(user)}
              className="flex-1 rounded bg-emerald-800 px-4 py-2 font-medium text-white transition hover:bg-emerald-600"
            >
              Update
            </button>
            <button
              onClick={() => onDelete(user.id)}
              className="flex-1 rounded bg-red-800 px-4 py-2 font-medium text-white transition hover:bg-maroon-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCards;
