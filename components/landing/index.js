import React from 'react';
import Book from "../book/book";
import OtpCode from "../form/otpCode";
import UsernamePassword from "../form/username&password";
import {useSelector} from "react-redux";
import Image from "next/image";

function Index({setStatusPopup}) {

    const {request} = useSelector(state => state)

    return (<>
            <section className="top-section d-flex justify-content-center align-items-center">

                <img src="img/barf.png" className="img-hendevaneh img5 d-none d-xl-flex" alt=""/>
                <img src="img/barf2.png" className="img-hendevaneh top-0 opacity-50 disabled col-12 " alt=""/>


                <div className="col-12 d-flex flex-wrap justify-content-center align-items-center text-light">
                    <img src="img/anar.png" className="img-hendevaneh img3 col-4 " alt=""/>
                </div>
                <img src="img/hendevaneh.png" className="img-hendevaneh img1" alt=""/>
            </section>
            <section
                className="col-12 flex-wrap rounded-end rounded-pill shadow-lg flex-column-reverse flex-md-row  position-relative  p-2  d-flex justify-content-center align-items-center">
                <img src="img/hendevaneh.png" className="img-hendevaneh img2" alt=""/>
                <div className="col-12 col-md-5   border-danger position-relative">
                    <img src="img/anar.png" className="img-hendevaneh img3 col-6 " alt=""/>
                    <img src="img/barf.png" className="img-hendevaneh img4 d-none d-lg-block" alt=""/>
                    <Book setStatusPopup={setStatusPopup}/>
                </div>
                {
                    request.status === "OTP"
                        ?
                        <OtpCode/>
                        : (
                            !request?.status && <UsernamePassword/>
                        )

                }

            </section>
            <section
                className="col-12 p-xl-3 py-3 p-2 my-5 banner-center d-flex  justify-content-center align-items-center">
                <h1 dir="rtl" className="d-none d-xl-flex m-0 p-0 text-light">
                    <a href="https://elanza.com"
                       target="_blank"
                       className="text-decoration-none text-white fw-bold">
                        چله پر تخفیف الانزا
                    </a>
                </h1>
                <h1 dir="rtl" className="d-block d-xl-none m-0 p-0 fw-bold text-light">
                    <a href="https://elanza.com"
                       target="_blank"
                       className="text-decoration-none text-white fw-bold ">
                        چله پر تخفیف الانزا
                    </a>
                </h1>
                <img src="img/barf.png" className="img-hendevaneh img4 d-none d-lg-block" alt=""/>
            </section>
            <footer
                className="col-12 my-5 d-flex flex-wrap justify-content-between justify-content-xl-evenly align-items-center link ">
                <img src="img/barg.png" className="img-hendevaneh barg position-absolute d-none d-xl-flex" alt=""/>
                <Image
                    src={"/img/footer/50.png"} alt={''}
                    width={200}
                    height={50}
                />
                <Image
                    src={"/img/footer/60.png"} alt={''}
                    width={200}
                    height={50}
                />
                <Image
                    src={"/img/footer/70.png"} alt={''}
                    width={200}
                    height={50}
                />
                <Image
                    src={"/img/footer/100.png"} alt={''}
                    width={200}
                    height={50}
                />
                <Image
                    src={"/img/footer/150.png"} alt={''}
                    width={200}
                    height={50}
                />
                <Image
                    src={"/img/footer/free.png"} alt={''}
                    width={200}
                    height={50}
                />
                <img src="img/anar.png" className="img-hendevaneh img5 col-12 col-xl-3" alt=""/>
            </footer>

        </>

    );
}

export default Index;