import './newProduct.css'


import React from 'react';

 
const NewProduct = () => {
    return (
        <div className='newProduct'>

        <h1 className="newProductTitle">New Product</h1>
        <form  className="newProductForm">
        <div className="newProductItem">
                <label>Product Image</label>
                <input type="file" />
            </div>
        <div className="newProductItem">
                <label>Product Name</label>
                <input type="text" placeholder='Apple Airpods'/>
            </div>
            
            <div className="newProductItem">
                <label>Stock</label>
                <input type="password" placeholder='123'/>
            </div>
            <div className="newProductItem">
                
                <div className="newProductItem">
                    <label>Active</label>
                    <select className='newProductSelect' id='active' name='active'>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>

                    </select>
                </div>
               
            </div>
        <button className="newProductButton">Create</button>
        </form>
</div>

);
    
    
    }



export default NewProduct;