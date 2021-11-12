import {createGlobalStyle} from "styled-components";

const Averagesessionstimestyle = createGlobalStyle`
    .graphaveragetime{
        position: absolute;
        top: 720px;
        left: 215px;
        background-color: red;
        border-radius: 5px;
        width: 258px;
        height: 263px;
    }

    .graphaveragetime>.recharts-responsive-container>.recharts-wrapper>.recharts-legend-wrapper{
        display: none;
    }

    .tooltipaveragesession{
        background-color: white;
        padding: 5px;
        font-size: 9px;
    }

    .days{
        display: flex;
        width: 230px;
        flex-direction: row;
        justify-content: space-between;
        position: absolute;
        top: 940px;
        left: 228px;
        &>p{
            color: white;
            font-size: 12px;
            opacity: 0.8
        }
    }

    .titlegraph{
        position: absolute;
        top: 730px;
        left: 250px;
        color: white;
        opacity: 0.6;
        width: 140px;
        line-height: 24px;
        font-size: 15px;
    }

    .opacityblock{
        opacity: 0.1;
        width: 79px;
        height: 263px;
        background-color: black;
        position: absolute;
        top: 590px;
        left: 395px;
        border-radius: 0px 5px 5px 0px;
        display: none;
    }
`

export default Averagesessionstimestyle;