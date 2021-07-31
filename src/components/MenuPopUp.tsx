interface Props {
   box: any;
   setBox: any;
   setPopUp: any;
   checkBox: any;
}

const MenuPopUp = ({ box, setBox, setPopUp, checkBox }: Props) => {

   const handleClose = (): any => {
      setPopUp((show: any) => !show);
   }

   const handleDelete = (): any => {
      const deleteBox = box.filter((box: { isChecked: boolean; }) => box.isChecked !== true);
      setBox(deleteBox);
   }

   return (
      <div className="floating-container">
         <div>
            <button className="btn btn-close" onClick={handleClose}>
               <img src="close.svg" alt="close" />
            </button>
         </div>
         <div>
            <h3>{checkBox.length} Table Selected</h3>
         </div>
         <div>
            <button className="btn btn-primary">
               <img src="assign.svg" alt="assign" /> Assign Category
            </button>
         </div>
         <div>
            <button className="btn btn-secondary" onClick={handleDelete}>
               <img src="delete.svg" alt="delete" /> Delete Table
            </button>
         </div>
      </div>
   )
}

export default MenuPopUp;
