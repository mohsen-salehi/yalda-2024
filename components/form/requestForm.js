import React, {useEffect, useRef} from 'react';
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import formAction from "../../redux/actions/form/formAction";
import requestAction from "../../redux/actions/auth/requestAction";

function RequestFormComponent() {

    const phoneNumber = useRef()
    const dispatch = useDispatch()
    const formHandler = (e) => {
        e.preventDefault()
        if (phoneNumber.current?.value.length === 11 ) {
            dispatch(formAction({
                mobile : phoneNumber.current?.value
            }))
            dispatch(requestAction({contact : phoneNumber.current?.value}))
        }else {
            toast.error(`
            فیلد شماره باید ۱۱ رقم باشد .
            `)
        }
    }


    return (
        <form onSubmit={formHandler} dir="rtl"
              className="col-12 p-2  rounded d-flex justify-content-center align-content-between flex-wrap">
            <label className="col-12 d-flex justify-content-center align-items-center my-2">
                <input maxLength="11" ref={phoneNumber} type="text" name="phone" id="phone"
                       className="border shadow-sm col-11 col-xl-8 rounded p-2 bg-light fw-bold"
                       placeholder=" شماره تلفن همراه  "/>
            </label>
            <div className="col-12 d-flex justify-content-center align-items-center mt-3">
                <button className="border-0 rounded-pill p-2 px-5 btn-accept text-light col-11 col-xl-8  fw-bold  shadow">ثبت
                </button>
            </div>
        </form>
    );
}

export default RequestFormComponent;