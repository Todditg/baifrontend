import { createGlobalStyle } from "styled-components";

import PoppinsRegular from '../assets/fonts/Poppins/Poppins-Regular.ttf'
import PoppinsItalic from '../assets/fonts/Poppins/Poppins-Italic.ttf'

export const ResetCSSGlobalStyle = createGlobalStyle`
/* Задаем box-sizing: border-box, чтобы отступы не влияли на размеры элементов */
*, *::before, *::after {
	box-sizing: border-box;
}

@font-face {
  font-family: 'Poppins';
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  src: url(${PoppinsRegular});
  }

@font-face {
  font-family: 'Poppins';
  font-weight: normal;
  font-style: italic;
  font-display: swap;
  src: url(${PoppinsItalic});
  }

html,
body {
  width: 100%;
  height: 100%;
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
  font-family: Poppins;
}

`;
