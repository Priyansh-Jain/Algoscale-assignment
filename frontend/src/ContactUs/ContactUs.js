import React,{ useState } from 'react';
import axios from '../axios';
import './ContactUs.css';
import { Link, Redirect,useHistory } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { GoogleLogout } from 'react-google-login';
    

function ContactUs() {

    const history = useHistory();

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [dates, setDates] = useState("")

    const sendImageData = async (e) => {
        e.preventDefault();


        await axios.post("/contact" , {
            FirstName : firstname,
            LastName : lastname,
            Email : email,
            Message : message,
            Dates : dates,
        })
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });

        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage("");
        setDates("");
    };

    const logout = () => {

        console.log("Logout sucess");
        history.push('/');

    }

    return (

        <div className="contact">

        <div className="gallery-header">
        
            <img className="logo" src="https://4.bp.blogspot.com/_F36VTI8AUzI/SjU1TTyvAbI/AAAAAAAAAsw/Yioe9n8xbQA/w1200-h630-p-k-no-nu/pj_logo.jpg"></img>

             <div className="gallery-search">
                 <Link to="/contact"><p className="contact-header">CONTACT US</p></Link>
                 <Link to="/analytics"><p className="analytics-header">ANALYTICS</p></Link>

                 
            </div>

                 < ExitToAppIcon className='google-logout-button' onClick={logout} style={{ fontSize: 40 }}/>

            {/* <GoogleLogout
                    className='google-logout-button'
                    clientId="247166668893-859lrbapq7gjtuj5bfubcjuk5e7mv8pi.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                    >
                </GoogleLogout> */}
        </div>

        <div className="person-form">
                <form class="login-form" >
                    <h1>Contact Us Form</h1>
                    <div class="textb">
                        <input type="text" required name="firstname" value={firstname} onChange={e => setFirstName(e.target.value)} />
                        <div class="placeholder">FirstName</div>
                    </div>
    
                    <div class="textb">
                        <input type="text" required name="lastname" value={lastname} onChange={e => setLastName(e.target.value)} />
                        <div class="placeholder">LastName</div>
                    </div>
    
                    <div class="textb">
                        <input type="text" required name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <div class="placeholder">Email</div>
                    </div>

                    <div class="textb">
                        <textarea type="text" required name="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                        <div class="placeholder">Message</div>
                    </div>

                    <div class="textb">
                    <input type="date" name='dates' value={dates} onChange={e => setDates(e.target.value)}></input>

                    </div>
                        
    
                    <button onClick={sendImageData} class="btn" type="submit">SUBMIT</button>
                    
                </form>
            </div>
            </div>
    )
}

export default ContactUs;
