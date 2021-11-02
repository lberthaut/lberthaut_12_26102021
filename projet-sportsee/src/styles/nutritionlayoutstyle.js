import {createGlobalStyle} from "styled-components";

const Nutritionlayoutstyle = createGlobalStyle`
    .nutritionlayoutblock{
        width: 258px;
        height: 600px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: absolute;
        top: 250px;
        left: 1100px;
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
    }

    .nutritioninfos{
        margin-left: 30px;
    }

    .datasnutrition{
        margin: 0;
        font-weight: bold;
        margin-top: 6px;
        margin-bottom: 4px;
    }

    .datasname{
        margin: 0;
        color: #74798c;
    }
`

export default Nutritionlayoutstyle;