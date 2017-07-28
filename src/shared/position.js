import _assign from 'object-assign';

export default function(target, source, config){
	$(target).position(_assign({}, config,{
		of: source	
	}));
}