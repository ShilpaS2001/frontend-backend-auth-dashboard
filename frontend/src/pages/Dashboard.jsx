import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import Loader from "../components/Loader";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      try {
        const u = await api.get("/me");
        const n = await api.get("/notes");
        setUser(u.data);
        setNotes(n.data);
      } catch {
        localStorage.removeItem("token");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [navigate]);

  const addNote = async () => {
    if (!title.trim()) return;
    const res = await api.post("/notes", { title });
    setNotes([...notes, res.data]);
    setTitle("");
  };

  const deleteNote = async (id) => {
    await api.delete(`/notes/${id}`);
    setNotes(notes.filter((n) => n._id !== id));
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) return <Loader />;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>

      <div className="mt-6 flex gap-2">
        <input
          className="border p-2 flex-1 rounded"
          placeholder="New note"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={addNote}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      {notes.length === 0 ? (
        <p className="text-gray-500 mt-4">No notes yet</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {notes.map((n) => (
            <li
              key={n._id}
              className="flex justify-between items-center border p-2 rounded"
            >
              {n.title}
              <button
                onClick={() => deleteNote(n._id)}
                className="text-red-500 text-sm"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
