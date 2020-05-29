import React from 'react'
import PieChart from 'react-minimal-pie-chart';

const Chart = (props) => {
    // create variable "over" with all the cars whos horsepower is >= 200
    // create variable "under" with all the cars whos horsepower is < 200

    return (
        <div>
            <PieChart style={{ width: '200px' }}
                data={[
                    { title: 'Over', value: 10, color: '#AAFF22' },
                    { title: 'Under', value: 15, color: '#334455' },
                ]}
                label
                labelStyle={{
                    fill: 'white',
                    fontSize: 'small'
                }}
            />
            <Legend />
        </div>
    )
}

function Legend() {
    return (
        <h6>Horsepower: &nbsp;
            <span style={{background: '#AAFF22'}}>
                &nbsp;
                &nbsp;
                &nbsp;
            </span>
            &nbsp;
            <span>Over 200</span>
            &nbsp;
            <span style={{background: '#334455'}}>
                &nbsp;
                &nbsp;
                &nbsp;
            </span>
            &nbsp;
            <span>Under 200</span>
        </h6>
    )
}

export default Chart