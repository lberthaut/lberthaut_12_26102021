import { createGlobalStyle } from "styled-components";

/**
* Stylising the component
* 
* @const
* @this {Hellobannerstyle}
*/

const Hellobannerstyle = createGlobalStyle`
    .banner{
        width: 50%;
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

    .bannerdescription{
        margin: 1%;
    }

    @media only screen and (max-width: 1024px) {
        .banner{
            margin-top: 2%;
        }
    }
`

export default Hellobannerstyle;