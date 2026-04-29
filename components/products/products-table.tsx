"use client";

import { useState } from "react";
import {
  MoreVertical,
  Edit,
  Trash2,
  ChevronDown,
  ChevronUp,
  ArrowUpDown,
} from "lucide-react";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "active" | "inactive";
  createdAt: string;
  image?: string;
};

type SortKey = keyof Product;
type SortOrder = "asc" | "desc";

type ProductsTableProps = {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
  userRole?: "owner" | "admin" | "member" | "viewer";
};

export function ProductsTable({
  products,
  onEdit,
  onDelete,
  userRole = "admin",
}: ProductsTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("createdAt");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const canEdit = ["owner", "admin", "member"].includes(userRole);
  const canDelete = ["owner", "admin"].includes(userRole);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedProducts = [...products].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];

    if (typeof aVal === "string" && typeof bVal === "string") {
      return sortOrder === "asc"
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    }

    if (typeof aVal === "number" && typeof bVal === "number") {
      return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
    }

    return 0;
  });

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortKey !== column) {
      return <ArrowUpDown className="h-4 w-4 text-slate-400" />;
    }
    return sortOrder === "asc" ? (
      <ChevronUp className="h-4 w-4 text-teal-600" />
    ) : (
      <ChevronDown className="h-4 w-4 text-teal-600" />
    );
  };

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50/80 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left">
                <button
                  onClick={() => handleSort("name")}
                  className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 transition-colors hover:text-slate-900"
                >
                  Product
                  <SortIcon column="name" />
                </button>
              </th>
              <th className="px-6 py-4 text-left">
                <button
                  onClick={() => handleSort("category")}
                  className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 transition-colors hover:text-slate-900"
                >
                  Category
                  <SortIcon column="category" />
                </button>
              </th>
              <th className="px-6 py-4 text-left">
                <button
                  onClick={() => handleSort("price")}
                  className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 transition-colors hover:text-slate-900"
                >
                  Price
                  <SortIcon column="price" />
                </button>
              </th>
              <th className="px-6 py-4 text-left">
                <button
                  onClick={() => handleSort("stock")}
                  className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 transition-colors hover:text-slate-900"
                >
                  Stock
                  <SortIcon column="stock" />
                </button>
              </th>
              <th className="px-6 py-4 text-left">
                <button
                  onClick={() => handleSort("status")}
                  className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 transition-colors hover:text-slate-900"
                >
                  Status
                  <SortIcon column="status" />
                </button>
              </th>
              <th className="px-6 py-4 text-left">
                <button
                  onClick={() => handleSort("createdAt")}
                  className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 transition-colors hover:text-slate-900"
                >
                  Created
                  <SortIcon column="createdAt" />
                </button>
              </th>
              <th className="px-6 py-4 text-right">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Actions
                </span>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {sortedProducts.map((product, index) => (
              <tr
                key={product.id}
                className="group transition-colors hover:bg-slate-50/50"
                style={{
                  animation:
                    "reveal-fade-enter 400ms cubic-bezier(0.22, 1, 0.36, 1) both",
                  animationDelay: `${index * 30}ms`,
                }}
              >
                {/* Product Name */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 text-xs font-bold text-slate-600">
                      {product.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        {product.name}
                      </div>
                      <div className="text-xs text-slate-500">
                        ID: {product.id}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="px-6 py-4">
                  <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {product.category}
                  </span>
                </td>

                {/* Price */}
                <td className="px-6 py-4">
                  <span className="font-semibold text-slate-900">
                    ${product.price.toLocaleString()}
                  </span>
                </td>

                {/* Stock */}
                <td className="px-6 py-4">
                  <span
                    className={`font-medium ${
                      product.stock < 10
                        ? "text-red-600"
                        : product.stock < 50
                        ? "text-amber-600"
                        : "text-slate-900"
                    }`}
                  >
                    {product.stock}
                  </span>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                      product.status === "active"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        product.status === "active"
                          ? "bg-emerald-500"
                          : "bg-slate-400"
                      }`}
                    />
                    {product.status.charAt(0).toUpperCase() +
                      product.status.slice(1)}
                  </span>
                </td>

                {/* Created Date */}
                <td className="px-6 py-4 text-sm text-slate-600">
                  {product.createdAt}
                </td>

                {/* Actions */}
                <td className="px-6 py-4 text-right">
                  <div className="relative inline-block">
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === product.id ? null : product.id
                        )
                      }
                      className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </button>

                    {activeDropdown === product.id && (
                      <>
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setActiveDropdown(null)}
                        />
                        <div className="absolute right-0 top-full z-20 mt-1 w-40 rounded-lg border border-slate-200 bg-white p-1 shadow-xl">
                          {canEdit && (
                            <button
                              onClick={() => {
                                onEdit(product);
                                setActiveDropdown(null);
                              }}
                              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50"
                            >
                              <Edit className="h-4 w-4" />
                              Edit
                            </button>
                          )}
                          {canDelete && (
                            <button
                              onClick={() => {
                                onDelete(product);
                                setActiveDropdown(null);
                              }}
                              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-red-600 transition-colors hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                              Delete
                            </button>
                          )}
                          {!canEdit && !canDelete && (
                            <div className="px-3 py-2 text-xs text-slate-500">
                              No actions available
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
