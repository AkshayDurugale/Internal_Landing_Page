import React from "react";
import "./TableComponent.css"; 

const TableComponent = () => {
  return (
    <div className="table-container mb-4">
      <table className="custom-table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Language</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>John Doe</td>
            <td>Male</td>
            <td>English</td>
            <td>johndoe@gmail.com</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Jiva Dove</td>
            <td>Female</td>
            <td>English, Hindi</td>
            <td>jivadove@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
