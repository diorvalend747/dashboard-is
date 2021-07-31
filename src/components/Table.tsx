import { useState, useEffect } from 'react';

import MenuPopUp from './MenuPopUp';

const tableData: { id: number, name: string, category: string, availability: string, arrival: string}[] = [
   {
      id: 1,
      name: "Table 01",
      category: "Category 01",
      availability: "Available",
      arrival: "Arrived",
   },
   {
      id: 2,
      name: "Table 02",
      category: "Category 02",
      availability: "FULL",
      arrival: "Hasn't Arrived",
   },
   {
      id: 3,
      name: "Table 03",
      category: "Category 03",
      availability: "Available",
      arrival: "Arrived",
   },
   {
      id: 4,
      name: "Table 04",
      category: "Category 04",
      availability: "FULL",
      arrival: "Arrived",
   },
]

const TableSection = (): any => {
   const [box, setBox] = useState<any[]>([]);
   const [popUp, setPopUp] = useState<boolean>(false);
   const [checkBox, setCheckBox] = useState<any[]>([]);

   useEffect(() => {
      setBox(tableData);
   }, []);

   const handleChange = (event: any) => {
      const { name, checked } = event.target;
      let tempBox = [] as any;

      if (name === "selectAll") {
         tempBox = box.map((box: { name: string }) => {
            return { ...box, isChecked: checked };
         });
         setBox((tempBox));
      } else {
         tempBox = box.map((box: { name: string }) => box.name === name ? { ...box, isChecked: checked } : box);
         setBox(tempBox);
      }
   }

   const handlecheckBox = (): any => {
      let tempChecked = box.filter((tc: { isChecked: boolean }) => tc.isChecked === true);
      if (tempChecked.length > 0) {
         setPopUp(true)
      } else {
         setPopUp(false);
      }
      return tempChecked;
   }

   useEffect(() => {
      setCheckBox(handlecheckBox());
      // eslint-disable-next-line
   }, [box]);

   return (
      <div className="table-container">
         <table className="table-title">
            <thead>
               <tr>
                  <th>
                     <span className="custom-checkbox">
                        <input
                           type="checkbox"
                           name="selectAll"
                           checked={box.filter((box: { isChecked: boolean; }) => box.isChecked !== true).length < 1}
                           onChange={handleChange}
                        />
                        <label></label>
                     </span>
                  </th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Availability</th>
                  <th>Arrival</th>
               </tr>
            </thead>
            <tbody>
               {box.map((td: { id: number, name: string, isChecked: boolean, category: string, availability: string, arrival: string }) => (
                  <tr key={td.id}>
                     <td>
                        <span className="custom-checkbox">
                           <input
                              type="checkbox"
                              name={td.name}
                              checked={td.isChecked || false}
                              onChange={handleChange} />
                           <label></label>
                        </span>
                     </td>
                     <td>{td.name}</td>
                     <td>{td.category}</td>
                     <td>{td.availability}</td>
                     <td>{td.arrival}</td>
                  </tr>
               ))}
            </tbody>
         </table>
         {popUp && <MenuPopUp box={box} setBox={setBox} setPopUp={setPopUp} checkBox={checkBox} />}
      </div>
   )
}

export default TableSection;
