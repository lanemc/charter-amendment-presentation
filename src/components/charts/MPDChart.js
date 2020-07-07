import React from 'react'
import CanvasJSReact from '../../assets/canvasjs.react'

const CanvasJSChart = CanvasJSReact.CanvasJSChart

const MPDChart = () => {
  const options = {
    title: {
      text: "MPD Current Budget - $193 Million"
    },
    data: [
      {				
        type: "pie",
        startAngle: 25,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 100, label: "MPD Enforcement Activities" },
        ],
      }
    ]
  }

  const containerProps = {
    height: "30%"
  }

  return (
    <CanvasJSChart containerProps={containerProps} options={options} />
  )
}

export default MPDChart