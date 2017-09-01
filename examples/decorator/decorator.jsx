function Mixin(){
	return function(){}	
}

function test(){}
function test2(){}

@xtype('test')
@Mixin(true)
class App {
	constructor(){
		console.log('...')	
	}
	@test
	@test2
	say(){
		console.log('say')	
	}
}