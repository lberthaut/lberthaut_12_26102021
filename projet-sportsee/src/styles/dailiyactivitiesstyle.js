import {createGlobalStyle} from "styled-components";

  /**
 * Stylising the component
 * 
 * @const
 * @this {Dailyactivitiesstyle}
 */

const Dailyactivitiesstyle = createGlobalStyle`
    .dailyactivitiesblock{
        width: 100%;
        height: 50%;
        background-color: #FBFBFB;
        border-radius: 5px;
        &>.recharts-responsive-container{
            margin-left: 5%;
            &>.recharts-wrapper>.recharts-legend-wrapper{
                line-height: 0px;
            }
        }
    }

    .dailyactivitiestitle{
        font-size: 14px;
        padding-top: 2%;
        padding-left: 6%;
        margin-bottom: 0 0 3% 0;
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