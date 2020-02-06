import React from "react";
import Button from '@material-ui/core/Button';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    // dispatches actions to add todo
    // sets state back to empty string
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <Button variant='contained' color='primary' className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </Button>
      </div>
    );
  }
}

export default AddTodo;
