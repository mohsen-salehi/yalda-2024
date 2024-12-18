import React, {useEffect} from 'react';
import RequestFormComponent from "../form/requestForm";
import OtpCode from "../form/otpCode";


function ResponsiveModal({
                             isModalOpen,
                             onClose,
                             status,
                             setIsModalOpen
                         }) {


    if (!isModalOpen) {
        return null
    }

    useEffect(() => {
        if (status && status !== "OTP") {
            setIsModalOpen(false)
        }
    }, [status]);

    return (
        <section
            role="dialog"
            style={{zIndex : 10000}}
            className={'vw-100 m-0 d-flex  align-items-center justify-content-center position-fixed t-0 l-0 vh-100 bg-black bg-opacity-50'}>

            {!status && (
                <div
                    className={"form-modal  anime-show text-white position-relative d-flex flex-wrap align-content-center justify-content-center "}>
                    <button aria-label="Close Modal" onClick={() => setIsModalOpen(false)}
                            className={"click-action bg-transparent border-0 d-none d-md-block p-2 position-absolute cursor-pointer r-5 t-5"}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.00019 16.0001C4.00019 15.7348 4.10555 15.4805 4.29308 15.2929C4.48062 15.1054 4.73497 15.0001 5.00019 15.0001L24.5864 15.0001L17.2927 7.70755C17.1998 7.61464 17.1261 7.50434 17.0758 7.38295C17.0255 7.26156 16.9996 7.13145 16.9996 7.00005C16.9996 6.86866 17.0255 6.73855 17.0758 6.61716C17.1261 6.49576 17.1998 6.38546 17.2927 6.29255C17.3856 6.19964 17.4959 6.12594 17.6173 6.07566C17.7387 6.02538 17.8688 5.9995 18.0002 5.9995C18.1316 5.9995 18.2617 6.02538 18.3831 6.07566C18.5045 6.12594 18.6148 6.19964 18.7077 6.29255L27.7077 15.2926C27.8007 15.3854 27.8744 15.4957 27.9248 15.6171C27.9751 15.7385 28.001 15.8686 28.001 16.0001C28.001 16.1315 27.9751 16.2616 27.9248 16.383C27.8744 16.5044 27.8007 16.6147 27.7077 16.7076L18.7077 25.7076C18.5201 25.8952 18.2656 26.0006 18.0002 26.0006C17.7348 26.0006 17.4803 25.8952 17.2927 25.7076C17.105 25.5199 16.9996 25.2654 16.9996 25.0001C16.9996 24.7347 17.105 24.4802 17.2927 24.2926L24.5864 17.0001L5.00019 17.0001C4.73497 17.0001 4.48062 16.8947 4.29308 16.7072C4.10555 16.5196 4.00019 16.2653 4.00019 16.0001Z"
                                fill="white"/>
                        </svg>
                    </button>

                    <button aria-label="Close Modal" onClick={() => setIsModalOpen(false)}
                         className={"click-action w-100 d-md-none bg-transparent border-0 d-flex justify-content-end px-3  cursor-pointer "}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.00019 16.0001C4.00019 15.7348 4.10555 15.4805 4.29308 15.2929C4.48062 15.1054 4.73497 15.0001 5.00019 15.0001L24.5864 15.0001L17.2927 7.70755C17.1998 7.61464 17.1261 7.50434 17.0758 7.38295C17.0255 7.26156 16.9996 7.13145 16.9996 7.00005C16.9996 6.86866 17.0255 6.73855 17.0758 6.61716C17.1261 6.49576 17.1998 6.38546 17.2927 6.29255C17.3856 6.19964 17.4959 6.12594 17.6173 6.07566C17.7387 6.02538 17.8688 5.9995 18.0002 5.9995C18.1316 5.9995 18.2617 6.02538 18.3831 6.07566C18.5045 6.12594 18.6148 6.19964 18.7077 6.29255L27.7077 15.2926C27.8007 15.3854 27.8744 15.4957 27.9248 15.6171C27.9751 15.7385 28.001 15.8686 28.001 16.0001C28.001 16.1315 27.9751 16.2616 27.9248 16.383C27.8744 16.5044 27.8007 16.6147 27.7077 16.7076L18.7077 25.7076C18.5201 25.8952 18.2656 26.0006 18.0002 26.0006C17.7348 26.0006 17.4803 25.8952 17.2927 25.7076C17.105 25.5199 16.9996 25.2654 16.9996 25.0001C16.9996 24.7347 17.105 24.4802 17.2927 24.2926L24.5864 17.0001L5.00019 17.0001C4.73497 17.0001 4.48062 16.8947 4.29308 16.7072C4.10555 16.5196 4.00019 16.2653 4.00019 16.0001Z"
                                fill="white"/>
                        </svg>
                    </button>

                    <h3 dir={"rtl"} className={"w-100 text-center"}>
                        برای اینکه بتونی فال بگیری
                    </h3>
                    <h3 dir={"rtl"} className={"w-100 text-center"}>
                        اطلاعاتت رو وارد کن!
                    </h3>


                    <RequestFormComponent/>

                </div>
            )}

            {status === "OTP" && (
                <div
                    className={"form-modal anime-show text-white position-relative d-flex flex-wrap align-content-center justify-content-center "}>
                    <div onClick={onClose}
                         className={"click-action d-none d-md-block p-2 position-absolute cursor-pointer r-5 t-5"}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.00019 16.0001C4.00019 15.7348 4.10555 15.4805 4.29308 15.2929C4.48062 15.1054 4.73497 15.0001 5.00019 15.0001L24.5864 15.0001L17.2927 7.70755C17.1998 7.61464 17.1261 7.50434 17.0758 7.38295C17.0255 7.26156 16.9996 7.13145 16.9996 7.00005C16.9996 6.86866 17.0255 6.73855 17.0758 6.61716C17.1261 6.49576 17.1998 6.38546 17.2927 6.29255C17.3856 6.19964 17.4959 6.12594 17.6173 6.07566C17.7387 6.02538 17.8688 5.9995 18.0002 5.9995C18.1316 5.9995 18.2617 6.02538 18.3831 6.07566C18.5045 6.12594 18.6148 6.19964 18.7077 6.29255L27.7077 15.2926C27.8007 15.3854 27.8744 15.4957 27.9248 15.6171C27.9751 15.7385 28.001 15.8686 28.001 16.0001C28.001 16.1315 27.9751 16.2616 27.9248 16.383C27.8744 16.5044 27.8007 16.6147 27.7077 16.7076L18.7077 25.7076C18.5201 25.8952 18.2656 26.0006 18.0002 26.0006C17.7348 26.0006 17.4803 25.8952 17.2927 25.7076C17.105 25.5199 16.9996 25.2654 16.9996 25.0001C16.9996 24.7347 17.105 24.4802 17.2927 24.2926L24.5864 17.0001L5.00019 17.0001C4.73497 17.0001 4.48062 16.8947 4.29308 16.7072C4.10555 16.5196 4.00019 16.2653 4.00019 16.0001Z"
                                fill="white"/>
                        </svg>
                    </div>

                    <div onClick={onClose}
                         className={"click-action w-100 d-md-none d-flex justify-content-end position-absolute  px-3 p-0 cursor-pointer "}
                         style={{marginTop: 40}}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.00019 16.0001C4.00019 15.7348 4.10555 15.4805 4.29308 15.2929C4.48062 15.1054 4.73497 15.0001 5.00019 15.0001L24.5864 15.0001L17.2927 7.70755C17.1998 7.61464 17.1261 7.50434 17.0758 7.38295C17.0255 7.26156 16.9996 7.13145 16.9996 7.00005C16.9996 6.86866 17.0255 6.73855 17.0758 6.61716C17.1261 6.49576 17.1998 6.38546 17.2927 6.29255C17.3856 6.19964 17.4959 6.12594 17.6173 6.07566C17.7387 6.02538 17.8688 5.9995 18.0002 5.9995C18.1316 5.9995 18.2617 6.02538 18.3831 6.07566C18.5045 6.12594 18.6148 6.19964 18.7077 6.29255L27.7077 15.2926C27.8007 15.3854 27.8744 15.4957 27.9248 15.6171C27.9751 15.7385 28.001 15.8686 28.001 16.0001C28.001 16.1315 27.9751 16.2616 27.9248 16.383C27.8744 16.5044 27.8007 16.6147 27.7077 16.7076L18.7077 25.7076C18.5201 25.8952 18.2656 26.0006 18.0002 26.0006C17.7348 26.0006 17.4803 25.8952 17.2927 25.7076C17.105 25.5199 16.9996 25.2654 16.9996 25.0001C16.9996 24.7347 17.105 24.4802 17.2927 24.2926L24.5864 17.0001L5.00019 17.0001C4.73497 17.0001 4.48062 16.8947 4.29308 16.7072C4.10555 16.5196 4.00019 16.2653 4.00019 16.0001Z"
                                fill="white"/>
                        </svg>
                    </div>
                    <h3 dir={"rtl"} className={"w-100 text-center"}>
                        کد تایید ارسال شده رو وارد کن!
                    </h3>


                    <OtpCode/>

                </div>
            )}

        </section>
    );
}

export default ResponsiveModal;