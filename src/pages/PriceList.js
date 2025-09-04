import { useState, useEffect } from "react";
import "./Style.css";




export default function PriceList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://sow-backend-jqpr.onrender.com/api/products`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const update = (id, field, value) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, [field]: value } : it))
    );
  };

  const saveProduct = (id) => {
    const product = items.find((p) => p.id === id);
    fetch(`https://sow-backend-jqpr.onrender.com/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log("Saved:", data))
      .catch((err) => console.error("Error saving product:", err));
  };

  return (
    <div className="pricelist-page">
      <table className="pricelist-table">
        <thead>
          <tr>
            <th>SKU</th>
            <th className="col-product">Product / Service</th>
            <th className="col-inprice">In Price</th>
            <th className="col-price">Price</th>
            <th className="col-tax">Tax</th>
            <th className="col-unit">Unit</th>
            <th>Save</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it) => (
            <tr key={it.id}>
              <td>
                <input
                  value={it.sku || ""}
                  onChange={(e) => update(it.id, "sku", e.target.value)}
                />
              </td>
              <td className="col-product">
                <input
                  value={it.name || ""}
                  onChange={(e) => update(it.id, "name", e.target.value)}
                />
              </td>
              <td className="col-inprice">
                <input
                  value={it.in_price || ""}
                  onChange={(e) => update(it.id, "in_price", e.target.value)}
                />
              </td>
              <td className="col-price">
                <input
                  value={it.price || ""}
                  onChange={(e) => update(it.id, "price", e.target.value)}
                />
              </td>
              <td className="col-tax">
                <input
                  value={it.vat || ""}
                  onChange={(e) => update(it.id, "vat", e.target.value)}
                />
              </td>
              <td className="col-unit">
                <input
                  value={it.unit || ""}
                  onChange={(e) => update(it.id, "unit", e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => saveProduct(it.id)}>Save</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
