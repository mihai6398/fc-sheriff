import {Intro, GetApp, YouTubeVideo, CommunityPoweredProduct, RewardInstagramGallery} from "../componets/ui/MainUI";

const Rewards = () => {
    return (
        <>
         <Intro/>
         <RewardInstagramGallery/>
         <CommunityPoweredProduct title={<>We believe in the <br/> power of the community</>} imageUrl={'/assets/image/community-powered-product.png'} description={'Our goal is to create a product and service that you\'re satisfied with and use it every day. This is why we\'re constantly working on our services to make it better every day and really listen to what our users has to say.'}/>
         <YouTubeVideo videoSrc={'https://www.youtube.com/embed/t-1aVCkmUSg'}/>
         <GetApp/>
        </>
    );
};

export default Rewards;