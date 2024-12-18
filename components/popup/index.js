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

    return (<div style={{zIndex : 10000}} className="popup m-auto m-xl-0 font-pinar">
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
                className="col-11 col-xl-9  d-flex justify-content-evenly align-items-center bg-opacity-50 bg-dark border border-secondary blur-50 h-50px p-2 rounded-2 bg-opacity-50 z-index-2">
                <button onClick={() => setStatusPopup(false)}
                        className="btn  bi bi-x mx-1 d-flex justify-content-center align-items-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5425 23.5425L8.45758 8.45758" stroke="white" strokeWidth="1.8"
                              strokeLinecap="round"/>
                        <path d="M23.5424 8.45758L8.45747 23.5425" stroke="white" strokeWidth="1.8"
                              strokeLinecap="round"/>
                    </svg>

                </button>
                <button onClick={() => {
                    toast.success(` کد -${falData[number]?.code}- کپی شد.  `)
                    navigator.clipboard?.writeText(falData[number]?.code)
                }} className="btn mx-1 d-flex justify-content-center align-items-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M27 4H11C10.7348 4 10.4804 4.10536 10.2929 4.29289C10.1054 4.48043 10 4.73478 10 5V10H5C4.73478 10 4.48043 10.1054 4.29289 10.2929C4.10536 10.4804 4 10.7348 4 11V27C4 27.2652 4.10536 27.5196 4.29289 27.7071C4.48043 27.8946 4.73478 28 5 28H21C21.2652 28 21.5196 27.8946 21.7071 27.7071C21.8946 27.5196 22 27.2652 22 27V22H27C27.2652 22 27.5196 21.8946 27.7071 21.7071C27.8946 21.5196 28 21.2652 28 21V5C28 4.73478 27.8946 4.48043 27.7071 4.29289C27.5196 4.10536 27.2652 4 27 4ZM20 26H6V12H20V26ZM26 20H22V11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10H12V6H26V20Z"
                            fill="white"/>
                    </svg>


                </button>
                <button className="btn  mx-1 d-flex justify-content-center align-items-center"
                        onClick={() => setStatusInvite(true)}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M29.7074 13.2938L19.7074 3.29378C19.5676 3.15384 19.3895 3.0585 19.1955 3.01981C19.0016 2.98112 18.8005 3.00082 18.6177 3.07641C18.4349 3.15201 18.2787 3.28011 18.1687 3.44451C18.0588 3.60892 18 3.80224 17.9999 4.00003V9.04378C14.7574 9.32128 11.1762 10.9088 8.22992 13.4075C4.68242 16.4175 2.47367 20.2963 2.00992 24.3288C1.97368 24.6423 2.03725 24.9592 2.19158 25.2345C2.34591 25.5098 2.58313 25.7294 2.86949 25.8621C3.15586 25.9947 3.47677 26.0337 3.78655 25.9734C4.09634 25.9131 4.37921 25.7566 4.59492 25.5263C5.96992 24.0625 10.8624 19.4338 17.9999 19.0263V24C18 24.1978 18.0588 24.3911 18.1687 24.5555C18.2787 24.7199 18.4349 24.848 18.6177 24.9236C18.8005 24.9992 19.0016 25.0189 19.1955 24.9802C19.3895 24.9416 19.5676 24.8462 19.7074 24.7063L29.7074 14.7063C29.8944 14.5188 29.9995 14.2648 29.9995 14C29.9995 13.7352 29.8944 13.4812 29.7074 13.2938ZM19.9999 21.5863V18C19.9999 17.7348 19.8946 17.4805 19.707 17.2929C19.5195 17.1054 19.2651 17 18.9999 17C15.4899 17 12.0712 17.9163 8.83867 19.725C7.19235 20.6503 5.65844 21.7627 4.26742 23.04C4.99242 20.06 6.81992 17.2263 9.52367 14.9325C12.4262 12.4713 15.9687 11 18.9999 11C19.2651 11 19.5195 10.8947 19.707 10.7071C19.8946 10.5196 19.9999 10.2652 19.9999 10V6.41503L27.5862 14L19.9999 21.5863Z"
                            fill="white"/>
                    </svg>


                </button>
            </div>
        </div>

    </div>);
}

export default Index;