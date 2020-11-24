import React,{useState,useEffect} from 'react';
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';
import './Analytics.css';
import { Link, Redirect,useHistory } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { GoogleLogout } from 'react-google-login';
import axios from '../axios';

function Analytics() {

    const [startDate, setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");
    const [dbData, setdbData] = useState([]);
    const [analyticsData, setanalyticsData] = useState([]);

    const history = useHistory();

    useEffect(() => {
        axios.get(`/contact/count`)
        .then(res => {
            console.log(res.data);
            setdbData(res.data);
            res.data.sort(function(itema, itemb){
                var a = itema._id
                var b = itemb._id
                // var aa = date_a.split('-').reverse().join(),
                //     bb = date_b.split('-').reverse().join();
                return a < b ? -1 : (a > b ? 1 : 0);
            });
            res.data.map(resp => {
                analyticsData.push({x:resp._id , y:resp.count});
            })
            console.log(analyticsData);
        })
        .catch(err =>{
            console.log(err);
        })

        
        // setTimeout(() => {
        //     dbData.map(res=>{
        //         analyticsData.push({x:res._id , y:res.count});
        //     })
    
            
        // }, 2000);
    }, []);
            
    

    const data = [
        {									
            color: "steelblue", 
            points: analyticsData 
        }
    ];

    const pointHover = (response) => {
        console.log(response);
    }

    const logout = () => {
        console.log("logout sucsess");
        history.push('/');

    }

    console.log(startDate);
    console.log(endDate);

    return (
        <div className="analytics">
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

            <div className="date-container">
                <div className='start-date-container'>
                    <p className="start-date-line">Start Date :</p>
                    <input className="start-date-input" type="date" onChange={e => setStartDate(e.target.value)} />
                </div>
                <div className='end-date-container'>
                    <p className = 'end-date-line'>End Date :</p>
                    <input className="end-date-input" type="date" onChange={e => setEndDate(e.target.value)} /> 
                </div>

            </div>
            <div className="line-chart">

                    <LineChart 
                        width={900}
                        height={400}
                        data={data}
                        xMax={endDate}
                        xMin={startDate}
                        yMin={0}
                        isDate='true'
                        interpolate='Linear'
                        xLabel = 'Date'
                        yLabel = 'Enquiries Recieved'
                        ticks={5}
                        onPointHover={pointHover}
                    />
            </div>	
        </div>
    )
}

export default Analytics;
