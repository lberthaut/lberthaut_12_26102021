import {createGlobalStyle} from "styled-components";

/**
 * Stylising the component
 * 
 * @const
 * @this {Radargraphstyle}
 */

const Radargraphstyle = createGlobalStyle`
    .radargraphblock{
        position: absolute;
        top: 720px;
        left: 500px;
        background-color: #282D30;
        color: white;
        border-radius: 5px;
        font-color: white;
        width: 258px;
        height: 263px; 
    }

    .radargraphblock tspan{
        font-size: 9.5px;
    }
`

export default Radargraphstyle;