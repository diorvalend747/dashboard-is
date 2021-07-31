const ChartThree = (): any => {
   return (
      <svg className="circle-chart" viewBox="0 0 180 180" width="180" height="180" xmlns="https://www.w3.org/2000/svg">
         <circle className="circle-chart__background" stroke="#F7E8E5" strokeWidth="20" fill="none" cx="90"
            cy="90" r="75" />
         <circle className="circle-chart__circle" stroke="#E66E3B" strokeWidth="20" strokeDasharray="330,471"
            strokeLinecap="round" fill="none" cx="90" cy="90" r="75" />
         <g className="circle-chart__info">
            <text className="circle-chart__percent" x="90" y="90" alignmentBaseline="central"
               textAnchor="middle" fontSize="18px" fill="#E66E3B">70%</text>
         </g>
      </svg>
   )
}

export default ChartThree;
