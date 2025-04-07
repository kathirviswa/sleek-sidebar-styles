
import React from "react";
import MainLayout from "@/components/Layout/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stats Cards */}
          {["Users", "Revenue", "Projects"].map((item, index) => (
            <div 
              key={item} 
              className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-gray-500 text-sm font-medium">{item}</h3>
                <span className={`p-2 rounded-full ${
                  index === 0 ? "bg-blue-100 text-blue-600" :
                  index === 1 ? "bg-green-100 text-green-600" :
                  "bg-purple-100 text-purple-600"
                }`}>
                  {index === 0 ? "+12%" : index === 1 ? "+18%" : "+7%"}
                </span>
              </div>
              <p className="text-2xl font-bold mt-2">
                {index === 0 ? "2,342" : index === 1 ? "$34,756" : "45"}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-start py-3 border-b border-gray-100 last:border-0">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div className="ml-4">
                  <p className="text-sm font-medium">User #{item} completed an action</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
