import React, {useState, useRef} from 'react';
import '../styles/welcome.css';
import SlidingContainer from '../components/SlidingContainer';
import FuturisticBackground from '../components/FuturisticBackground';
import FadeIn from '../components/FadeIn';

const Welcome = () => {
    const [fadeInTrigger, setFadeInTrigger] = useState(false);
    const triggerFadeInRef = useRef(() => setFadeInTrigger(true));
  
    return (
        <div>
        <FuturisticBackground />
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <SlidingContainer ref={triggerFadeInRef}>
            <h1 className="title">Nicole Kaneshige</h1>
            </SlidingContainer>
    
            <p>
            <FadeIn trigger={fadeInTrigger}>
                Welcome! I’m Nicole, a software developer with a focus on building 
                efficient and reliable solutions. I enjoy working on challenging projects 
                and continuously improving my skills in software development.
            </FadeIn>
            </p>
        </div>
      </div>
    );
  };
  
  export default Welcome;