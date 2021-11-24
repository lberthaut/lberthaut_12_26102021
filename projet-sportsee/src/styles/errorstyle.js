import {createGlobalStyle} from "styled-components";

  /**
 * Stylising the component
 * 
 * @const
 * @this {Errorstyle}
 */

const Errorstyle = createGlobalStyle`
    .errorblock{
        margin-left: 35%;
        margin-top: 10%;
    }

    .errortitle{
        font-size: 48px;
        margin-left: 18%;
        font-weight: bold;
    }

    .errortext{
        width: 45%;
        text-align: center;
        font-size: 28px;
    }
`

export default Errorstyle;