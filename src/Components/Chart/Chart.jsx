import './Chart.scss';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const Chart = ({ title, data, dataKey, grid }) => {

    return (
        <div className="chart">
            <h3 className="chartTitle">
                {title}
            </h3>
            <ResponsiveContainer width="99%" aspect={5 / 1}>
                <LineChart data={data} margin={{left: 15, right: 30}}>
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip />
                    {
                        grid &&
                        <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
                    } 
                    <XAxis dataKey="name" stroke="#5550bd" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
