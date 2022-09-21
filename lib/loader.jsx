import React from 'react'
import TopBarProgress from "react-topbar-progress-indicator";

export default function LOADER() {
    TopBarProgress.config({
        barColors: {
            "0": "#47CC97",
            "0.5": "#43B3B7",
            "1": "#3E93E0",
        },
        shadowBlur: 5,
    })
  return (
      <div className="h-screen w-full"><TopBarProgress /></div>
  )
}
