import React, { useState , useEffect} from 'react';



function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
  //   // ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
  //   // return () => {
  //   //   ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
  //   // };

  });

  return isOnline;
}






export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  function onError(error) {
    console.log('获取本地媒体流失败！');
    console.error(error);
  }


  function initVideo() {
    navigator.mediaDevices.getUserMedia({
        audio: true,
        // video: true,
        video: {
          "width": {
            "min": "10",
            "max": "1189"
          },
          "height": {
            "min": "10",
            "max": "1200"
          },
          "frameRate": {
            "min": "1",
            "max": "17"
          }
        }
    }).then( function(stream) {
        // 将本地捕获的视频流装载到本地video中
        let localVideo = document.getElementById('myvideo');
        let localAudio = document.getElementById('myaudio');

        // var url = URL.createObjectURL(blob);


        localVideo.srcObject = stream;

        localVideo.onloadedmetadata = function(e) {
        console.log("Label: " + stream.label);
        //音轨，PCM

        // localAudio.src = stream.getAudioTracks();
        // localAudio.srcObject = stream;

        console.log('localAudio', localAudio);
        // localAudio.WriteAudio(stream.getAudioTracks());
        console.log("AudioTracks" , stream.getAudioTracks());

        // let videoUrl = URL.createObjectURL(stream.getVideoTracks());
        // let audioUrl = URL.createObjectURL(stream.getAudioTracks());

        // localAudio.src = audioUrl;
        // localVideo.src = videoUrl;    
             //视频图像

        console.log("VideoTracks" , stream.getVideoTracks());
    };
    
        // 将本地流加入RTCPeerConnection 实例中 发送到其他端
        // pc.addStream(stream);
    }, onError);
  }


   // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
     // 获取本地媒体流

     // initVideo();
    
    // setTimeout(() => { setCount( count + 1); }, 1000);
  });


  return (
    <div>
      <video autoPlay  width="500" height="200" id="myvideo"></video>
      <audio autoPlay  id="myaudio"></audio>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}