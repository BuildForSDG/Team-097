//This page consists of fallback components used during app loading
/* TODO:
* Make the loading into an animated svg --done
* Add an error fall back page, for full page error display
*/
import React from 'react';
import { Spinner } from 'react-bootstrap';

import './fallback.css'

//This component is for a full page error msg display
function PageFallback(props) {
	
	return(

		<div className="Fall-header"> 
			<div style={{display:'flex',alignItems:'center'}} >
				<p style={{
					color:"#28a745",
					fontWeight:'300',
					marginRight:'15px',
					marginBottom:'0px'
				}} > 
				{ props.msg ? props.msg : 'Agro-Networks' } </p>
				<Spinner animation='border' variant='success' />
			</div>
		</div>
	);
}

//This component is for a full page error msg display
export function LoadingBar(props) {
	
	return(
		<div style={{marginRight:'10px',marginLeft:'10px'}}> 
			<Spinner animation='border' variant='success' />
		</div>
	);
}
export default PageFallback