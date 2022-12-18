import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
     margin: 0;
     padding: 0;
     outline: 0;
     box-sizing: border-box;

     :root{
        --color-primary:#27AE60;
        --color-secondary:#EB5757;
        --grey-600:#333333;
        --grey-300:#828282;
        --grey-200:#999999;
        --grey-100: #E0E0E0;
        --grey-0:#F5F5F5;
        --negative:#E60000;
        --warning: #FFCD07;
        --sucess:#168821;
        --information:#155BCB;
        
     }

   

}

button{
    cursor: pointer;
}


body{
    font-family: "Inter", sans-serif;
}
 
`;
