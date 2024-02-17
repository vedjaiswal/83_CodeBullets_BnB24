import React ,{useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { DataContext } from '../../context/DataProvider.jsx';
const Room = () => {
    const { roomId } = useParams();
    const {token} = useContext(DataContext);
    const myMeeting = async (element) => {
        const appID = Number(process.env.APP_ID);
        const serverSecret = process.env.SERVER_SECRET;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,Math.random(5).toString(), "Krishna Khadke");
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
