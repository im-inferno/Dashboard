import { useState } from "react";
import { Add } from "../../components/add/Add";
import { DataTable } from "../../components/dataTable/DataTable";
import "./products.scss"
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";
export const Products = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavtar.png"} alt="" />;
      },
    },
    {
      field: "color",
      headerName: "Color",
      type: "string",
      width: 100,
      editable: true,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 100,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      type: "string",
      width: 150,
      editable: true,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      type: "string",
      width: 100,
      editable: true,
    },
    {
      field: "inStock",
      headerName: "In Stock",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      type: "boolean",
      width: 100,
    },
  ]; 
  const [open, setOpen] = useState(false);
  return (
    <div className="product">
      <div className="title">
        <h1>Product</h1>
        <button className="btn" onClick={()=>{setOpen(true)}}>Add</button>
      </div>
      <DataTable slug={"products"} columns={columns} rows={products} />
      {open && <Add slug="products" columns={columns} setOpen={setOpen}/>}
    </div>
  );
}
