import {createGlobalStyle} from "styled-components";

const Dailyactivitiesstyle = createGlobalStyle`
    .dailyactivitiesblock{
        position: relative;
        z-index: 10;
        bottom: 840px;
        left: 150px;
    }

    .dailyactivitiestitle{
        font-size: 14px;
        padding-left: 65px;
    }

    .recharts-legend-item>svg{
        border-radius: 50%;
    }

    .recharts-default-legend{
        position: relative;
        bottom: 263px;
        left: 290px;
    }
`

export default Dailyactivitiesstyle;