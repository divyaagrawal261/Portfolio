import React from 'react'
import {useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../redux/index";

const VisualSettings = () => {
  const dispatch=useDispatch();
  const action=bindActionCreators(actions, dispatch);
  return (
    <div className="absolute z-10 h-screen w-screen flex justify-center items-center bg-custom-gradient visualSettings">
      <div className="w-screen h-screen absolute" onClick={()=>action.VisualVisibility(true)}></div>
    <div className='w-[400px] mx-auto z-20'>
        <h2 className='big-shoulders text-white font-bold'>VISUAL SETTINGS</h2>
        <h3 className="iceland text-white">APPLY WHAT WORKS BEST FOR YOU</h3>
        <div className="bg-primary-2 w-full p-2 border border-slate-900 mt-4">
            <form className='flex flex-col gap-2'>
            <label className='iceland text-white'>PRIMARY COLOR</label>
            <input type="color" name="" id="" className='w-full'/>
            <br />
            <label className='iceland text-white'>SECONDARY COLOR</label>
            <input type="color" name="" id="" className='w-full'/>
            </form>
            <br />
            <button className='p-2 text-white bg-primary-trans'>OKAY</button>
        </div>
    </div>
    </div>
  )
}

export default VisualSettings