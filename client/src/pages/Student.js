import React from 'react'


import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import NavBar from "../components/appNavBar";

function MultipleInputsExample({ label, placeholder }) {
    return (
        <div className="container">

            <div className="box">
                <InputGroup className="mb-3" style={{ backgroundColor: '#eae6deff' }}>
                    <InputGroup.Text>{label}</InputGroup.Text>
                    <Form.Control aria-label={label} placeholder={placeholder} />
                </InputGroup>
            </div>
        </div>
    );
}

function RightBlock() {
    return (
        <div style={{ position: 'absolute', right: 0, top: 100, backgroundColor: '#eef7ffff', color: 'black', padding: '10px', width: '800px', minHeight: '50vh', marginRight: 15 }}>
            <span style={{ fontSize: '35px', fontWeight: 'bold' }}> Results:  </span>
            <div>
            <br/>
            <br/>
            <span style={{ fontSize: '25px' }}> Projected Grade:  </span>

                <br/>
                <br/>

                <span style={{ fontSize: '25px' }}> Area's to Improve:  </span>
                <br/>
                <br/>
                <span style={{ fontSize: '20px' }}> Area X:  </span>
                <br/>
                <br/>
                <span style={{ fontSize: '20px' }}> Area Y:  </span>
                <br/>
                <br/>
                <span style={{ fontSize: '20px' }}> Area Z:  </span>
                <br/>
                <br/>
                <br/>
                <br/>
                <span style={{ fontSize: '25px' }}> Projected Grade Post Improvement: ...  </span>

            </div>


        </div>
    );
}



function Student() {
    return (
        <div style={{ backgroundColor: '#eae6deff', padding: '10px' }}>
            <NavBar />
            <div className="main-container">
                <div className="form-container">

                    <span style={{ fontSize: '35px', fontWeight: 'bold' }}> Student Information:  </span>

                    <br />
                    <br />


                    <MultipleInputsExample label="Age: " placeholder="Enter Age" />
                    <br />
                    <MultipleInputsExample label="Sex: " placeholder="Enter Sex" />
                    <br />
                    <MultipleInputsExample label="Graduated high-school type: " placeholder="Enter high-school education" />
                    <br />
                    <MultipleInputsExample label="Scholarship type: " placeholder="Enter Scholarship type" />
                    <br />
                    <MultipleInputsExample label="Work: " placeholder="Enter work status" />
                    <br />
                    <MultipleInputsExample label="Extra Curricular activity: " placeholder="Enter activity status" />
                    <br />
                    <MultipleInputsExample label="Partner Status: " placeholder="Enter partner status" />
                    <br />
                    <RightBlock></RightBlock>
                    <MultipleInputsExample label="Salary: " placeholder="Enter total salary" />
                    <br />
                    <MultipleInputsExample label="Transportation: " placeholder="Enter transportation choice" />
                    <br />
                    <MultipleInputsExample label="Living status: " placeholder="Enter living status" />
                    <br />
                    <MultipleInputsExample label="Mothers education: " placeholder="Enter Mothers education" />
                    <br />
                    <MultipleInputsExample label="Fathers education: " placeholder="Enter fathers education" />
                    <br />
                    <MultipleInputsExample label="Siblings: " placeholder="Enter number of siblings" />
                    <br />
                    <MultipleInputsExample label="Parental status: " placeholder="Enter parental status" />
                    <br />
                    <MultipleInputsExample label="Mothers job: " placeholder="Fathers job" />
                    <br />
                    <MultipleInputsExample label="Weekly studying hours: " placeholder="Enter weekly study hours" />
                    <br />
                    <MultipleInputsExample label="Reading frequency (non-scientific): " placeholder="Enter reading status" />
                    <br />
                    <MultipleInputsExample label="Reading frequency (scientific): " placeholder="Enter reading status" />
                    <br />
                    <MultipleInputsExample label="Attendance to optional events: " placeholder="Enter attendance" />
                    <br />
                    <MultipleInputsExample label="Impact of projects: " placeholder="Enter impact" />
                    <br />
                    <MultipleInputsExample label="Attendance to classes: " placeholder="Enter attendance" />
                    <br />
                    <MultipleInputsExample label="Preperation for midterm: " placeholder="Enter preperation" />
                    <br />
                    <MultipleInputsExample label="Note taking: " placeholder="Enter status" />
                    <br />
                    <MultipleInputsExample label="Listening in class: " placeholder="Enter status" />
                    <br />
                    <MultipleInputsExample label="Discussion importance: " placeholder="Enter importance" />
                    <br />
                    <MultipleInputsExample label="Flip-classroom: " placeholder="Enter status" />
                    <br />
                    <MultipleInputsExample label="GPA last semester: " placeholder="Enter GPA" />
                    <br />
                    <MultipleInputsExample label="Expected GPA: " placeholder="Enter GPA" />
                    <br />
                    <MultipleInputsExample label="Course ID: " placeholder="Enter ID" />
                    <br />
                    <MultipleInputsExample label="Output grade: " placeholder="Enter grade" />
                </div>
                <br />
                <div style={{ backgroundColor: '#500000ff', padding: '10px', display: 'inline-block', width: 'auto' }}>
                    <span style={{ fontSize: '25px', fontWeight: 'bold', color: 'white' }}> Submit </span>
                </div>
            </div>
        </div>

    );
}

export default Student;


