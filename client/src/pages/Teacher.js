import React from 'react'
import NavBar from "../components/appNavBar";
function Teacher() {
    return (

        
        <div style={{ backgroundColor: '#eae6deff', padding: '10px', margin: 0, minHeight: '100vh' }}>
            <NavBar />
         <div style={{ backgroundColor: '#eef7ffff ', color: 'black', padding: '10px', display: 'inline-block', marginTop: '5px' }}>
         <span style={{ fontSize: '55px', fontWeight: 'bold' }}> % at risk students </span>
                <br/>
                <br/>
                <span style={{ fontSize: '45px', fontWeight: 'bold' }}> Most Prevelant Issues:  </span>
                <br/>
                <br/>
                <span style={{ fontSize: '25px' }}> Reason 1:  </span>
                <br/>
                x% of students are unsatisfactory in this regard
                <br/>
                <br/>
                <span style={{ fontSize: '25px' }}> Reason 2:  </span>                <br/>
                y% of students are unsatisfactory
                <br/>
                <br/>
                <span style={{ fontSize: '25px' }}> Reason 3:  </span>                <br/>
                z% ...
                <br/>
                <br/>
                <span style={{ fontSize: '25px' }}> Reason 4:  </span>                <br/>
                l%....
                <br/>
                <br/>
                <span style={{ fontSize: '25px' }}> Reason 5:j </span>                <br/>
                h%

                <br/>
                <br/>


            </div>

            
        </div>
    )
}

export default Teacher;