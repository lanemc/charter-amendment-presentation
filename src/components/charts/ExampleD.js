import React from 'react'
import CanvasJSReact from '../../assets/canvasjs.react'

const CanvasJSChart = CanvasJSReact.CanvasJSChart

const MPDChart = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: "Focus on Community Investment"
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
        { y: 15, label: "Division of Law Enforcement" },
        { y: 30, label: "Neighborhood Organizations" },      
        { y: 40, label: "Community-based Safety Solutions" },
        { y: 15, label: "Local Clinic Support" },
      ]
    }]
  }
  return (
    <CanvasJSChart options={options} />
  )
}

export default MPDChart