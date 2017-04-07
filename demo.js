var Reactdemo = React.CreateClass({
	render: function() {
		return (<h1>你好世界</h1>)
	}
});
React.render(<Reactdemo/>,
	document.getElementById("contanier"),
	function() {
		alert("ok")
	})