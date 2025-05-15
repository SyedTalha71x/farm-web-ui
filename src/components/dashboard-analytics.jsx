/* eslint-disable no-unused-vars */
import { useState } from "react"
import "./Dashboard.css"

const Dashboard = () => {
  const [dateRange, setDateRange] = useState("17 Nov - 17 Dec")

  const metrics = [
    {
      title: "Real-Time Orders",
      value: "18,765",
      change: "+0.9%",
      isPositive: true,
    },
    {
      title: "Bounce Rate",
      value: "30.45%",
      change: "-2.35%",
      isPositive: false,
    },
    {
      title: "Average Time on Site",
      value: "4m:15s",
      change: "+1.5%",
      isPositive: true,
    },
    {
      title: "Sales",
      value: "$145,124",
      change: "+0.6%",
      isPositive: true,
    },
  ]

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboards</h1>
        <div className="date-range">
          <span className="calendar-icon">📅</span>
          <span>{dateRange}</span>
        </div>
      </div>

      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div className="metric-card" key={index}>
            <div className="metric-title">{metric.title}</div>
            <div className="metric-value">{metric.value}</div>
            <div className={`metric-change ${metric.isPositive ? "positive" : "negative"}`}>{metric.change}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
