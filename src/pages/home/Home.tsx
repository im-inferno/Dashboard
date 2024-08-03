
import { ChartBox } from "../../components/chartBox/ChartBox"
import { Topbox } from "../../components/topBox/Topbox"
import { areaChartData, barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser, pieChartData } from "../../data"
import "./home.scss"
import { BarChartBox } from "../../components/barChart/BarChartBox"
import { PieChartBox } from "../../components/pieChartBox/PieChartBox"
import { BigChartBox } from "../../components/bigChartBox/BigChartBox"
export const Home = () => {   
  return (
    <div className="home">
    <div className="box box1"><Topbox/></div>
    <div className="box box2"><ChartBox {...chartBoxUser}/></div>
    <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
    <div className="box box4"><PieChartBox pieData={pieChartData} /></div>
    <div className="box box5"><ChartBox {...chartBoxRevenue}/></div>
    <div className="box box6"><ChartBox {...chartBoxConversion}/></div>
    <div className="box box7"><BigChartBox  chartdata={areaChartData} /></div>
    <div className="box box8"><BarChartBox {...barChartBoxRevenue} /></div>
    <div className="box box9"><BarChartBox {...barChartBoxVisit} /></div>
    </div>
  )
}
  