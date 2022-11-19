import React, { Component } from 'react'
import './Home.css'
import Featuredinfo from '../../Componants/featuredInfo/Featuredinfo';
import Charts from '../../Componants/Charts/Charts';
import { userData } from '../../dummyData';
import WLarge from '../../Componants/widgetLarge/widgetLarge';
import WSmall from '../../Componants/widgetSmall/widgetSma.';
class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className="home">
                <Featuredinfo/>
                <Charts data={userData} title="User Analaytics"  dataKey="Active User"/>
                <div className="homeWidget">
                <WSmall/>
                <WLarge/>
                
                </div>
            </div>
        );
    }
}
 
export default Home;