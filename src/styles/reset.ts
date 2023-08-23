import { createGlobalStyle } from "styled-components";

import MontserratRegular from '../assets/fonts/Montserrat/Montserrat-Regular.woff'
import MontserratBold from '../assets/fonts/Montserrat/Montserrat-Bold.woff'

export const ResetCSSGlobalStyle = createGlobalStyle`
/* Задаем box-sizing: border-box, чтобы отступы не влияли на размеры элементов */
*, *::before, *::after {
	box-sizing: border-box;
}

@font-face {
  font-family: 'Montserrat';
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  src: url(${MontserratRegular}) format('woff');
  }

@font-face {
  font-family: 'Montserrat';
  font-weight: bold;
  font-style: normal;
  font-display: swap;
  src: url(${MontserratBold}) format('woff');
  }

html,
body {
  width: 100%;
  height: 100%;
  background-color: #373737;
  font-size: 16px;
}

body {
  margin: 0;
}

[tabindex='-1']:focus {
  outline: none;
}


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: "Montserrat", sans-serif;
}

`;
