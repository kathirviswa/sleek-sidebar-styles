
import React from "react";
import MainLayout from "@/components/Layout/MainLayout";

const Customers = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Customers</h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Customer Management</h2>
          <p className="text-gray-600">
            This is the customers page where you can manage your customer information and relationships.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Customers;
