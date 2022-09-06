import './Worker.css'

const Worker = (props) =>{
    return(
        <div>
            <div>
                <img src='' alt='worker'/>
            </div>
            <div>
                <h4>{props.name}</h4>
                <h5>{props.role}</h5>
            </div>
        </div>
    )
}

export default Worker