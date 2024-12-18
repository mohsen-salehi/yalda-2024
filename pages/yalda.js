import Landing from "../components/landing";
import React, {useState} from "react";
import Popup from "../components/popup";
import Invite from "../components/invite";
import Alertify from "../components/alertify";
import LoadingComponent from "../components/loading/loadingComponent";
import {useSelector} from "react-redux";

export default function Home() {

    const [statusPopup, setStatusPopup] = useState(false)
    const [statusInvite, setStatusInvite] = useState(false)

    const {loading} = useSelector(state => state.loading)
    return (<div className="position-relative">

        <main className='container-fluid font-pinar p-0 m-0 vh-100 main'>
            <Landing setStatusInvite={setStatusInvite} setStatusPopup={setStatusPopup}/>
        </main>
        {statusPopup ? <Popup setStatusInvite={setStatusInvite} setStatusPopup={setStatusPopup}/> : ''}

        {statusInvite ? <Invite setStatusInvite={setStatusInvite}/> : ''}

        <Alertify/>
        {loading ? <LoadingComponent/> : ''}


    </div>)
}
