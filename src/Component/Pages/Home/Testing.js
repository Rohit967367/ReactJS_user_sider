// import React from 'react'
// import JitsiMeeting from "@jitsi/web-sdk"

// const Testing = () => {const domain = 'meet.jit.si';
// const options = {
//     roomName: 'JitsiMeetAPIExample',
//     width: 700,
//     height: 700,
//     parentNode: document.querySelector('#meet')
// };
// const api = new JitsiMeetExternalAPI(domain, options);
//   return (
//     <div>Testing</div>
//   )
// }

// export default Testing

import React from "react";
import { JitsiMeeting } from "@jitsi/web-sdk";

// const Nav = () => {
//   return (
//     <div>
//       <JitsiMeeting
//         domain="meet.jit.si"
//         roomName="Suresh"
//         configOverwrite={{
//           startWithAudioMuted: true,
//           disableModeratorIndicator: true,
//           // startScreenSharing: true,
//           enableEmailInStats: false,
//         }}
//         interfaceConfigOverwrite={{
//           DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
//           SHOW_JITSI_WATERMARK: false,
//           SHOW_WATERMARK_FOR_GUESTS: false,
//         }}
//         userInfo={{
//           displayName: "YOUR_USERNAME",
//         }}
//         onApiReady={(externalApi) => {
//           // here you can attach custom event listeners to the Jitsi Meet External API
//           // you can also store it locally to execute commands
//         }}
//         getIFrameRef={(iframeRef) => {
//           iframeRef.style.height = "100vh";
//         }}
//       />
//     </div>
//   );
// };

// export default Nav;

export const Testing = () => {
  return (
    <JitsiMeeting
      domain="meet.jit.si"
      roomName="ramesh"
      configOverwrite={{
        startWithAudioMuted: true,
        disableModeratorIndicator: true,
        startScreenSharing: false,
        enableEmailInStats: false,
      }}
      interfaceConfigOverwrite={{
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
      }}
      userInfo={{
        displayName: "YOUR_USERNAME",
      }}
      onApiReady={(externalApi) => {
        // here you can attach custom event listeners to the Jitsi Meet External API
        // you can also store it locally to execute commands
      }}
      getIFrameRef={(iframe) => {
        iframe.style.height = "100Vh";
      }}
    />
  );
};
