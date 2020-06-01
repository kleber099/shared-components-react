export const fonts = {
  Quicksand: 'Quicksand-Regular',
  QuicksandLight: 'Quicksand-Light',
  QuicksandMedium: 'Quicksand-Medium',
  QuicksandBold: 'Quicksand-Bold',
  QuicksandItalic: 'Quicksand-Italic',
  QuicksandLightItalic: 'Quicksand-LightItalic',
  QuicksandBoldItalic: 'Quicksand-Italic',
};

const familyFonts = {
  Quicksand: {
    fontWeights: {
      300: 'Light',
      400: 'Regular',
      700: 'Medium',
      900: 'Bold',
      normal: 'Regular',
      bold: 'Bold',
    },
    fontStyles: {
      normal: '',
      italic: 'Italic',
    },
  },
};

export const getFontFamily = (baseFontFamily, styles = {}) => {
  const { fontWeight, fontStyle } = styles;
  const font = familyFonts[baseFontFamily];
  const weight = fontWeight
    ? font.fontWeights[fontWeight]
    : font.fontWeights.normal;
  const style = fontStyle ? font.fontStyles[fontStyle] : font.fontStyles.normal;

  if (style === font.fontStyles.italic && weight === font.fontWeights.normal) {
    return `${baseFontFamily}-${style}`;
  }

  return `${baseFontFamily}-${weight}${style}`;
};
