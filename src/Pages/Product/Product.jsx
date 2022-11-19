import './Product.css'
import React from 'react';
import {Link} from 'react-router-dom'
import Chart from '../../Componants/Charts/Charts'
import {productData} from '../../dummyData.js'
import { Publish } from '@material-ui/icons';
const Product = () => {
    return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newProduct">
            <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart 
                data={productData}
                dataKey="Sales"
                title="Sales performance"
                />
            </div>
            <div className="productTopRight">
            <div className="productInfoTop">
                <img src="https://picsum.photos/200/300" alt="" className="productInfoImage" />
                <span className="productName">Apple Airpods</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">123</span>

                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Sales</span>
                    <span className="productInfoValue">5000</span>

                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Hire:</span>
                    <span className="productInfoValue">Yes</span>

                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">In stock:</span>
                    <span className="productInfoValue">No</span>

                </div>
            </div>
            </div>
        </div>
        <div className="productBottom">
            <form  className="productForm">
                <div className="productFormLeft">
                    <label>Product</label>
                    <input type="text" placeholder='Apple Airpods'/>
                    <label> In Stock</label>
                    <select name='inStock' id='inStock'>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label> Active</label>
                    <select name='Active' id='Active'>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://picsum.photos/200/300" alt="" className="productUploadImage" />
                            <label for="file">
                                <Publish style={{cursor:"pointer"}}/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
    );
}


export default Product;