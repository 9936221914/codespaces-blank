import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css'; // Import Video.js CSS

function VideoPlayer({ videoSrc }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = videojs(videoRef.current, {
      autoplay: true,
      controls: true,
      sources: [
        {
          src: videoSrc, // The video source URL
          type: 'video/mp4', // The type of the video (e.g., mp4, webm, etc.)
        },
      ],
    });

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [videoSrc]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js" />
    </div>
  );
}

export default VideoPlayer;
