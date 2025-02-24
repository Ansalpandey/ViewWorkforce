import {useRef} from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }
    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }


    return (
        <div className="testimonials">
            <img src={next_icon} alt="Testimonials" className="next-btn" onClick={slideForward} />
            <img src={back_icon} alt="Testimonials" className="back-btn" onClick={slideBackward} />
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_1} alt="user_1" />
                                <div>
                                    <h3>Willo</h3>
                                    <span>Delhi, India</span>
                                </div>
                            </div>
                            <p className='para'>The experts utilize their management skills, instincts and peculiar strategies to deeply understand the organisations we serve along with their different roles and responsibilities. Organisations are also benefited with Specialized services by various industry experts. We serve for the following sectors and functional areas.</p>
                        </div>
                    </li><li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_2} alt="user_1" />
                                <div>
                                    <h3>Willo</h3>
                                    <span>Delhi, India</span>
                                </div>
                            </div>
                            <p className='para'>The experts utilize their management skills, instincts and peculiar strategies to deeply understand the organisations we serve along with their different roles and responsibilities. Organisations are also benefited with Specialized services by various industry experts. We serve for the following sectors and functional areas.</p>
                        </div>
                    </li><li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_3} alt="user_1" />
                                <div>
                                    <h3>Willo</h3>
                                    <span>Delhi, India</span>
                                </div>
                            </div>
                            <p className='para'>The experts utilize their management skills, instincts and peculiar strategies to deeply understand the organisations we serve along with their different roles and responsibilities. Organisations are also benefited with Specialized services by various industry experts. We serve for the following sectors and functional areas.</p>
                        </div>
                    </li><li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_4} alt="user_1" />
                                <div>
                                    <h3>Willo</h3>
                                    <span>Delhi, India</span>
                                </div>
                            </div>
                            <p className='para'>The experts utilize their management skills, instincts and peculiar strategies to deeply understand the organisations we serve along with their different roles and responsibilities. Organisations are also benefited with Specialized services by various industry experts. We serve for the following sectors and functional areas.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Testimonials
