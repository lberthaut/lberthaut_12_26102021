import { createGlobalStyle } from "styled-components";

/**
* Stylising the component
* 
* @const
* @this {Nutritionlayoutstyle}
*/

const Nutritionlayoutstyle = createGlobalStyle`
    .nutritionlayoutblock{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 91vh;
    }
    
    .iconblock{
        width: 60px;
        height: 60px;
        border-radius: 6px;
    }

    .nutritionpic{
        display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30%;
    }
    
    .caloriesicon{
        background-color: #fbeaea;
    }

    .proteinsicon{
        background-color: rgba(74, 184, 255, 0.1);
    }

    .glucidesicon{
        background-color: #fbf6e5;
    }

    .lipidesicon{
        background-color: rgba(253, 81, 129, 0.1);
    }

    .nutritionblock{
        display: flex;
        flex-direction: row;
        height: 60px;
        background-color: #FBFBFB;
        padding: 25px;
    }

    .nutritioninfos{
        margin-left: 30px;
    }

    .datasnutrition{
        margin: 0;
        font-weight: bold;
        margin-top: 6px;
        margin-bottom: 4px;
        font-size: 20px;
        padding-left: 5px;
    }

    .datasname{
        margin: 0;
        color: #74798c;
        font-size: 14px;
        padding-left: 5px;
    }
`

export default Nutritionlayoutstyle;