import { colors } from './colors';
import { fonts } from './fonts';
import { images } from './images';
import { api } from './api';
import { validation } from './validation';
import { _alert } from './alert';
import { _enum } from './enum/index';

const global = {
  colors,
  fonts,
  images,
  api,
  validation,
  _alert,
  _enum,
  showModal: false
}

export { global };