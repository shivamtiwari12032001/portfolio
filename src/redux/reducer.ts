import { DISPLAYIMAGE } from './types'
type InitialStateType = {
  image: string
}

const initState = {
  image: '',
} as InitialStateType

export type ActionType = {
  type: string
  payload: string
}

export const imageReducer = (
  state = initState,
  { type, payload }: ActionType,
) => {
  switch (type) {
    case DISPLAYIMAGE:
      return {
        ...state,
        image: payload,
      }
    default:
      return state
  }
}


