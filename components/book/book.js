import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Image from "next/image";
import ResponsiveOTPModal from "../modal/ResponsiveModal";

function Book({setStatusPopup}) {

    const [classStatus, setClassStatus] = useState('')
    const [disableCounter, setDisableCounter] = useState(false)
    const {request} = useSelector(state => state)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getFal = () => {

        setDisableCounter(true)
        setClassStatus('open')
        setTimeout(() => {
            setStatusPopup(true)

        }, 3000)
        setTimeout(() => {
            setClassStatus('')
        }, 4000)

    }

    return (
        <>
            <div className="component d-flex align-items-center flex-wrap">
                {request?.status && request?.status !== "OTP" ? (
                    <ul className="align background-desk d-flex justify-content-center align-items-center p-0 m-0">
                        <li className={classStatus ? "d-flex justify-content-center align-items-center stage" : "d-flex justify-content-center align-items-center"}>
                            <figure className={classStatus ? 'open book l-25' : "book"}>

                                <ul className='hardcover_front'>
                                    <li>
                                        <div className="coverDesign blue">

                                        </div>
                                    </li>
                                    <li></li>
                                </ul>

                                <ul className={classStatus ? 'open page' : "page"}>
                                    <li>
                                        <img src="/img/fal1.png" alt=""/>
                                    </li>
                                    <li>
                                        <img src="/img/fal2.png" alt=""/>
                                    </li>
                                    <li>
                                        <img src="/img/fal3.png" alt=""/>
                                    </li>
                                    <li>
                                        <img src="/img/fal4.png" alt=""/>
                                    </li>
                                    <li>
                                        <img src="/img/fal5.png" alt=""/>
                                    </li>
                                    <li>
                                        <img src="/img/fal6.png" alt=""/>
                                    </li>
                                    <li>
                                        <img src="/img/fal7.png" alt=""/>
                                    </li>
                                    <li>
                                        <img src="/img/fal8.png" alt=""/>
                                    </li>
                                    <li>
                                        <img src="/img/fal9.png" alt=""/>
                                    </li>
                                    <li>
                                        <img src="/img/fal10.png" alt=""/>
                                    </li>
                                    <li>
                                        <img src="/img/fal11.png" alt=""/>
                                    </li>
                                </ul>


                                <ul className='hardcover_back'>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <ul className='book_spine'>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </figure>
                        </li>
                    </ul>
                ) : (
                    <>
                        <figure className={"w-100 d-flex d-md-none align-items-end position-relative"}
                                style={{height: "400px"}}>
                            <img src={"/img/book-desk-fruit.svg"} className={"position-absolute top-0 l-0"}
                                 width={354}
                                 style={{scale : "1.2"}}
                                 height={233} alt={""}/>

                            <div className={"w-100 d-flex align-items-center justify-content-center p-2"}>
                                {!request?.status && (
                                    <button onClick={() => setIsModalOpen(true)} type={"button"}
                                            style={{height: "48px" , width : "146px"}}
                                            className={"btn-accept  shadow-lg click-action  border-0 rounded-pill  fw-bold p-2 text-light z-index-2 h5"}>
                                        فال بگیر
                                    </button>
                                )}
                            </div>
                        </figure>
                        <figure
                            className={"w-100 d-none d-md-flex translate-middle-y align-items-end justify-content-center position-relative h-650px"}>
                            <img src={"/img/book-desk-fruit.svg"} style={{objectFit: "cover"}}
                                 className={"position-absolute w-auto "}
                                 width={796}
                                 height={500} alt={""}/>

                            <div className={"w-100 d-flex align-items-center justify-content-center p-2"}>
                                {!request?.status && (
                                    <button onClick={() => setIsModalOpen(true)} type={"button"}
                                            className={"btn-accept col-9 col-xl-4 shadow-lg click-action h-50px border-0 rounded-pill  fw-bold p-2 text-light z-index-2 h5"}>
                                        فال بگیر
                                    </button>
                                )}
                            </div>
                        </figure>
                    </>
                )}

                <div className="col-12 d-none d-md-flex justify-content-center align-items-center">
                    {(request?.status === true && request?.status !== "OTP") && (
                        <button onClick={getFal}
                                disabled={disableCounter}
                                className={`${disableCounter && 'bg-secondary'} col-9 h-50px rounded-pill h5 cursor-pointer click-action col-xl-4 btn-accept border-0 rounded fw-bold p-2 text-light z-index-2 h5`}
                                title={request?.status ? "" : "ابتدا ثبت نام کنید"}>فال بگیر
                        </button>
                    )}
                </div>
                <div className="col-12 d-flex d-md-none justify-content-center align-items-center">
                    {(request?.status === true && request?.status !== "OTP") && (
                        <button onClick={getFal}
                                disabled={disableCounter}
                                style={{height: "48px" , width : "146px"}}
                                className={`${disableCounter && 'bg-secondary'} col-9 rounded-pill h5 cursor-pointer click-action col-xl-4 btn-accept border-0 rounded fw-bold p-2 text-light z-index-2 h5`}
                                title={request?.status ? "" : "ابتدا ثبت نام کنید"}>فال بگیر
                        </button>
                    )}
                </div>

                <ResponsiveOTPModal
                    status={request?.status}
                    isModalOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
        </>
    );
}


export default Book;