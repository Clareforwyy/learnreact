'use strict';
//var names = ['Alice', 'Emily', 'Kate'];
let names = {
	"name": 1,
	"age": "2",
	"data": ['Alice', 'Emily', 'Kate']
};

var NotesList = React.createClass({
	render: function() {
		return (
			<ol>
				{
					React.Children.map(this.props.children, function (child) {
						return <li>{child}</li>;
					})
				}
			</ol>
		);
	}
});

ReactDOM.render(
	<NotesList>
		<span>hello</span>
		<span>world</span>
	</NotesList>,
	document.body
);