import {createGlobalStyle} from "styled-components";

  /**
 * Stylising the component
 * 
 * @const
 * @this {Averagesessionstimestyle}
 */


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
            opacity: 0.6
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
`

export default Averagesessionstimestyle;