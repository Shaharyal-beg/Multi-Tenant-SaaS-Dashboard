"use client";

import { useState, useMemo } from "react";
import { Plus, Download, Upload as UploadIcon } from "lucide-react";
import { ProductsTable, Product } from "@/components/products/products-table";
import { ProductModal } from "@/components/products/product-modal";
import { EmptyState } from "@/components/products/empty-state";
import { SearchAndFilters } from "@/components/products/search-and-filters";
import { Pagination } from "@/components/products/pagination";

// Mock data - replace with real API calls
const mockProducts: Product[] = [
  {
    id: "PRD-001",
    name: "Wireless Headphones Pro",
    category: "Electronics",
    price: 299.99,
    stock: 156,
    status: "active",
    createdAt: "2024-01-15",
  },
  {
    id: "PRD-002",
    name: "Premium Cotton T-Shirt",
    category: "Clothing",
    price: 49.99,
    stock: 8,
    status: "active",
    createdAt: "2024-01-20",
  },
  {
    id: "PRD-003",
    name: "Smart Watch Series 5",
    category: "Electronics",
    price: 399.99,
    stock: 42,
    status: "active",
    createdAt: "2024-02-01",
  },
  {
    id: "PRD-004",
    name: "Yoga Mat Premium",
    category: "Sports",
    price: 79.99,
    stock: 0,
    status: "inactive",
    createdAt: "2024-02-10",
  },
  {
    id: "PRD-005",
    name: "JavaScript: The Definitive Guide",
    category: "Books",
    price: 59.99,
    stock: 234,
    status: "active",
    createdAt: "2024-02-15",
  },
  {
    id: "PRD-006",
    name: "Ceramic Plant Pot Set",
    category: "Home & Garden",
    price: 34.99,
    stock: 67,
    status: "active",
    createdAt: "2024-03-01",
  },
  {
    id: "PRD-007",
    name: "Gaming Keyboard RGB",
    category: "Electronics",
    price: 149.99,
    stock: 23,
    status: "active",
    createdAt: "2024-03-10",
  },
  {
    id: "PRD-008",
    name: "Running Shoes Elite",
    category: "Sports",
    price: 129.99,
    stock: 5,
    status: "active",
    createdAt: "2024-03-15",
  },
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filters and search
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Mock user role
  const userRole = "admin";

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;
      const matchesStatus =
        selectedStatus === "all" ? true : product.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [products, searchQuery, selectedCategory, selectedStatus]);

  // Paginate products
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleAddProduct = () => {
    setModalMode("add");
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setModalMode("edit");
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (product: Product) => {
    if (confirm(`Are you sure you want to delete "${product.name}"?`)) {
      setProducts(products.filter((p) => p.id !== product.id));
    }
  };

  const handleSaveProduct = (productData: Partial<Product>) => {
    if (modalMode === "add") {
      const newProduct: Product = {
        id: `PRD-${String(products.length + 1).padStart(3, "0")}`,
        name: productData.name!,
        category: productData.category!,
        price: productData.price!,
        stock: productData.stock!,
        status: productData.status!,
        createdAt: new Date().toISOString().split("T")[0],
      };
      setProducts([...products, newProduct]);
    } else if (selectedProduct) {
      setProducts(
        products.map((p) =>
          p.id === selectedProduct.id ? { ...p, ...productData } : p
        )
      );
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        style={{
          animation: "hero-enter 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
        }}
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Products
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Manage your business products and inventory
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50">
            <UploadIcon className="h-4 w-4" />
            Import
          </button>

          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50">
            <Download className="h-4 w-4" />
            Export
          </button>

          <button
            onClick={handleAddProduct}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110"
          >
            <Plus className="h-4 w-4" />
            Add Product
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        className="grid gap-4 sm:grid-cols-3"
        style={{
          animation: "reveal-up-enter 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
          animationDelay: "100ms",
        }}
      >
        <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
          <div className="text-sm font-medium text-slate-600">
            Total Products
          </div>
          <div className="mt-2 text-3xl font-bold text-slate-900">
            {products.length}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
          <div className="text-sm font-medium text-slate-600">Active</div>
          <div className="mt-2 text-3xl font-bold text-emerald-600">
            {products.filter((p) => p.status === "active").length}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
          <div className="text-sm font-medium text-slate-600">Low Stock</div>
          <div className="mt-2 text-3xl font-bold text-amber-600">
            {products.filter((p) => p.stock < 10).length}
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div
        style={{
          animation: "reveal-up-enter 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
          animationDelay: "200ms",
        }}
      >
        <SearchAndFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
        />
      </div>

      {/* Products Table or Empty State */}
      {products.length === 0 ? (
        <EmptyState onAddProduct={handleAddProduct} />
      ) : (
        <div
          className="space-y-4"
          style={{
            animation:
              "reveal-up-enter 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
            animationDelay: "300ms",
          }}
        >
          <ProductsTable
            products={paginatedProducts}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
            userRole={userRole}
          />

          {filteredProducts.length > itemsPerPage && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalItems={filteredProducts.length}
              itemsPerPage={itemsPerPage}
            />
          )}
        </div>
      )}

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveProduct}
        product={selectedProduct}
        mode={modalMode}
      />
    </div>
  );
}
