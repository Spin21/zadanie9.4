
var height = prompt('type the height of your tree');
if(height <= 5) {
	function drawTree(height) {
		for(var i=0; i <= height; i++) {
			var star = '';
			for(var j=0; j <= i-1; j++) {
			star += '*';
			}
			console.log(star);
		}
	}
}
else {
	console.log('you choose the wrong number');
}
drawTree(height);