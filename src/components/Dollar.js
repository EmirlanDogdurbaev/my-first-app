const { useState } = require("react")

function Dollar({ value }) {

    const [dollar, setDollar] = useState(value ?? "");

    return <div className="example-5">
        <p>
            $ <input type="text" onInput={(event) => setDollar(event.target.value * 85)} />
            <span>={dollar}</span></p>


           </div>
}
export default Dollar;