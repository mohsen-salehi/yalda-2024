import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import Image from "next/image";

function Index({setStatusPopup, setStatusInvite}) {
    const [number , setNumber] = useState(0)
    const {request} = useSelector(state => state)
    useEffect(()=>{
        setNumber(Math.floor(Math.random() * 10) + 1)
    },[request])

    return (<div className="popup m-auto m-xl-0 font-pinar">
        <div className="section  col-11 p-0 col-xl-4 h-75 d-flex justify-content-center align-content-center flex-wrap ">
            <figure
                className="col-11 col-md-5 col-xl-9  d-flex flex-wrap justify-content-center align-items-center position-relative">
                {
                    request ?(
                        <Image src={`/img/fal${number}.png`} width={500} height={600}  className="overflow-hidden" alt=""/>
                    ): (
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    )
                }

            </figure>

            <div
                className="col-11 col-xl-9  d-flex justify-content-center align-items-center bg-light p-2 rounded-4 bg-opacity-50 z-index-2">
                <button onClick={() => setStatusPopup(false)}
                        className="btn col-xl-5 btn-danger mx-1 d-flex justify-content-center align-items-center">
                    بستن
                </button>
                <button className="btn col-xl-5 btn-success mx-1 d-flex justify-content-center align-items-center"
                        onClick={() => setStatusInvite(true)}>دعوت از دوستان
                </button>
            </div>
        </div>

    </div>);
}

export default Index;