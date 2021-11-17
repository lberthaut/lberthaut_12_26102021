import {createGlobalStyle} from "styled-components";

  /**
 * Stylising the component
 * 
 * @const
 * @this {Hellobannerstyle}
 */

const Hellobannerstyle = createGlobalStyle`
    .banner{
        position: relative;
        bottom: 980px;
        left: 215px;
        width: 1024px;
    }

    .titlebanner{
        display: flex;
        flex:direction: row;
    }

    h1{
        font-size: 48px;
        margin: 0;
    }

    .username{
        font-size: 48px;
        color: red;
        margin: 0;
        font-weight: bold;
    }
`

export default Hellobannerstyle;