import { dataActionsTypes } from "./dataActiontypes"

export const dataReducer = (prevState, action) => {
  const { type, payload } = action

  switch (type) {
    case dataActionsTypes.ADD_DATA:
      return {
        users: [...prevState.data, payload.newData],
      }
    case dataActionsTypes.REMOVE_DATA:
      return {
        users: prevState.data.filter(({ id }) => id !== payload.dataId),
      }
    default:
      break
  }
}