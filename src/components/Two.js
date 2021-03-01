import { useState } from "react";


function Two() {
    const [inp, setInp] = useState("")

    return(
        <div className="Two">
            <input type="text" value={inp} placeholder="Name" onInput={(event) => setInp(event.target.value.trim())}></input>
            <input type="text" value={inp} placeholder="Name" onInput={(event) => setInp(event.target.value.trim())}></input>
        </div>
    )
}
export default Two;