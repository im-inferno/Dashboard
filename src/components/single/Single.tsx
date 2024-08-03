import {
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import "./single.scss";

type Props = {
  id: number;
  title: string;
  img?: string;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { text: string; time: string }[];
};

export const Single = (props: Props) => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <img src={props.img} alt="" />
            <h1>{props.title}</h1>
            <button>Update</button>
          </div>
          {Object.entries(props.info).map((items) => (
            <div className="details" key={items[0]}>
              <div className="item">
                <span className="itemTitle">{items[0]} : </span>
                <span className="itemValue">{items[1]}</span>
              </div>
            </div>
          ))}
        </div>
        <hr />
        {props.chart && (
          <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart?.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey={props.chart.dataKeys[0].name}
                    stroke={props.chart.dataKeys[0].color}
                  />;
                <Line
                    type="monotone"
                    dataKey={props.chart.dataKeys[1].name}
                    stroke={props.chart.dataKeys[1].color}
                  />;
                {/* {props.chart.dataKeys.map((dataKey) => {
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />;
                })} */}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="activities">
        <h2>Latest Activity</h2>
        {props.activities?.map((activity) => (
          <ul>
            <li key={activity.text}>
              <div>
                <p>{activity.text}</p>
                <time>{activity.time}</time>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};
