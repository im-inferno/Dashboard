import { GridColDef } from "@mui/x-data-grid";
import { DataTable } from "../../components/dataTable/DataTable";
import "./users.scss";
import { userRows } from "../../data";
import { useState } from "react";
import { Add } from "../../components/add/Add";
export const Users = () => {
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
      field: "lastName",
      headerName: "Last name",
      type: "string",
      width: 100,
      editable: true,
    },
    {
      field: "firstName",
      headerName: "First name",
      type: "string",
      width: 100,
      editable: true,
    },
    {
      field: "email",
      headerName: "E-Mail",
      type: "string",
      width: 150,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "number",
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
      field: "verified",
      headerName: "Verified",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      type: "boolean",
      width: 100,
    },
  ]; 
  const [open, setOpen] = useState(false);
  return (
    <div className="user">
      <div className="title">
        <h1>User</h1>
        <button className="btn" onClick={()=>{setOpen(true)}}>Add</button>
      </div>
      <DataTable slug={"users"} columns={columns} rows={userRows} />
      {open && <Add slug="users" columns={columns} setOpen={setOpen}/>}
    </div>
  );
};
