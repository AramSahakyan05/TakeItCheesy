import video from '../../assets/about/video.mp4';

const VideoPlayer = () => {

  return <video 
            src={video} 
            typeof='video/mp4' 
            style={{width: '100%', borderRadius: '30px'}} 
            controls 
          ></video>
};

export default VideoPlayer;
