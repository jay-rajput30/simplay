import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Chivo&family=Lato:wght@300;400;700&display=swap');

:root{
    font-size: 16px;
    --space-1: 0.5rem;
    --space-2: 1rem;
    --space-3: 1.5rem;
    --space-4: 2rem;
    --space-5: 2.5rem;
    --space-6: 3rem;
    --clr-background: #16161a;
    --clr-heading-text: #fffffe;
    --clr-body-text: #94a1b2;
    --clr-disabled-text: #94a1a0;
    --clr-border: #010101;
    --clr-primary: #7f5af0;
    --clr-secondary: #72757e;
    --clr-tertiary: #d9376e;
    --length-sm-1: 0.25rem;
    --length-sm-2: 0.5rem;
    --length-sm-3: 0.75rem;
    --length-md-1: 1rem;
    --length-md-2: 1.25rem;
    --length-md-3: 1.5rem;
    --lenght-lg-1: 2rem;
    --length-lg-2: 3rem;
    --length-lg-3: 4rem;
    --length-xl-1: 7rem;
    --length-xl-2: 9rem;
    --length-xl-3: 11rem;
    

}

*, *::before, *::after {
  box-sizing: border-box;
}
 
* {
  margin: 0;
}
 
html, body {
  height: 100%;
  
}
 
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-color: var(--clr-background);
  color: var(--clr-body-text);
  font-family: 'Chivo', sans-serif;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
 
input, button, textarea, select {
  font: inherit;
}
 
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
 
#root, #__next {
  isolation: isolate;
}


h1,h2,h3,h4,h5,h6 {
    font-family: 'Lato', sans-serif;
    color: var(--clr-heading-text);
}
`;

export default GlobalStyles;
