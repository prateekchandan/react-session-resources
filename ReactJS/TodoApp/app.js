
'use strict';

class List extends React.Component {
  render() {
    var child1 = React.createElement('li', null, 'First Text Content');
    var child2 = React.createElement('li', null, 'Second Text Content');
    var root = React.createElement('ul', { className: 'my-list' }, child1, child2);
    return root;
  }
}

ReactDOM.render(React.createElement(List), document.getElementById('application'));