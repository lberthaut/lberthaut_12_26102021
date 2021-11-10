import {createGlobalStyle} from "styled-components";

const Dailyactivitiesstyle = createGlobalStyle`
    .dailyactivitiesblock{
        position: relative;
        z-index: 10;
        bottom: 940px;
        left: 210px;
        width: 800px;
        height: 300px;
    }

    .dailyactivitiesblock>.recharts-responsive-container{
        position: relative;
        right: 60px;
    }

    .dailyactivitiestitle{
        font-size: 14px;
        padding-left: 10px;
    }

    .recharts-legend-item>svg{
        border-radius: 50%;
    }

    .recharts-default-legend{
        position: relative;
        bottom: 325px;
        left: 310px;
    }
`

export default Dailyactivitiesstyle;