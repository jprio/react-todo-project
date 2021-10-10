import React from "react";
import styles from "./TodoItem.module.css";
const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
}

class TodosItem extends React.Component {
    state = {
        editing: false,
    }
    handleUpdatedDone = event => {
        if (event.key === "Enter") {
            this.setState({ editing: false })
        }
    };
    componentDidMount() {
        console.log("did mount");
    }
    render() {
        /*
        return <li className={styles.item}>
            <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
            <div onDoubleClick={this.handleEditing}>...</div>
            <input type="checkbox" checked={this.props.todo.completed}
                onChange={() => this.props.handleChangeProps(this.props.todo.id)} />
            <span style={this.props.todo.completed ? completedStyle : null}>
                {this.props.todo.title}
            </span>
        </li>*/
        let viewMode = {}
        let editMode = {}

        if (this.state.editing) {
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }
        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing}>
                    <input type="checkbox" checked={this.props.todo.completed}
                        onChange={() => this.props.handleChangeProps(this.props.todo.id)} />

                    <input
                        type="text"
                        style={editMode}
                        className={styles.textInput}
                        value={this.props.todo.title}
                        onChange={e => {
                            this.props.setUpdate(e.target.value, this.props.todo.id)
                        }}
                        onKeyDown={this.handleUpdatedDone}
                    />
                    <span style={this.props.todo.completed ? completedStyle : null}>
                        {this.props.todo.title}
                    </span>
                    <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
                </div>
            </li>)
    }
    handleEditing = () => {
        this.setState({
            editing: true,
        });
        console.log("dc");
    }
}
export default TodosItem