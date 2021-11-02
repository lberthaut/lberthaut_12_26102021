import {createGlobalStyle} from "styled-components";

const Hellobannerstyle = createGlobalStyle`
    .banner{
        position: absolute;
        bottom: 400px;
        left: 215px;
    }

    h1{
        font-size: 48px;
        margin: 0;
    }

    .username{
        font-size: 48px;
        color: red;
        margin: 0;
    }
`

export default Hellobannerstyle;