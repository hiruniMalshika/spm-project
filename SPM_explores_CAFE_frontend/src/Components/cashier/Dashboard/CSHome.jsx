import React, {useContext} from 'react'
import FeaturedInfo from '../featuredInfo/FeaturedInfo';
import './CSHome.css';
import Charts from '../Charts/csCharts';
import WidgetSm from '../Widgets/WidgetSm/WidgetSm';
import WidgetLg from '../Widgets/WidgetLg/WidgetLg';
import {revenueData} from './DummyData';
//import { GlobalState } from '../../../GlobalState';
function CSHome() {
    //const state = useContext(GlobalState);
    
    return (
        <div className="cshome">
            <FeaturedInfo/>
            <Charts data={revenueData} title="Revenue Analytics" grid dataKey="Revenue"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}

export default CSHome
