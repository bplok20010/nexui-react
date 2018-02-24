import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubmitForm from 'utils/SubmitForm';

class Uploader extends Component {
	
	uploader = null
	
	currentFilePath = null
	
	formId = Math.random().toString(16).slice(2,8)
	
	static propTypes = {
		server: PropTypes.string,	
		auto: PropTypes.bool,
		accept: PropTypes.string,
		zIndex: PropTypes.number,
		name: PropTypes.string,
		data: PropTypes.object,
		onBeforeUpload: PropTypes.func,
		onComplete: PropTypes.func,
		onCancel: PropTypes.func,
	}
	
	static defaultProps = {
		auto: true,
		accept: "*",
		zIndex: 10,
		name: "file",
		data:{}
	}
	
	getInputStyle(){
		return {
			position: 'absolute',
			top: 0,
			left: 0,
			height: '100%',
			width: '100%',
			'z-index': this.props.zIndex,
			opacity: 0,
			cursor: 'pointer'
		}	
	}
	
	clear(){
		this.uploader = null;	
		this.currentFilePath = null;		
	}
	
	cancel(){
		if( this.uploader ) {
			this.uploader.abort();
			if( this.props.onCancel ) {
				this.props.onCancel();	
			}
		}
		
		this.clear();
	}
	
	_upload() {
		const { onBeforeUpload, onComplete, onCancel } = this.props;
		
		if( onBeforeUpload ) {
			const r = onBeforeUpload(this.currentFilePath)
			
			if( r === false ) return;	
		}
		
		this.uploader = SubmitForm(this.formId, result => {
			if( onComplete ) onComplete(result);
			//upload complete
			this.clear();
		});
	}
	
	onFileChange = (e) => {
		const { auto } = this.props;	
		
		this.currentFilePath = e.target.value;
		
		if( auto ) {
			this._upload();
		} 
		
	}
	
	submit(){
		if( !this.uploader )	{
			this._upload();	
		} else {
			//throw new Error(uploading...)	
		}
	}
	
	onComponentWillUnmount(){
		cancel();	
	}
	
	renderExtData(){
		const { data } = this.props;
		const keys = Object.keys(data);
		
		if( !keys.length ) return null;
		
		const inputs = [];
		
		keys.forEach( (name, i) => {
			inputs.push(
				<input key={i} type="hidden"  name={name} value={data[name]} />
			);	
		} )
		
		return inputs;
	}
	
	render(){
		const { accept,zIndex,server } = this.props;
		
		return (
			<form action={server} method="POST" id={this.formId} enctype="multipart/form-data">
				<input 
					type="file" 
					accept={accept}
					style={this.getInputStyle()}
					onChange={this.onFileChange}
				/>
				{
					this.renderExtData()	
				}
			</form>
		);
			
	}	
}

export default Uploader;