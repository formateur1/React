import React,{useContext} from "react";
/*importer la component TestContextChild3 */
import TestContextChild3 from './TestContextChild3.js';

function TestContextChild2() {
return (<div className="bg-warning">
TestContextChild2<br/>
<div style={{ padding : "20px" , color : "green", backgroundColor : "yellow" }}>
{/*appeler la component TestContextChild3 */}
<TestContextChild3 />
</div>
</div>);
}

export default TestContextChild2;