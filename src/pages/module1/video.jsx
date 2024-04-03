import React from 'react';

const VideoComponent = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen">
            <video className="w-full h-full" controls>
                <source src="welcome_message.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoComponent;