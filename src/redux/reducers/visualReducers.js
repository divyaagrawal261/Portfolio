const reducer = (state=false, action)=>{
    if(action.type=="VisualVisibility")
    return !(action.payload)
}

export default reducer