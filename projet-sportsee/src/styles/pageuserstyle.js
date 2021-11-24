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
}

.components{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 10%;
    margin-top: 5%;
}

.sportivedatas{
    margin-top: 5%;
    display: flex;
    flex-direction: row;
}

.graphsblock{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 70%;
    justify-content: space-between;
    margin-right: 3%;
}
`

export default Pageuserstyle;