import {createGlobalStyle} from "styled-components";

const Hellobannerstyle = createGlobalStyle`
    .banner{
        position: absolute;
        bottom: 510px;
        left: 215px;
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
    }
`

export default Hellobannerstyle;