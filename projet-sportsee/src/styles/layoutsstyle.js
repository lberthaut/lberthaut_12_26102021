import {createGlobalStyle} from "styled-components";

  /**
 * Stylising the component
 * 
 * @const
 * @this {Layoutstyle}
 */

const Layoutstyle = createGlobalStyle`
.horizontallayout{
    background-color: black;
    height: 6%;
    display: flex;
    justify-content: start;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1000;
}

.logo{
    margin-left: 10%;
    margin-top: 3%;
    width: 60%;
}

.menu{
    width: 65%;
    display: flex;
    justify-content: space-between;
    margin-left: 3%;
    margin-right: 4%;
    margin-top: 0;
    margin-bottom: 0;
}

.menu>a{
    color: white;
    text-decoration: none;
    font-weight: bold;
    &>p{
        margin: 0;
    }
}

.verticallayout{
    background-color: black;
    position: fixed;
    bottom: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 6em;
    
}

.iconsbar{
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    margin: auto;
}

.icons{
    width: 2.9vw;
    height: 3vw;
    border-radius: 6px
    border: none;
    &>img{
        width: 100%;
        height: 80%;
    }
}

.copyright{
position: absolute;
  left: -3rem;
  bottom: 12.5%;
  width: 200px;
  margin: 0;
  transform: rotate(-90deg);
  text-align: center;
  color: white;
  font-size: x-small;
}

`
export default Layoutstyle;