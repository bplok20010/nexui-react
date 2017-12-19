import { Trigger,Button } from '../../dist/rnexui';

class App extends React.Component {
  state = {
    disabled: true,
  }
  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
  
  popupVisible = true;
  
  placement = 'LeftCenter';

	handleChange=(e) => {
		this.placement = e.target.value;
		this.forceUpdate();
	}
  
  	onPopupVisibleChange = (v) => {
		this.popupVisible = v;
		
		//this.forceUpdate();
	}
	
	renderInnter(){
		
		return <Trigger delay={100} action="click" getPopupContainer={()=> this.popupCt} popup={(trigger) => {
					//const node = ReactDOM.findDONNode(trigger);
					return <div style={{padding: 10, border: '1px solid red', background: '#fff'}}>hello inner trigger</div>
				}}
				>
				<a href="###">go</a></Trigger>	
	}
	
	renderOthers(){
		return (<div>
			<Trigger delay={100} action="hover" popup={(inst)=>{
				
				return <div style={{padding: 10, border: '1px solid red', background: '#fff'}}>
					<div ref={el => this.popupCt = el} />
					{this.renderInnter(inst)}
					popup hover...
				</div>	
			}} action="hover">
				<Button type="primary" onClick={this.toggle}>Hover</Button>
			</Trigger>
			<Trigger popup={<div style={{padding: 10, border: '1px solid red', background: '#fff'}}>popup focus...</div>} action="focus">
				<Button type="primary" onClick={this.toggle}>Focus</Button>
			</Trigger>
			<Trigger 
				popup={<div style={{padding: 10, border: '1px solid red', background: '#fff'}}>popup contextMenu...</div>} 
				action="contextMenu"
			>
				<Button type="primary" onClick={this.toggle}>contextMenu</Button>
			</Trigger>
		</div>)	
	}
  
  render() {
    return (
      <div>
	  	<select value={this.pacement} onChange={this.handleChange}>
			<option value="Center">Center</option>
			<option value="LeftCenter">LeftCenter</option>
			<option value="BottomCenter">BottomCenter</option>
			<option value="RightCenter">RightCenter</option>
			<option value="TopCenter">TopCenter</option>
			<option value="TopLeft">TopLeft</option>
			<option value="TopRight">TopRight</option>
			<option value="BottomRight">BottomRight</option>
			<option value="BottomLeft">BottomLeft</option>
			<option value="RightTop">RightTop</option>
			<option value="RightBottom">RightBottom</option>
			<option value="LeftTop">LeftTop</option>
			<option value="LeftBottom">LeftBottom</option>
		</select>
	  	<hr/>
		<hr/>
		<hr/>
		<hr/>
		<hr/>
		<hr/>
		<hr/>
	  	<Trigger 
			popup={<div style={{padding: 10, border: '1px solid red', background: '#fff'}}>placement: {this.placement}...</div>}
			popupOffset={[10, 10]}
			popupAnimate={{
				appear: function(node){
					$(node).hide().fadeIn();
				},
				leave: function(node, cb){
					$(node).fadeOut(cb);	
				}
			}}
			popupStyle={{border:'2px solid green'}}
			onPopupVisibleChange={this.onPopupVisibleChange}
			popupVisible={true}
			placement={this.placement}
		>
        	<Button type="primary" onClick={this.toggle}>Click</Button>
		</Trigger>
		<hr/>
		{this.renderOthers()}
      </div>
    );
  }
}

ReactDOM.render(<App />,
  demo
);