import {Container} from "react-bootstrap";
interface youTubeVideoProps {
    videoSrc: string;
}

const YouTubeVideo = ({videoSrc}: youTubeVideoProps) => {
    return (
        <Container className={'video-yt py-5 '}>
            <div>
                <iframe className={'iframe-video-yt w-100'} height={'720'} src={videoSrc}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        </Container>
    );
};

export default YouTubeVideo;