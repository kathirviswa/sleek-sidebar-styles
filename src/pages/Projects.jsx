
import React from "react";
import MainLayout from "@/components/Layout/MainLayout";

const Projects = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Projects</h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Project Management</h2>
          <p className="text-gray-600">
            This is the projects page where you can view and manage all your ongoing projects.
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((project) => (
              <div key={project} className="border border-gray-200 rounded-md p-4 hover:border-indigo-300 transition-colors">
                <h3 className="font-semibold text-gray-800">Project #{project}</h3>
                <p className="text-sm text-gray-500 mt-1">Last updated: April {project + 1}, 2025</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">In Progress</span>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects;
