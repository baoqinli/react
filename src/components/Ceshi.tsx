
import { useImperativeHandle,forwardRef } from "react";

const ChildCoonent = forwardRef((props:{getdata(name:string):void},ref) => {
    useImperativeHandle(ref, () => ({
        add: () => {
            console.log('add')
        }
    }))
    console.log(props)
    props.getdata("123")
    return (
        <div>子组件</div>
    )
})
export default ChildCoonent