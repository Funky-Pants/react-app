import React, {useState} from 'react'

const QuantityInput = (props) => {

    const [count, setCount] = useState(props.count);

    const getQuantityMessage = () =>{
        if (count > 7){
            return <div className="alert alert-success" role="alert">
                All good
            </div>
        }
        if (count < 3){
            return <div className="alert alert-danger" role="alert">
                Oh noooo
            </div>
        }
    }


    return (
        <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button onClick={()=> setCount(count - 1)} className="btn btn-success" type="button"><i className="fa fa-minus"></i></button>
                </div>

                <input readOnly value={count} type="text" className="form-control" aria-describedby="basic-addon1"/>

                <div className="input-group-append">
                    <button onClick={()=> setCount(count + 1)} className="btn btn-success" type="button"><i className="fa fa-plus"></i></button>
                </div>
            </div>

            {getQuantityMessage()}
            
        </div>
    )
}

export default QuantityInput