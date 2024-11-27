import { DISPLAYIMAGE } from './types'
import { ActionType } from './reducer'

export const getSingleImageToDisplay = (imageLink: string): ActionType => {
  return { type: DISPLAYIMAGE, payload: imageLink }
}
