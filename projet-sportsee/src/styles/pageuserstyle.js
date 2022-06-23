import { createGlobalStyle } from "styled-components";

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
    margin-top: 2%;
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

.radialblock{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        height: 35%;
        width: 100%;
        justify-content: space-between;
    }

@media only screen and (max-width: 1024px) {

    .components{
        margin-left: 15%;
    }
    .sportivedatas{
        display: flex;
        flex-direction: column;
    }
    .graphsblock{
        width: 100%;
    }

    .nutritionlayoutblock{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 80%;
        margin: 0 auto;
    }
}
`

export default Pageuserstyle;