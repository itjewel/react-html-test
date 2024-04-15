'use client'
import { useState } from 'react';

const Dashboard = () => {
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <input type="checkbox" className="form-checkbox" />
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Column 1
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Column 2
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">Row 1 Data 1</td>
                  <td className="px-6 py-4 whitespace-nowrap">Row 1 Data 2</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">Row 2 Data 1</td>
                  <td className="px-6 py-4 whitespace-nowrap">Row 2 Data 2</td>
                </tr>
                {/* Add more table rows as needed */}
              </tbody>
            </table>
          </div>
        );
      };

export default Dashboard;
