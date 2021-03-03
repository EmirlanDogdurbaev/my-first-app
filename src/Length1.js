const { useState } = require("react")

function Length1(){

    const [list, setList] = useState("");

    return <div className="example-5">
            <p>{list.length}</p>
            <input type="text" onInput={(event) => setList(event.target.value.trim())}/>
    </div>
    
}
 
export default Length1;