import {createGlobalStyle} from "styled-components";

const Radialbarstyle = createGlobalStyle`
    .radialbarblock{
        background-color: #FBFBFB;
        position: absolute;
        margin: 0;
        width: 258px;
        height: 263px;
        top: 720px;
        left: 785px;
        border-radius: 5px;
    }

    .scoretitle{
        position: absolute;
        margin:0;
        top: 20px;
        left: 20px;
    }

    .scoreobjectiveblock{
        position: absolute;

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
        opacity: 0.6
    }

    .scoreobjectiveblock{
        position: absolute;
        top: 93px;
        left: 99px;
    }
`

export default Radialbarstyle;