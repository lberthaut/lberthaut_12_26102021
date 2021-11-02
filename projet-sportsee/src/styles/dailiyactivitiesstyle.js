import {createGlobalStyle} from "styled-components";

const Dailyactivitiesstyle = createGlobalStyle`
    .dailyactivitiesblock{
        position: relative;
        z-index: 10;
        bottom: 880px;
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
        bottom: 325px;
        left: 310px;
    }
`

export default Dailyactivitiesstyle;