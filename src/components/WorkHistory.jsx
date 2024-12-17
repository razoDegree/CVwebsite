import React from 'react';
import InfoCard from './InfoCard';

function WorkHistory() {
    const EconomistKatz = [
        "- Analysis of reports and data, percentages and statistics",
        "- Working with Excel and Oracle systems",
        "- Monitoring data and drawing lessons and conclusions"
    ];

    return (
        <div className="work-history-container-black" id="work">
            <div className="work-history-container">
                <div className="work-history-title">
                    <h2 className="poppins-light-italic work-history-text-top">Work</h2>
                    <h2 className="poppins-medium work-history-text-bottom">Experience</h2>
                </div>

                <div className="work-history-section poppins-extralight */">
                    <div className='work-history-line'></div>
                    <div>
                        <InfoCard name='Courier (part-time)'
                            additionalName=', Givat Brenner'
                            years=' Jul 2021 - Aug 2021'
                            content='at Katz Deliveries Ltd.' /><br />

                        <InfoCard name='Surfing Instructor (part-time)'
                            additionalName=', Bat Yam'
                            years='Apr 2017 - Aug 2018'
                            content='at Get-Surf School Ltd.' /><br />

                        <InfoCard name='Assistant Economist (part-time)'
                            additionalName=', Givat Brenner'
                            years='Jul 2021 - Aug 2022'
                            content={<div>
                                {EconomistKatz.map((line, index) => (
                                    <div key={index}>{line}</div>
                                ))}
                            </div>} /><br />

                        <InfoCard name='Real Estate Transaction Analyst '
                            additionalName=', Rishon LeZion'
                            years='Jan 2022 - Jun 2022'
                            content='at Lidor Agam Investments Ltd.' /><br />

                        <InfoCard name='Raz Katz Investments Ltd. (Founder) '
                            additionalName=', Rishon LeZion'
                            years='Feb 2022 - Today'
                            content='- Real estate investment company' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkHistory;