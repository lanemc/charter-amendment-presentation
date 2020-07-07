import React from 'react'
import CanvasJSReact from '../../assets/canvasjs.react'

const CanvasJSChart = CanvasJSReact.CanvasJSChart

const MPDChart = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: "Focus on Community-Based Solutions"
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
        { y: 0, label: "Division of Law Enforcement" },
        { y: 40, label: "Unarmed Peace Officers" },      
        { y: 40, label: "Community-based safety solutions" },
        { y: 20, label: "Economic Justice" },
      ]
    }]
  }
  return (
    <CanvasJSChart options={options} />
  )
}

export default MPDChart