import {createGlobalStyle} from "styled-components";

const Dailyactivitiesstyle = createGlobalStyle`
    .dailyactivitiesblock{
        position: relative;
        z-index: 10;
        bottom: 940px;
        left: 210px;
        width: 800px;
        height: 400px;
        background-color: #FBFBFB;
    }

    .dailyactivitiesblock>.recharts-responsive-container{
        position: relative;
        top: 40px;
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
`

export default Dailyactivitiesstyle;