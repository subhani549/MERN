import { Mycontext } from "./Mycontext";
import Mycomponent from "./Mycomponent"
//provider->produces the data / props
export default function Example(){
   //provider
   const [text,setText]=useState("")
   setText("hello raju")
   return(
    <div>
        <Mycontext.provider value={{text,setText}}>
            <Mycomponent/>
            {/* you can add as many components u want provider will provide all the props to the given component*/}
        </Mycontext.provider>
    </div>
   )
}