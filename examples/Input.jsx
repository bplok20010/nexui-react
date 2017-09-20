import { Input,InputGroup } from '../dist/rnexui';

ReactDOM.render(<div>
    <Input addonBefore="test..." width="200px" ref={(Input)=>Input.focus()} onPressEnter={()=>console.log('enter')}/>
	<Input block={false} addonAfter="test..." onChange={(v)=>console.log(v)} onFocus={()=>console.log('focus...')}/>
	<Input type="textarea" defaultValue="test" onChange={(v)=>console.log(v)} width="200px" height="150px" autosize />
	<Input  type="hidden" value="test"/>
	<InputGroup size="small">
		<Input width={50} />
		<Input width={50} />
		<Input width={50} />
		<Input width={50} />
	</InputGroup>
	<div onClick={()=>console.log('click')}>
		<input type="checkbox" defaultChecked onChange={(e)=> {e.preventDefault();e.stopPropagation()}} />
	</div>
</div>, demo);