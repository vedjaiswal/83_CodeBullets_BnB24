import React ,{useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { DataContext } from '../../context/DataProvider.js';
const Room = () => {
    const { roomId } = useParams();
    const {email} = useContext(DataContext);
    const myMeeting = async (element) => {
        const appID = Number(process.env.APP_ID);
        const serverSecret = process.env.SERVER_SECRET;
        const name = email.substring(0, email.indexOf("@"));

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,email, name );

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container:element,
            scenario : {
                mode : ZegoUIKitPrebuilt.OneONoneCall
            }
        })
    }
    return (
        <div>
            <div ref={myMeeting}/>
        </div>
    )
}

export default Room
