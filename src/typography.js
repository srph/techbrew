import Typography from 'typography'
import vars from './variables'
import FontAwesomeIcon from './components/FA';

const fam = vars['font-family'].replace(/'/g, '').split(', ')
// const fam = vars['font-family'].split(', ')

export default new Typography({
  baseLineHeight: 1.7,
  baseFontSize: vars['font-size'],
  headingFontFamily: fam,
  bodyFontFamily: fam,
  color: vars['color-black'],
  boxSizing: 'border-box'
})