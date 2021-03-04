const { useState } = require("react")

function FontSize(){

    const [font, setFont] = useState("");

    return <div className="example-5">
            <span style={{fontSize: font + "px", color: font}}>Example </span>
            <input type="color" value={font} onInput={(event) => setFont(event.target.value.trim())}/>
            <input type="number" value={font} onInput={(event) => setFont(event.target.value.trim())} style={{marginLeft:"10px"}}/>
    </div>
    
}
 
export default FontSize;