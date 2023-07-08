import React, {useState} from 'react'
import "./Modal.css"

export const Modal = ({closeModal, onsubmit}) => {
    const [formState, setFormState ] =useState(defaultValue ||{
        no: "",
        name:"",
        status:"live"
    });
    const [errors, setErrors] = useState ("")

    const validateForm = () => {
        if(formState.no && formState.name && formState.status ){
            useState ("")
            return true;}
            else {
                let errorField =[];
                for(const [key, value] of Object.entries(formState)){
                    if(!value){
                        errorField.push(key)
                    }
                }
                setErrors(errorField.join(","));
                return false;
            }
        
    }


    const handleChange = (e) =>{
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        })
    }

    const handelsubmit = (e) => {
        e.preventDefault();
        if(!validateForm() ) return;


        onsubmit(formState)
        closeModal();
    }
  return (
    <div className="modal-container" onClick={(e) => {
        if( e.target.className === "modal-container")closeModal();
    }}
    >
        <div className="modal">
            <form className="form-group">
                <div>
                    <label htmlFor="no">Number</label>
                    <input name="number" value={formState.no} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <textarea name="name" value={formState.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlfor="status">Status</label>
                    <select name="status" value={formState.status} onChange={handleChange} >
                    <option value="live">Live</option>
                    <option value="draft">Draft</option>
                    <option value="error">Error</option>
                    </select>
                </div>
                {errors && <div className="errror" >{'please include: ${errors}'} </div>}
                <button type="submit" className='btn' onClick={handelsubmit}>Submit</button>
            </form>
        </div>

    </div>
  );
};
