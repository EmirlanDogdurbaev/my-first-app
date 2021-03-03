const { useState } = require("react")

function Fahranheit({ value }) {

    const [far, setFar] = useState(value ?? "");

    return <div className="example-5">
        <p>
            C <input type="number" onInput={(event) => setFar(event.target.value )} />
            <span>={far * -33.8}</span></p>


           </div>
}
export default Fahranheit;