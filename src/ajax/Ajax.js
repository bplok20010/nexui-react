import _assign from 'object-assign';
import {contains, isFunction, isPromiseLike} from '../shared/util';
import omit from 'omit.js';

export default class Ajax {
	
	static create(opts){
		return new Ajax(opts);	
	}
	
	constructor(opts = {}){
		this.config = _assign({
			url: '',
			timeout: 0,	
			async: true,
			sendType: 'ajax',
			/**
			 * 数据最终处理
			 * @examples:
			 * dataType = json
			 * success  = function(data){
			 *	return data.data;
			 * }
			 */
			dataFormatter: null,
			/**
			 * @ type {function(resolve, reject)}
			 * 在触发success之前再次进行验证 如果这时候验证失败可以调用 hooks
			 */
			resolveProcess: null,
			onSuccess: null,
			onError: null,
			onAbort: null,
			onComplete: null,
			data: {}
		}, opts);
		
		this.config.sendType = String(this.config.sendType).toLowerCase();
		
		if( isFunction(this.config.url) ) {
			this.config.sendType = 'custom';	
		}
		
		this._initAjax();
	}	
	
	_initAjax(){
		const {url, resolveProcess, dataFormatter, sendType} = this.config;
		const dfd = $.Deferred();
		const self = this;
		
		dfd.promise(this);
		
		dfd.done((...args) => {
				this.onSuccess(...args);
			})
			.fail((...args) => {
				this.onError(...args);
			})
			.always((...args) => {
				this.onComplete(...args);
			});
		
		function reject(msg, ts, xhr){
			
			var args = [].slice.apply( arguments );
			
			dfd.rejectWith( self, args );
		}
		
		function resolve(data, ts, xhr){
			var args = [].slice.apply( arguments );
			
			if( dataFormatter && isFunction(dataFormatter) ) {
				args[0] = dataFormatter(args[0]);
			}
			
			dfd.resolveWith( self, args );	
		}
		
		const method = isFunction(sendType) ? sendType : this[sendType+'Send'];
		
		if( !method ) {
			throw new Error('error sendType not exists!');
		}
		
		this._xhr = method.call(this, function(data, ts, xhr){
			if( resolveProcess && isFunction(resolveProcess) ) {
				resolveProcess.call(self, data, function(d){
					resolve(d || data, ts, xhr);	
				}, function(msg, ts){
					reject(msg, ts || 'error', xhr);	
				});
			} else {
				resolve(data, ts, xhr);	
			}
		}, reject);
			
	}
	
	onSuccess(...args){
		const {onSuccess} = this.config;
		
		if( onSuccess && isFunction(onSuccess) ) {
			onSuccess(...args)	
		}
	}
	
	onError(msg, ts, xhr){
		const {onError, onAbort} = this.config;
		
		if( contains( [ 'timeout', 'canceled', 'abort' ], ts ) ) {
			if( onAbort && isFunction(onAbort) ) {
				onAbort(msg, ts, xhr)	
			}	
		}
		
		if( onError && isFunction(onError) ) {
			onError(msg, ts, xhr)	
		}	
	}
	
	onComplete(...args){
		const {onComplete} = this.config;
		
		if( onComplete && isFunction(onComplete) ) {
			onComplete(...args)	
		}	
	}
	
	abort(){
		var xhr = this._xhr;
			
		if( xhr && xhr.abort ) {
			xhr.abort(ts);
		}
		
		return this;	
	}
	
	getAjaxConfig(){
		return omit(this.config, [
			'sendType',
			'dataFormatter',
			'resolveProcess',
			'onSuccess',
			'onError',
			'onAbort',
			'onComplete',
		]);	
	}
	
	/**
	* ajax请求
	*/
	ajaxSend(resolve, reject){
		let _resolve = function(data, ts, xhr){
				resolve(data, ts, xhr);
			},
			_reject = function(xhr, ts, msg){
				reject(msg, ts || 'error', xhr);	
			},
			xhr = $.ajax(this.getAjaxConfig());
		
		xhr.then(_resolve, _reject);
		
		return xhr;	
	}
	
	customSend(resolve, reject){
		var undef,
			timeoutTimer,
			dfd = $.Deferred(),
			xhr = dfd.promise(),
			_resolve = function(data){
				if(timeoutTimer) {
					clearTimeout(timeoutTimer);	
				}
				resolve(data, 'success', xhr);
			},
			_reject = function(msg, ts){
				if(timeoutTimer) {
					clearTimeout(timeoutTimer);	
				}
				reject(msg, ts || 'error', xhr);	
			};
		
		const {url, async, timeout, data} = this.config;	
		
		xhr = url(data, _resolve, _reject, xhr);	
		
		if( xhr === undef || !isPromiseLike(xhr) ) {
			xhr = dfd.promise();	
		}
		
		xhr.then(_resolve, _reject);
		
		xhr.abort = xhr.abort || function(ts){
			ts = ts || 'abort';//canceled
			_reject(ts, ts);	
		}
		
		if( async && timeout > 0 ) {
			timeoutTimer = setTimeout(function(){
				xhr.abort('timeout');	
			}, timeout);	
		}
		
		return xhr;
	}
	/**
	* form表单请求
	*/
	formSend(){}
	/**
	* form文件上传
	*/
	fileSend(){}
}