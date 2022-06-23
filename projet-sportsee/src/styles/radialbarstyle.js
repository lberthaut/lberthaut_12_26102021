import { createGlobalStyle } from "styled-components";

/**
 * Stylising the component
 * 
 * @const
 * @this {Radialbarstyle}
 */

const Radialbarstyle = createGlobalStyle`
    .radialbarblock{
        background-color: #FBFBFB;
        margin: 0;
        width: 30%;
        height: 100%;
        border-radius: 5px;
    }

    .scoretitle{
        margin:0;
        padding-left: 2%;
    }

    .scorecontent{
        font-size: 26px;
        margin: 0;
        text-align: center;
    }

    .scoreobjective{
        font-size: 16px;
        width: 60px;
        text-align: center;
        margin: 0;
        opacity: 0.6;
        margin-left: 11%;
    }

    .scoreobjectiveblock{
        z-index: 10;
        position: relative;
        bottom: 65%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        width: 80px;
    }
`

export default Radialbarstyle;