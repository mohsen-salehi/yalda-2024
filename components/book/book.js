import React, {useState} from 'react';
import {useSelector} from "react-redux";

function Book({setStatusPopup}) {
    const [classStatus, setClassStatus] = useState('')
    const [disableCounter, setDisableCounter] = useState(false)
    const {request} = useSelector(state => state)
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
                <ul className="align d-flex justify-content-center align-items-center p-0 m-0">
                    <li className={classStatus ? "d-flex justify-content-center align-items-center stage" : "d-flex justify-content-center align-items-center"}>
                        <figure className={classStatus ? 'open book ' : "book"}>

                            <ul className='hardcover_front'>
                                <li>
                                    <div className="coverDesign blue">

                                    </div>
                                </li>
                                <li></li>
                            </ul>

                            <ul className={classStatus ? 'open page' : "page"}>
                                <li>
                                    <img src="img/fal1.png" alt=""/>
                                </li>
                                <li>
                                    <img src="img/fal2.png" alt=""/>
                                </li>
                                <li>
                                    <img src="img/fal3.png" alt=""/>
                                </li>
                                <li>
                                    <img src="img/fal4.png" alt=""/>
                                </li>
                                <li>
                                    <img src="img/fal5.png" alt=""/>
                                </li>
                                <li>
                                    <img src="img/fal6.png" alt=""/>
                                </li>
                                <li>
                                    <img src="img/fal7.png" alt=""/>
                                </li>
                                <li>
                                    <img src="img/fal8.png" alt=""/>
                                </li>
                                <li>
                                    <img src="img/fal9.png" alt=""/>
                                </li>
                                <li>
                                    <img src="img/fal10.png" alt=""/>
                                </li>
                                <li>
                                    <img src="img/fal11.png" alt=""/>
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
                <div className="col-12 d-flex justify-content-center align-items-center">
                    {request?.status === true && (
                        <button onClick={getFal}
                                disabled={disableCounter}
                                className={`${disableCounter && 'bg-secondary'} col-9 col-xl-3 btn-accept border-0 rounded fw-bold p-2 text-light z-index-2 h5`}
                                title={request?.status ? "" : "ابتدا ثبت نام کنید"}>فال بگیر
                        </button>
                    )}

                </div>
            </div>
        </>
    );
}


export default Book;