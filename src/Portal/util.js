
export function getDom(selector){
	const dom = typeof selector === 'string'
		? document.querySelector(selector)
		: selector;
	return dom || document.body;	
}

export function createContainer(parent) {
  const div = document.createElement('div');
  div.__portal = true;
  return parent.appendChild(div);
}

export function removeContainer(elm) {
	const { parentNode } = elm;
	if (parentNode) {
		parentNode.removeChild(elm);
	}
}