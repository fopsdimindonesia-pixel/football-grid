import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Edit, Trash2, ShoppingCart, Package } from "lucide-react";

const ClubMerchandiseStoreSetupPage: React.FC = () => {
  const [products] = useState([
    { id: 1, name: "Home Jersey 2024", category: "Apparel", price: "$89.99", stock: 125, status: "In Stock" },
    { id: 2, name: "Away Jersey 2024", category: "Apparel", price: "$89.99", stock: 0, status: "Out of Stock" },
    { id: 3, name: "Official Cap", category: "Accessories", price: "$24.99", stock: 45, status: "In Stock" },
    { id: 4, name: "Supporter Scarf", category: "Apparel", price: "$34.99", stock: 78, status: "In Stock" },
    { id: 5, name: "Official Ball", category: "Equipment", price: "$129.99", stock: 12, status: "Low Stock" },
  ]);

  const getStatusColor = (status: string) => {
    if (status === "In Stock") return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
    if (status === "Low Stock") return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100";
    return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100";
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Merchandise Store</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage merchandise inventory and sales</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="w-4 h-4 mr-2" />Add Product</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6 text-center">
            <ShoppingCart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Products</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">24</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6 text-center">
            <Package className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Orders</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">487</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">Revenue</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">$125K</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Order</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">$256</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-gray-900 dark:text-white">Product Inventory</CardTitle>
            <Input
              placeholder="Search products..."
              className="w-48 dark:bg-slate-700 dark:border-slate-600"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-4 border border-gray-200 dark:border-slate-700 rounded hover:shadow transition-shadow flex items-center justify-between"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                  <div className="flex gap-4 mt-1 text-sm text-gray-600 dark:text-gray-400">
                    <span>{product.category}</span>
                    <span>{product.price}</span>
                    <span>Stock: {product.stock}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={getStatusColor(product.status)}>{product.status}</Badge>
                  <Button variant="ghost" size="sm"><Edit className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="sm"><Trash2 className="w-4 h-4 text-red-600" /></Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[1, 2, 3].map((order) => (
              <div
                key={order}
                className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded flex justify-between items-center"
              >
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Order #{5000 + order}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2 items • {new Date().toLocaleDateString()}</p>
                </div>
                <Button variant="outline" size="sm">View</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClubMerchandiseStoreSetupPage;
