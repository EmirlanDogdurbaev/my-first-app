const { useState } = require("react")

function Color({value}){

    const [color, setColor] = useState(value ?? "#000000");

    return <div className="example-5">
            <p>{color}</p>
            <input type="color" onInput={(event) => setColor(event.target.value)}/>
    </div>   
}
export default Color;