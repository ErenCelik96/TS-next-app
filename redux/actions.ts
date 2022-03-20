import * as types from './types'

//LİKE_BUTTON_CLICK
export const likeButtonClick = (id:any) => ({ type: types.LIKE_BUTTON_CLICK, payload:id })

//GET_LIST
export const getList = (list:any) => ({ type: types.GET_LIST, payload: list })

//GET_CART
export const getCart = (cart:any) => ({ type: types.GET_CART, payload: cart })
