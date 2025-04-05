
import React from "react";
import MainLayout from "@/components/Layout/MainLayout";

const Analytics = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Analytics</h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Performance Metrics</h2>
          <p className="text-gray-600">
            This is the analytics page where you can view and track your performance metrics.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Analytics;
