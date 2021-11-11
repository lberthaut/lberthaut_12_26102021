import {createGlobalStyle} from "styled-components";

const Layoutstyle = createGlobalStyle`
.horizontallayout{
    background-color: black;
    width: 1440 px;
    height: 91px;
    display: flex;
    vertical-align: center;
    justify-content: start;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.logo{
    margin-left: 50px;
    height: 57px;
}

.menu{
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin-left: 100px;
}

.menu>a{
    color: white;
    text-decoration: none;
    font-size: 24px;
}

.verticallayout{
    background-color: black;
    width: 117px;
    height: 1024px;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.iconsbar{
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 80px;
    padding-top: 100px;
    padding-left: 25px;
}

.icons{
    width: 64px;
    height: 64px;
    border-radius: 6px
    border: none;
}

.copyright{
    color: white;
    transform: rotate(270deg);
    font-size: 12px;
    width: 150px;
    margin: 0;
    padding-bottom: 40px;
}

`
export default Layoutstyle;