import { Input,InputGroup } from '../../dist/rnexui';

ReactDOM.render(<div>
	<Input style={{width: 150}}  placeholder="请输入..." value="nobo.zhou" disabled readOnly size="large" />
    <Input style={{width: 150}}  placeholder="请输入..." ref={(Input)=>Input.focus()} prefix="+" suffix="-" onPressEnter={()=>console.log('enter')}/>
	<Input style={{width: 150}}  placeholder="请输入..." size="small"/>
	<Input inline={false}  onChange={(v)=>console.log(v)} onFocus={()=>console.log('focus...')}/>
	<Input type="textarea" defaultValue="test" onChange={(v)=>console.log(v)} style={{width: 200, height: 200}} />
	<Input  type="hidden" value="test"/>
	<InputGroup size="small">
		<Input style={{width: 50}} />
		<Input style={{width: 50}} />
		<Input style={{width: 50}} />
		<Input style={{width: 50}} />
	</InputGroup>
	<div onClick={()=>console.log('click')}>
		<input type="checkbox" defaultChecked onChange={(e)=> {e.preventDefault();e.stopPropagation()}} />
	</div>
</div>, demo);