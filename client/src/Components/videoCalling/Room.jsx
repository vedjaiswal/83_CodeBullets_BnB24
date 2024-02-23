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
        
        const appIdStr = process.env.REACT_APP_APP_ID;
        const appID = parseInt(appIdStr)
        console.log(appID);
        console.log(typeof(appID))

        const serverSecret = process.env.REACT_APP_SERVER_SECRET;
        console.log(serverSecret);
        console.log(typeof(serverSecret))

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
