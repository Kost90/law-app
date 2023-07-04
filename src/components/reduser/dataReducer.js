import { dataActionsTypes } from "./dataActiontypes"

export const dataReducer = (prevState, action) => {
  const { type, payload } = action

  switch (type) {
    case dataActionsTypes.ADD_BOOKDATA:
      return {
        data: payload.newData,
      }
    case dataActionsTypes.REMOVE_DATA:
      return {
        data: prevState.data.filter(({ id }) => id !== payload.dataId),
      }
    default:
      break
  }
}