import React, { Component } from 'react';
import './widgetLarge.css'

class WLarge extends Component {
     
    render() { 
        const Button = ({type}) => {
            return <button className={'widgetLargeButton ' + type}>{type}</button>
        }
        return (
           <div className="widgetLarge">
               
               <h3 className="widgetLargeTitle">Latest transaction</h3>
           <table className="widgetLargerTable">
               <tr className='widgetLargetr'>
                <th className="widgetLargeth">Customer</th>
                <th className="widgetLargeth">Date</th>
                <th className="widgetLargeth">Amount</th>
                <th className="widgetLargeth">Status</th>
               </tr>
               <tr className='widgetLargetr'>
                   <td className="widgetLargeUser">
                       <img src="https://picsum.photos/200/300" alt="" className="widgetLargeImg" />
                        <span className="widgetLargeName">Susan Carol</span>
                   </td>
                    <td className="widgetLargeDate">2 june 2020</td>
                    <td className="widgetLargeAmount">$122.00</td>
                    <td className="widgetLargeStatus">
                        <Button type='Approved'/>
                    </td>
               </tr>

               <tr className='widgetLargetr'>
                   <td className="widgetLargeUser">
                       <img src="https://picsum.photos/200/300" alt="" className="widgetLargeImg" />
                        <span className="widgetLargeName">Susan Carol</span>
                   </td>
                    <td className="widgetLargeDate">2 june 2020</td>
                    <td className="widgetLargeAmount">$122.00</td>
                    <td className="widgetLargeStatus">
                        <Button type='Declined'/>
                    </td>
               </tr>

               <tr className='widgetLargetr'>
                   <td className="widgetLargeUser">
                       <img src="https://picsum.photos/200/300" alt="" className="widgetLargeImg" />
                        <span className="widgetLargeName">Susan Carol</span>
                   </td>
                    <td className="widgetLargeDate">2 june 2020</td>
                    <td className="widgetLargeAmount">$122.00</td>
                    <td className="widgetLargeStatus">
                        <Button type='Pending'/>
                    </td>
               </tr>
               <tr className='widgetLargetr'>
                   <td className="widgetLargeUser">
                       <img src="https://picsum.photos/200/300" alt="" className="widgetLargeImg" />
                        <span className="widgetLargeName">Susan Carol</span>
                   </td>
                    <td className="widgetLargeDate">2 june 2020</td>
                    <td className="widgetLargeAmount">$122.00</td>
                    <td className="widgetLargeStatus">
                        <Button type='Approved'/>
                    </td>
               </tr>
           </table>
           </div>
        );
    }
}
 
export default WLarge;