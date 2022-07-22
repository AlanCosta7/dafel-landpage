import { Platform } from 'quasar'

export const mobile = (state) => {
  return Platform.is.mobile ? true : false
}
