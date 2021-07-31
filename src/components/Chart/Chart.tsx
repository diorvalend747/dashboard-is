import ChartOne from './ChartOne'
import ChartThree from './ChartThree'
import ChartTwo from './ChartTwo'

const ChartSection = (): any => {
   return (
      <div className="chart-container">
         <div className="chart-box">
            <h3>Chart 1</h3>
            <div className="chart-wrapper">
               <div className="chart-month">
                  <h5>May</h5>
                  <h5>Apr</h5>
                  <h5>Mar</h5>
                  <h5>Feb</h5>
                  <h5>Jan</h5>
               </div>
               <div className="chart-one">
                  <ChartOne />
               </div>
            </div>
            <div className="chart-number">
               <h5>01</h5>
               <h5>02</h5>
               <h5>03</h5>
               <h5>04</h5>
               <h5>05</h5>
               <h5>06</h5>
               <h5>07</h5>
            </div>
         </div>
         <div className="chart-box">
            <h3>Chart 2</h3>
            <div className="chart-wrapper">
               <ChartTwo />
            </div>
            <div className="chart-data-2">
               <svg className="svg-1" width="14" height="14"><circle fill="#C2D9D7" cx="7" cy="7" r="7" /></svg>&nbsp;&nbsp;
               <h4>Text 1</h4>&nbsp;&nbsp;
               <svg className="svg-1" width="14" height="14"><circle fill="#315858" cx="7" cy="7" r="7" /></svg>&nbsp;&nbsp;
               <h4>Text 2</h4>
            </div>
         </div>
         <div className="chart-box">
            <h3>Chart 3</h3>
            <div className="chart-wrapper">
               <div>
                  <ChartThree />
               </div>
               <div className="chart-data-3">
                  <h4>Text 1</h4>
                  <p>40 Guest(s)</p>
                  <svg className="svg-1" width="14" height="14"><circle fill="#E66E3B" cx="7" cy="7" r="7" /></svg>
                  <hr />
                  <h4>Text 2</h4>
                  <p>210 Guest(s)</p>
                  <svg className="svg-2" width="14" height="14"><circle fill="#F7E8E5" cx="7" cy="7" r="7" /></svg>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ChartSection;
