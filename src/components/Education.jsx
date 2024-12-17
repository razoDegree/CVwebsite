import React from "react";
import InfoCard from "./InfoCard";

function Education() {
    const nachshonContent = [
        "- Math (5 Units): 91",
        "- English (5 Units): 91",
        "- Computer Science (5 Units): 95",
        "- Physics (5 Units): 87"
    ];

    return (
        <div className="education-container-black" data-cursor="-white">
            <div className="education-container">
                <div className="education-title">
                    <h2 className="poppins-light-italic education-text-top">Certificates</h2>
                    <h2 className="poppins-medium education-text-bottom">& Education</h2>
                </div>

                <div className="education-section poppins-extralight */">
                    <div className='education-line'></div>
                    <div>
                        <InfoCard name='Nachshon Program for Excellence'
                            additionalName=' (12 full years of study)'
                            years='2007 - 2018'
                            content={<div>
                                {nachshonContent.map((line, index) => (
                                    <div key={index}>{line}</div>
                                ))}
                            </div>} /><br />

                        <InfoCard name='Excel Beginner + Advanced Course'
                            additionalName=', CampusIL'
                            years='Jul 2021 - Aug 2021' /><br />

                        <InfoCard name='Real Estate Club'
                            additionalName=', Reichman University'
                            years='Nov 2022 - Mar 2023' /><br />

                        <InfoCard name='Proptech Club'
                            additionalName=', Reichman University'
                            years='Apr 2022 - Jul 2023' /><br />

                        <InfoCard name='Double Major in Computer Science and Entrepreneurship'
                            additionalName=', Reichman University'
                            years='Nov 2022 - Present (3nd year)'
                            content='GPA: 91' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;