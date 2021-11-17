import {createGlobalStyle} from "styled-components";

  /**
 * Stylising the component
 * 
 * @const
 * @this {Dailyactivitiesstyle}
 */

const Dailyactivitiesstyle = createGlobalStyle`
    .dailyactivitiesblock{
        position: relative;
        z-index: 10;
        bottom: 940px;
        left: 210px;
        width: 830px;
        height: 400px;
        background-color: #FBFBFB;
    }

    .dailyactivitiesblock>.recharts-responsive-container{
        position: relative;
        top: 40px;
        left: 30px;
    }

    .dailyactivitiestitle{
        font-size: 14px;
        padding-left: 30px;
        padding-top: 30px;
    }

    .recharts-default-legend{
        position: relative;
        bottom: 35px;
        left: 110px;
    }

    .custom-tooltip{
        background-color: red;
        color: white;
        list-style-type: none;
        height: 80px;
        width: 40px;
        padding: 0;
        text-align:center;
    }

    .tooltipdatas{
        display: inline-block;
        font-size: 9px;
        margin-top: 18px;
    }
`

export default Dailyactivitiesstyle;