import { global } from '../globals/global';

import { setCustomImage, setCustomText, setCustomTextInput } from 'react-native-global-props';

setCustomText({
  style: {
    color: global.colors.textGray,
    fontFamily: global.fonts.SourceSansPro.w400,
    fontSize: 16
  }
});

setCustomTextInput({
  placeholderTextColor: '#5C6A7E',

  style: {
    backgroundColor: global.colors.lightGray,
    width: '100%',
    fontSize: 16,
    padding: 18,
    paddingHorizontal: 28,
    borderRadius: 500,
    color: '#FFF'
  }
});

setCustomImage({
  source: {},
  
  style: {
    resizeMode: 'contain'
  }
});