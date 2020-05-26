//This page consists of fallback components used during app loading
/* TODO:
* Make the loading into an animated svg --done
* Add an error fall back page, for full page error display
*/
import React from 'react';
import { Spinner } from 'react-bootstrap';

// Import out logo
import logo from '../../assets/logos/AG_cow.png';
// The css file
import './fallback.css'

//This component is for a full page loading logo
function PageFallback(props) {
	
 return(

		<div className="Fall-header"> 
			<div style={{display:'flex',alignItems:'center'}} >
     <img id='loadingLogo' alt='AgroNetwork' src={logo} />
			</div>
		</div>
	);
}

//This component is for a full page loading spinner
export function LoadingBar(props) {
	
 return(

		<div className="Fall-header"> 
			<div style={{display:'flex',alignItems:'center'}} >
			<Spinner animation='border' variant='success' />
			</div>
		</div>
	);
}

//This component is for a mini loading bar
export function LoadingSpinner(props) {
	return(
		<div style={{marginRight:'10px',marginLeft:'10px'}}> 
			<Spinner animation='border' variant='success' />
		</div>
	);
}

export default PageFallback