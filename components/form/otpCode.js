import React, {useRef} from 'react';
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import verifyAction from "../../redux/actions/auth/verifyAction";

function OtpCode() {

    const code = useRef()
    const dispatch = useDispatch()
    const {fullName , mobile} = useSelector(state => state.userInfo)
    const formHandler = (e) => {
        e.preventDefault()
        if (code.current?.value.length === 5 ) {
            dispatch(verifyAction({token : code.current?.value , full_name : fullName , contact : mobile }))
        }else {
            toast.error(`
                کد باید 5 رقم باشد
            `)
        }
    }


    return (
        <form onSubmit={formHandler} dir="rtl"
              className="col-12 p-2  rounded d-flex justify-content-center align-content-between flex-wrap">
            <label className="col-12 d-flex justify-content-center align-items-center my-2">
                <input maxLength="5" ref={code} type="text" name="otp_code" id="otp_code"
                       className="border shadow-sm col-11 col-xl-8 rounded p-2 bg-light fw-bold"
                       placeholder="کد تایید "/>
            </label>
            <div className="col-12 d-flex justify-content-center align-items-center mt-3">
                <button
                    className="border-0 rounded-pill p-2 px-5 btn-accept text-light col-11 col-xl-8  fw-bold  shadow">تایید
                </button>
            </div>
        </form>
    );
}

export default OtpCode;