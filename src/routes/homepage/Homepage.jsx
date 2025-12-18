import { Link } from 'react-router-dom'
import './homepage.css'
import { TypeAnimation } from 'react-type-animation'


const Homepage = () => {
    return (
        <div className='homepage'>
            <img src="/orbital.png" alt="" className="orbital" />
            <div className="left">
                <h1>DADGPT</h1>
                <h2>Personalized chatbot that specializes in indian music and food!</h2>
                <h3>Merry Christmas dad. This chatbot is your christmas gift because I made
                    it from scratch including the UI, authentication, and
                    everything!!!
                </h3>
                <Link to="/dashboard">Get Started</Link>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <div className="bgContainer">
                        <div className="bg"></div>
                    </div>
                    <img src="/Dad.png" alt="" className="dad" />
                    <div className="chat">
                        <img src="/dad2.png" alt="" />
                        <TypeAnimation
                            sequence={[
                             // Same substring at the start will only be typed out once, initially
                            'What de ass is this',
                             1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Good lord',
                             1000,
                            'Aye be careful on dat road. Make sure to watch those side mirrors',
                             1000,
                            'Ya see it dee questions yah ASK',
                             1000
                            ]}
                            wrapper="span"
                            speed={50}
                            cursor={true}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage