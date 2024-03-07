import './tribute.css'
import image from "../../assets/yellowline.png";
import TributeHeader from './TributeHeader';
const Tribute = () => {


    return (
        <>
            <TributeHeader />
            <div className='yellow_boxes'>
                <div className="box1">
                    <img src={image} className="image" />
                </div>
                <div className='box2'>
                    <p className='text'>
                        Late Sergeant Major RS Chauhan, whose remarkable contributions have left an enduring impact on the sports community. Serving as a sports officer at DIT University from 2009 to 2023 and dedicating 26 years to the Indian Army, his legacy is one of commitment and excellence
                        <br /><br />
                        Sergeant Major RS Chauhan's athletic talents extended to basketball and football, and his 14-year tenure organizing sports events at DIT University showcased his dedication to fostering a vibrant sporting community.
                        <br /><br />
                        A beacon of discipline and dedication, Sergeant Major RS Chauhan inspired athletes and students alike, instilling values of resilience, teamwork, and sportsmanship.
                        <br /><br />
                        His collaborative efforts with Elite Power Sports, ESI, and DIT University significantly contributed to the growth and success of sports programs, leaving behind a legacy that goes beyond trophies.
                        <br /><br />
                        On behalf of DIT University, we express heartfelt gratitude for his exemplary service. We appreciate his remarkable achievements and commitment to the spirit of sportsmanship.
                        <br />
                        <br /><br />
                        <span className='lastText'>
                            We miss you Sir. </span>
                    </p>
                </div>
                <div className='box3'>
                    <img src={image} className="image" />
                </div>
            </div>
        </>
    );
};

export default Tribute;
