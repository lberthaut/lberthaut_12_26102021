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

    .choiceusertitle{
        text-align: center;
        margin-top: 8%;
        margin-bottom: 12%;

    }

    .buttonsblock{
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        width: 50%;
        justify-content: space-evenly;
    }

    .link-2{
        font-size: 32px;
    }

    .link-2>a{
        text-decoration: none;
        color: black;
    }

    .link-2 a:hover {
  color: red;
}

.link-2 a:before {
  content: '';
  border-bottom: solid 1px red;
  position: absolute;
  bottom: 0; left: 0;
  width: 100%;
  
  opacity: 0;
}

.link-2 a:hover:before {
  opacity: 1.0;
}

.link-2 a, .link-2 a:before {
  -webkit-transition: all 0.8s ease;
          transition: all 0.8s ease;
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