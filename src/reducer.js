export const initialState = {
    basket: []
}


function reducer(state, action) {
    switch(action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        
        case "REMOVE_TO_BASKET":
            let newBasket = [...state.basket]

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            
            if(index >= 0) {
                newBasket.splice(index, 1)
            }
            else {
                console.warn('Cannot remove product, id:', action.id)
            }

            return {...state, basket: newBasket}
        
        default: 
            return state;
    }
}

export default reducer;