const HomeVideo = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 min-h-full min-w-full object-cover"
            >
                <source src="/videos/temp_video.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default HomeVideo;
