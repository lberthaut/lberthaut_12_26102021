import { createGlobalStyle } from "styled-components";

/**
 * Stylising the component
 * 
 * @const
 * @this {Radargraphstyle}
 */

const Radargraphstyle = createGlobalStyle`
    .radargraphblock{
        background-color: #282D30;
        color: white;
        border-radius: 5px;
        font-color: white;
        width: 32%;
        height: 40%;
    }

    .radargraphblock tspan{
        font-size: 9.5px;
    }


`

export default Radargraphstyle;