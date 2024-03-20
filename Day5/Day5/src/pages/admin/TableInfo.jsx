import React from 'react';
import "../../assets/css/TableInfo.css";
import AdminSidebar from "./AdminSidebar";

const TableInfo = () => {
  return (
    <div className="table-info-container">
      <AdminSidebar />
      <div className="table-info">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* Add rows of data here */}
            <tr>
              <td>User 1</td>
              <td>12345</td>
              <td>Product 1</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>User 2</td>
              <td>67890</td>
              <td>Product 2</td>
              <td>$20</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableInfo;
