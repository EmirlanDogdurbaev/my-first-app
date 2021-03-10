import { React } from "react";
function Mas2({arr}) {
    let fruit = arr.map(item=>{
        return <li>{item}</li>
    })
    return <div>
        <ul>{fruit}</ul>
    </div>
}
export default Mas2;