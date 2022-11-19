import React, { Component } from 'react';
import "./Topbar.css"
import {Notifications, Language, Settings} from '@mui/icons-material';
class TopBar extends Component {
     
    render() { 
        return (
            <div className='topbar'>
                <div className='topbarwrapper'>
                    <div className='topleft'>
                        <span className="logo">HossamAdmin</span>
                    </div>
                    <div className='topright'>
                        <div className="topBarIconContainer">
                        <Notifications/>
                        <span className="topIconBadge">2</span>
                        </div>
                        <div className="topBarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                        </div>
                        <div className="topBarIconContainer">
                        <Settings/>
                        <span className="topIconBadge">2</span>
                        </div>

                        <img src="https://images.complex.com/complex/images/c_scale,f_auto,q_auto,w_1920/fl_lossy,pg_1/ok26lkxxcptihvwljzaw/girl-in-red?fimg-ssr-default" alt="" className="topAvatar" />

                    </div>

                </div>
            </div>
        );
    }
}
 
export default TopBar;
