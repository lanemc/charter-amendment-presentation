import React from 'react'
import CanvasJSReact from '../../assets/canvasjs.react'

const CanvasJSChart = CanvasJSReact.CanvasJSChart

const MPDChart = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: "Focus on Oversight and Accountability"
    },
    data: [{
      type: "pie",
      startAngle: 25,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [
        { y: 65, label: "Division of Law Enforcement" },
        { y: 10, label: "Law Enforcement Oversight" },      
        { y: 15, label: "Community-based Safety Solutions" },
        { y: 10, label: "Outreach, Comms, Analytics" },
      ]
    }]
  }
  return (
    <CanvasJSChart options={options} />
  )
}

export default MPDChart