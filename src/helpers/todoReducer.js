
export const todoReducer = (state, action) => {

    switch (action.type) {
        case '[TODO] remove todo':
            return state.filter(item => {
                return item.id !== action.payload
            });

        case '[TODO] add todo':
            return [...state, action.payload];

        case '[TODO] toggle todo':
            return state.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        done: !item.done
                    }
                }
                return item;
            })

        default:
            return state;
    }



}