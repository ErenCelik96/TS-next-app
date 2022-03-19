import { combineReducers } from 'redux'
import * as types from './types'

const initialLikeButtonState = {
  like: ["test"]
}

//like button reducer
const likeButtonReducer = (state = initialLikeButtonState, { type, payload }: any) => {
  switch (type) {
    case types.LIKE_BUTTON_CLICK:
      if (!state.like.includes(payload)) {
        return {
          like: [...state.like, payload]
        }
      } else {
        return {
          like: state.like.filter(like => like !== payload)
        }
      }
    default:
      return state
  }
}

//product list reducer
const productsList = (state = [], action: any) => {
  switch (action.type) {
    case types.GET_LIST:
      return state = action.payload
    default:
      return state
  }
}

const initialCartState = {
  cart: ["test"]
}

//cart reducer
const getCartReducer = (state = initialCartState, { type, payload }: any) => {
  switch (type) {
    case types.GET_CART:
      if (!state.cart.includes(payload)) {
        return {
          cart: [...state.cart, payload]
        }
      } else {
        return {
          cart: state.cart.filter(cart => cart !== payload)
        }
      }
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  likeButton: likeButtonReducer,
  products: productsList,
  cart: getCartReducer,
}

export default combineReducers(reducers)
