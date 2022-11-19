import React, { Component } from 'react';
import './SideBar.css'
import {LineStyle, Timeline, TrendingUp, Person, Storefront, AttachMoney, Leaderboard, MailOutline, ChatBubbleOutline, Forum, Report, WorkOutline} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import '../../app.css'


class SideBar extends Component {

    render() { 
        return (
            <div className='sidebar'>
                <div className="sidebarwrapper">
                    <div className="sidebarmenu">
                        

                        <h3 className="sidebartitle">DashBoard</h3>
                        <ul className="sideBarList">
                            <Link to="/" className='link'>
                            <li className="sideBarListItem">
                                <LineStyle className='sidebaricon'/>
                                Home
                            </li>
                            </Link>
                            <li className="sideBarListItem">
                                <Timeline className='sidebaricon'/>
                                Analytics
                            </li>
                            <li className="sideBarListItem">
                              <TrendingUp className='sidebaricon'/>
                                Sales
                            </li>
                        </ul>


                        <h3 className="sidebartitle">Quick Menu</h3>
                        <ul className="sideBarList">
                            <Link to="users" className='link'>
                            <li className="sideBarListItem">
                                <Person className='sidebaricon'/>
                                Users
                            </li>
                            </Link>
                           <Link to="products" className='link'>
                            <li className="sideBarListItem">
                                <Storefront className='sidebaricon'/>
                                Products
                            </li>
                            </Link>
                            <li className="sideBarListItem">
                              <AttachMoney className='sidebaricon'/>
                              Transactions
                            </li>
                            <li className="sideBarListItem">
                              <Leaderboard className='sidebaricon'/>
                                Reports
                            </li>
                        </ul>


                        <h3 className="sidebartitle">Notifications</h3>
                        <ul className="sideBarList">
                            <li className="sideBarListItem">
                                <MailOutline className='sidebaricon'/>
                                Mail
                            </li>
                            <li className="sideBarListItem">
                                <Forum className='sidebaricon'/>
                                FeedBack
                            </li>
                            <li className="sideBarListItem">
                              <ChatBubbleOutline className='sidebaricon'/>
                                Messages
                            </li>
                        </ul>


                        <h3 className="sidebartitle">Staff</h3>
                        <ul className="sideBarList">
                            <li className="sideBarListItem">
                                <WorkOutline className='sidebaricon'/>
                                Manage
                            </li>
                            <li className="sideBarListItem">
                                <Timeline className='sidebaricon'/>
                                Analytics
                            </li>
                            <li className="sideBarListItem">
                              <Report className='sidebaricon'/>
                                Reports
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SideBar;