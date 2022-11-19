import React, { Component } from 'react';
import './widgetSmall.css'
import {Visibility} from '@mui/icons-material';

class WSmall extends Component {
    
    render() { 
        return (
            <div className="widgetSmall">
                    <span className="widgetSmallTitle">New Join Members</span>
                    <ul className="widgetSmallList">
                        <li className="widgetSmallListItem">
                        <img src="https://picsum.photos/200/300" alt="" className="widgetSmallImg" />
                            <div className="widgetSmallUser">
                                <span className="widgetSmallUserName">Anna Keller</span>
                                <span className="widgetSmallUserTitle">Software Engineer</span>
                            </div>
                            <button className="widgetSmallButton">
                                <Visibility className='widgetSmallIcon'/>
                                Display
                            </button>
                        </li>

                        <li className="widgetSmallListItem">
                        <img src="https://picsum.photos/200/300" alt="" className="widgetSmallImg" />
                            <div className="widgetSmallUser">
                                <span className="widgetSmallUserName">Anna Keller</span>
                                <span className="widgetSmallUserTitle">Software Engineer</span>
                            </div>
                            <button className="widgetSmallButton">
                                <Visibility className='widgetSmallIcon'/>
                                Display
                            </button>
                        </li>

                        <li className="widgetSmallListItem">
                        <img src="https://picsum.photos/200/300" alt="" className="widgetSmallImg" />
                            <div className="widgetSmallUser">
                                <span className="widgetSmallUserName">Anna Keller</span>
                                <span className="widgetSmallUserTitle">Software Engineer</span>
                            </div>
                            <button className="widgetSmallButton">
                                <Visibility className='widgetSmallIcon'/>
                                Display
                            </button>
                        </li>

                        <li className="widgetSmallListItem">
                        <img src="https://picsum.photos/200/300" alt="" className="widgetSmallImg" />
                            <div className="widgetSmallUser">
                                <span className="widgetSmallUserName">Anna Keller</span>
                                <span className="widgetSmallUserTitle">Software Engineer</span>
                            </div>
                            <button className="widgetSmallButton">
                                <Visibility className='widgetSmallIcon'/>
                                Display
                            </button>
                        </li>

                        <li className="widgetSmallListItem">
                        <img src="https://picsum.photos/200/300" alt="" className="widgetSmallImg" />
                            <div className="widgetSmallUser">
                                <span className="widgetSmallUserName">Anna Keller</span>
                                <span className="widgetSmallUserTitle">Software Engineer</span>
                            </div>
                            <button className="widgetSmallButton">
                                <Visibility className='widgetSmallIcon'/>
                                Display
                            </button>
                        </li>
                    </ul>

            </div>
        );
    }
}
 
export default WSmall;