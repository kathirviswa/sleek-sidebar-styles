
import React from "react";
import MainLayout from "@/components/Layout/MainLayout";

const Settings = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Settings</h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Account Settings</h2>
          <p className="text-gray-600">
            This is the settings page where you can configure your account and application preferences.
          </p>
          
          <div className="mt-6 space-y-4">
            <div className="p-4 border border-gray-200 rounded-md">
              <h3 className="font-medium text-gray-800">Profile Information</h3>
              <p className="text-sm text-gray-500 mt-1">Update your account's profile information and email address.</p>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-md">
              <h3 className="font-medium text-gray-800">Security</h3>
              <p className="text-sm text-gray-500 mt-1">Update your password and configure account security options.</p>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-md">
              <h3 className="font-medium text-gray-800">Notifications</h3>
              <p className="text-sm text-gray-500 mt-1">Configure how you receive notifications and alerts.</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Settings;
