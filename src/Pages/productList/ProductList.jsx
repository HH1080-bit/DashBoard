import './ProductList.css'
import React from 'react';
import { DataGrid } from '@mui/x-data-grid'
import {DeleteOutline} from '@mui/icons-material';
import { ProductRows } from '../../dummyData';
import { Link } from "react-router-dom";
import { useState } from 'react';


 
const ProductList = () => {
    const [data,setData] = useState(ProductRows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
      };
      const columns = [
        { field: "id", headerName: "ID", width: 120 },
        {
          field: "product",
          headerName: "Product",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="productUserListItem">
                <img className="productUserListImage" src={params.row.Image} alt="" />
                {params.row.name}
              </div>
            );
          },
        },
        { field: "Stock", headerName: "Stock", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 160,
        },
        {
          field: "Price",
          headerName: "Price",
          width: 200,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/product/" + params.row.id}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  className="productListDelete"
                  onClick={() => handleDelete(params.row.id)}
                />
              </>
            );
          },
        },
      ];
    return (
    <div className='products'>
            <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
    );
}



export default ProductList;