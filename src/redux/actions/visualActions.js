export const VisualVisibility = (value) =>{
    return (dispatch) =>{
        dispatch({
            type:"VisualVisibility",
            payload: value
    })
    }
}