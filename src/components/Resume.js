import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>


       <div className="row Resume">
       <div className="three columns header-col">
               <h1><span>Resume</span></h1>
               <a href="https://docs.google.com/document/d/10TL155w1Kjuwpv3vqoYTO48aM9MGGGzAtTvxE4yCwCA/edit?usp=sharing">My Resume</a>
            </div>


       </div>
      </section>
    );
  }
}