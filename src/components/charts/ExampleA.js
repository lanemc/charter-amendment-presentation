import React from 'react'
import CanvasJSReact from '../../assets/canvasjs.react'

const CanvasJSChart = CanvasJSReact.CanvasJSChart

const MPDChart = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: "Focus on Mental Health and Victim Support"
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
        { y: 30, label: "Division of Law Enforcement" },
        { y: 30, label: "Unarmed Peace Officers" },      
        { y: 20, label: "Victim Support" },
        { y: 20, label: "Mental Health" },
      ]
    }]
  }
  return (
    <CanvasJSChart options={options} />
  )
}

export default MPDChart