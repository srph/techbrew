import Typography from 'typography'
import vars from './variables'
import FontAwesomeIcon from './components/FA';

const fam = vars['font-family'].replace(/'/g, '').split(', ')

export default new Typography({
  baseLineHeight: 1.7,
  baseFontSize: vars['font-size'],
  headingFontFamily: fam,
  bodyFontFamily: fam,
  color: vars['color-black'],
  boxSizing: 'border-box',
  includeNormalize: true,
  overrideStyles: () => ({
    img: {
      // No idea why Typography.js puts marginBottom by default.
      marginBottom: 0
    }
  }),
  googleFonts: [
    {
      name: 'Montserrat',
    },
    {
      name: 'Domine',
    },
    {
      name: 'Source Sans Pro',
    },
  ],
})