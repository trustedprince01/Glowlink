import React, { useState } from "react";
import { Plus, Edit, Trash, Eye, EyeOff, User, Grid, List } from "lucide-react";

// Dummy data for demonstration
const initialProducts = [
  {
    id: "1",
    name: "Glow Serum",
    description: "Brightening facial serum",
    price: 29.99,
    stock: 12,
    visible: true,
    image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=200",
    category: "Skincare"
  },
  {
    id: "2",
    name: "Satin Scrunchie",
    description: "Soft hair accessory",
    price: 6.5,
    stock: 42,
    visible: false,
    image: "https://images.pexels.com/photos/3738341/pexels-photo-3738341.jpeg?auto=compress&w=200",
    category: "Accessories"
  }
];

const accent = "#F4A300";
const bg = "#F5F5F5";

export default function ProductManagementPage() {
  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [view, setView] = useState<"grid" | "table">("grid");

  // Modal form state
  const [form, setForm] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    visible: true,
    image: "",
    category: ""
  });

  // Sidebar navigation
  const sidebar = [
    { label: "Dashboard", icon: <Grid size={18} />, active: false },
    { label: "Appointments", icon: <List size={18} />, active: false },
    { label: "Products", icon: <Grid size={18} />, active: true },
    { label: "Settings", icon: <User size={18} />, active: false },
    { label: "Logout", icon: <EyeOff size={18} />, active: false }
  ];

  // Handlers
  const openModal = (product = null) => {
    setEditing(product);
    setForm(
      product
        ? { ...product, price: product.price.toString(), stock: product.stock.toString() }
        : { id: "", name: "", description: "", price: "", stock: "", visible: true, image: "", category: "" }
    );
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditing(null);
    setForm({ id: "", name: "", description: "", price: "", stock: "", visible: true, image: "", category: "" });
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm((prev) => ({
        ...prev,
        image: URL.createObjectURL(file)
      }));
    }
  };

  const saveProduct = (e) => {
    e.preventDefault();
    if (form.id) {
      setProducts((prev) =>
        prev.map((p) => (p.id === form.id ? { ...form, price: parseFloat(form.price), stock: parseInt(form.stock) } : p))
      );
    } else {
      setProducts((prev) => [
        ...prev,
        {
          ...form,
          id: Date.now().toString(),
          price: parseFloat(form.price),
          stock: parseInt(form.stock)
        }
      ]);
    }
    closeModal();
  };

  const deleteProduct = (id) => {
    if (window.confirm("Delete this product?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const toggleVisibility = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, visible: !p.visible } : p))
    );
  };

  // Main render
  return (
    <div className="flex min-h-screen" style={{ background: bg }}>
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-56 px-4 py-8 bg-white border-r border-gray-200">
        <div className="mb-10 font-poppins font-bold text-xl text-accent" style={{ color: accent }}>
          <span>GlowLink</span>
        </div>
        <nav className="flex flex-col gap-2 font-inter">
          {sidebar.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                item.active
                  ? "bg-[#F4A300]/10 text-accent font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Nav */}
        <header className="flex items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
          <div className="flex items-center gap-4">
            <img src="https://placehold.co/40x40" alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="font-poppins font-bold text-lg text-accent" style={{ color: accent }}>
              My Business
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => openModal()}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white font-poppins font-semibold shadow hover:bg-[#F4A300]/90 transition"
              style={{ background: accent }}
            >
              <Plus size={18} /> Add Product
            </button>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="h-10 w-10 rounded-full border-2 border-accent"
              style={{ borderColor: accent }}
            />
          </div>
        </header>

        {/* Toggle & Products */}
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className="font-poppins text-2xl font-bold text-gray-900">Products</h1>
          <div className="flex items-center gap-2">
            <button
              className={`p-2 rounded-lg ${view === "grid" ? "bg-accent text-white" : "bg-gray-100 text-gray-700"}`}
              style={view === "grid" ? { background: accent } : {}}
              onClick={() => setView("grid")}
            >
              <Grid size={18} />
            </button>
            <button
              className={`p-2 rounded-lg ${view === "table" ? "bg-accent text-white" : "bg-gray-100 text-gray-700"}`}
              style={view === "table" ? { background: accent } : {}}
              onClick={() => setView("table")}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Product List */}
        <main className="flex-1 overflow-y-auto px-4 pb-10">
          {view === "grid" ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-sm p-4 flex flex-col gap-3 border border-gray-100 hover:shadow-lg transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-32 w-full object-cover rounded-xl mb-2"
                  />
                  <div className="font-poppins font-semibold text-lg text-gray-900">{product.name}</div>
                  <div className="font-inter text-gray-600 text-sm">{product.category}</div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-poppins font-bold text-accent" style={{ color: accent }}>
                      ${product.price}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-inter font-medium ${
                        product.stock > 0
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-3">
                    <button
                      title={product.visible ? "Hide" : "Show"}
                      onClick={() => toggleVisibility(product.id)}
                      className={`p-2 rounded-lg transition ${
                        product.visible
                          ? "bg-accent/10 text-accent"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {product.visible ? <Eye size={18} /> : <EyeOff size={18} />}
                    </button>
                    <button
                      title="Edit"
                      onClick={() => openModal(product)}
                      className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-accent/10 hover:text-accent transition"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      title="Delete"
                      onClick={() => deleteProduct(product.id)}
                      className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600 transition"
                    >
                      <Trash size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto rounded-2xl bg-white shadow-sm border border-gray-100">
              <table className="min-w-full text-left font-inter">
                <thead>
                  <tr className="bg-[#F5F5F5] text-gray-700">
                    <th className="p-4 font-poppins">Image</th>
                    <th className="p-4 font-poppins">Name</th>
                    <th className="p-4 font-poppins">Price</th>
                    <th className="p-4 font-poppins">Stock</th>
                    <th className="p-4 font-poppins">Visibility</th>
                    <th className="p-4 font-poppins">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-t hover:bg-gray-50 transition">
                      <td className="p-4">
                        <img src={product.image} alt={product.name} className="h-12 w-12 object-cover rounded-lg" />
                      </td>
                      <td className="p-4">{product.name}</td>
                      <td className="p-4">${product.price}</td>
                      <td className="p-4">{product.stock > 0 ? "In Stock" : "Out of Stock"}</td>
                      <td className="p-4">
                        <button
                          onClick={() => toggleVisibility(product.id)}
                          className={`p-2 rounded-lg transition ${
                            product.visible
                              ? "bg-accent/10 text-accent"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {product.visible ? <Eye size={18} /> : <EyeOff size={18} />}
                        </button>
                      </td>
                      <td className="p-4 flex gap-2">
                        <button
                          title="Edit"
                          onClick={() => openModal(product)}
                          className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-accent/10 hover:text-accent transition"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          title="Delete"
                          onClick={() => deleteProduct(product.id)}
                          className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600 transition"
                        >
                          <Trash size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>

      {/* Add/Edit Product Modal */}
      {showModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative animate-fadeIn">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
              onClick={closeModal}
            >
              <X size={20} />
            </button>
            <h2 className="font-poppins text-xl font-semibold mb-4">{editing ? "Edit Product" : "Add Product"}</h2>
            <form onSubmit={saveProduct} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-accent focus:bg-white focus:ring-accent font-inter"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleFormChange}
                  rows={2}
                  className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-accent focus:bg-white focus:ring-accent font-inter"
                />
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleFormChange}
                    required
                    min="0"
                    step="0.01"
                    className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-accent focus:bg-white focus:ring-accent font-inter"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Stock</label>
                  <input
                    type="number"
                    name="stock"
                    value={form.stock}
                    onChange={handleFormChange}
                    required
                    min="0"
                    className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-accent focus:bg-white focus:ring-accent font-inter"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Category/Tag</label>
                <input
                  type="text"
                  name="category"
                  value={form.category}
                  onChange={handleFormChange}
                  className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-accent focus:bg-white focus:ring-accent font-inter"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="mt-1 block w-full"
                />
                {form.image && (
                  <img src={form.image} alt="Preview" className="h-20 w-20 object-cover rounded-xl mt-2" />
                )}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="visible"
                  checked={form.visible}
                  onChange={handleFormChange}
                  id="visible"
                  className="accent-accent"
                  style={{ accentColor: accent }}
                />
                <label htmlFor="visible" className="text-sm font-medium text-gray-700">
                  Visible
                </label>
              </div>
              <div className="flex gap-2 justify-end mt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 font-inter font-medium hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-accent text-white font-poppins font-semibold shadow hover:bg-[#F4A300]/90 transition"
                  style={{ background: accent }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* 
  Tailwind CSS is recommended for this layout, but you can adapt the classes to CSS modules or plain CSS.
  - Poppins font for headings, Inter for body (import via Google Fonts in your index.html or global CSS).
  - Accent color: #F4A300, background: #F5F5F5.
  - Responsive: The sidebar collapses on mobile, grid/table adapts to screen size.
*/