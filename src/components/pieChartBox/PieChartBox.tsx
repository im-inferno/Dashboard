import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";
type Props = {
  pieData: { name: string; value: number; color: string }[];
};

export const PieChartBox = (props: Props) => {
  return (
    <div className="PieChartBox">
      <div className="title">
        <h1>Leads by Sources</h1>
      </div>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip contentStyle={{ background: "white", border: "5px" }} />
            <Pie
              data={props.pieData}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {props.pieData.map((items) => (
                <Cell key={items.name} fill={items.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {props.pieData.map((items) => (
          <div className="option">
            <div className="title" key={items.name}>
              <div className="dot" style={{ background: items.color }}></div>
              <span className="itemname">{items.name}</span>
            </div>
            <span className="value">{items.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
