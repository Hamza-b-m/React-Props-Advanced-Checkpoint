import React from "react";
import PropTypes from "prop-types";
import "../App.css";

const ProductTable = (props) => {
  return (
    <table
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        tableLayout: "fixed",
        width: "50%",
        textAlign: "center",
        lineHeight: "50px",
      }}
    >
      <tr style={{ color: "red" }}>
        <th>Name</th>
        <th>category</th>
        <th>price</th>
      </tr>
      {props.products.map((el) => {
        return (
          <tr style={{ color: "blue" }}>
            <td>{el.Name}</td>
            <td>{el.category}</td>
            <td>{el.price}</td>
          </tr>
        );
      })}
    </table>
  );
};

ProductTable.propTypes = {
  products: PropTypes.array,
};

export default ProductTable;
