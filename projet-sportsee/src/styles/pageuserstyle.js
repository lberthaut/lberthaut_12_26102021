import {createGlobalStyle} from "styled-components";

/**
 * Stylising the component
 * 
 * @const
 * @this {Pageuserstyle}
 */

const Pageuserstyle = createGlobalStyle`
body{
    margin: 0;
    font-family: Calibri, Roboto;
    height: 1024px;
}

#root{
    width: 100%;
    height: 100%;
}
`

export default Pageuserstyle;