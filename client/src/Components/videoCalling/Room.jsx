import React ,{useState,useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { DataContext } from '../../context/DataProvider.js';
import FeedbackForm from '../FeedbackForm/FeedbackForm.js'
const Room = () => {
    const { roomId } = useParams();
    const {email} = useContext(DataContext);
    const [open,setOpen] = useState(false);
    const myMeeting = async (element) => {
        // const appID = Number(process.env.APP_ID);
        // const serverSecret = process.env.SERVER_SECRET;
        const appID = 1541169948;
        const serverSecret = "f930453f185d34eba9017a5e8beca7fa";
        const name = email.substring(0, email.indexOf("@"));

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,email, name );

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container:element,
            scenario : {
                mode : ZegoUIKitPrebuilt.OneONoneCall
            },
            onLeaveRoom: () => {
                setOpen(true);
              }
        })
    }
    return (
        <div>
            {!open && <div ref={myMeeting}/>}
            {open && <FeedbackForm/>}
        </div>
    )
}

export default Room
