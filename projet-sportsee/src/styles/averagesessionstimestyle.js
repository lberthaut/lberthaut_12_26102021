import { createGlobalStyle } from "styled-components";

/**
* Stylising the component
* 
* @const
* @this {Averagesessionstimestyle}
*/


const Averagesessionstimestyle = createGlobalStyle`
    .graphsessionstimeblock{
        width: 30%;
        height: 100%;
        background-color: red;
        border-radius: 5px;
    }
    
    .graphaveragetime{
        background-color: red;
        width: 100%;
        height: 85%;
        border-radius: 5px 5px 0 0;
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
        margin-left: 0.5%;
        flex-direction: row;
        justify-content: space-between;
        background-color: red;
        border-radius: 0 0 5px 5px;
        margin: 0;
        padding: 0 1.9% 0 1%;
        &>p{
            color: white;
            font-size: 12px;
            opacity: 0.6
        }
    }

    .titlegraph{
        margin:0 0 0 5%;
        padding-top: 4%;
        color: white;
        opacity: 0.6;
        line-height: 24px;
        font-size: 80%;
        width: 60%;
    }
`

export default Averagesessionstimestyle;