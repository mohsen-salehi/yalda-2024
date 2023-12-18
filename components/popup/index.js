import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import Image from "next/image";
import LoadingComponent from "../loading/loadingComponent";
import {toast} from "react-toastify";

function Index({setStatusPopup, setStatusInvite}) {
    const [loading , setLoading] = useState(false)
    const [number , setNumber] = useState(0)
    const {request} = useSelector(state => state)

    const falData = [
        {url : "/img/fal1.png" , code : 'CHPR50'},
        {url : "/img/fal2.png" , code : 'CHPR50'},
        {url : "/img/fal3.png" , code : 'CHPR70'},
        {url : "/img/fal4.png" , code : 'CHPR70'},
        {url : "/img/fal5.png" , code : 'CHPR60'},
        {url : "/img/fal6.png" , code : 'CHPR60'},
        {url : "/img/fal7.png" , code : 'CHPR60'},
        {url : "/img/fal8.png" , code : 'CHPR60'},
        {url : "/img/fal9.png" , code : 'CHPRFR'},
        {url : "/img/fal10.png" , code : 'CHPRFR'},
        {url : "/img/fal11.png" , code : 'CHPRFR'},
    ]


    useEffect(()=>{
        setNumber(Math.floor(Math.random() * 10) + 1)
        setTimeout(() => {
            setLoading(true)
        } , 500)
    },[request])

    return (<div className="popup m-auto m-xl-0 font-pinar">
        <div className="section  col-11 p-0 col-xl-4 h-75 d-flex justify-content-center align-content-center flex-wrap ">
            <figure
                className="col-11 col-md-5 col-xl-9  d-flex flex-wrap justify-content-center align-items-center position-relative">
                {
                    loading ?(
                        <Image src={falData[number]?.url} width={500} height={600}  className="overflow-hidden" alt=""/>
                    ): (
                       <LoadingComponent/>
                    )
                }

            </figure>

            <div
                className="col-11 col-xl-9  d-flex justify-content-center align-items-center bg-light p-2 rounded-4 bg-opacity-50 z-index-2">
                <button onClick={() => setStatusPopup(false)}
                        className="btn btn-danger bi bi-x mx-1 d-flex justify-content-center align-items-center">
                </button>
                <button onClick={() => {
                    toast.success(` کد -${falData[number]?.code}- کپی شد.  `)
                    navigator.clipboard?.writeText(falData[number]?.code)
                }} className="btn btn-light bi bi-copy mx-1 d-flex justify-content-center align-items-center"></button>
                <button className="btn bi bi-share  btn-success mx-1 d-flex justify-content-center align-items-center"
                        onClick={() => setStatusInvite(true)}>
                </button>
            </div>
        </div>

    </div>);
}

export default Index;