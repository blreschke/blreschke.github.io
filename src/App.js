import "./App.css";
import random5x5 from "./utilities.js";
import React, { Component } from "react";

class Board extends Component {
	constructor(props) {
		super(props);

		this.state = { board: random5x5() };

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ board: random5x5() });
	}

	render() {
		return (
			<div className="Wrapper">
				<table>
					<tbody>
						<tr>
							<td>{this.state.board[0]}</td>
							<td>{this.state.board[1]}</td>
							<td>{this.state.board[2]}</td>
							<td>{this.state.board[3]}</td>
							<td>{this.state.board[4]}</td>
						</tr>
						<tr>
							<td>{this.state.board[5]}</td>
							<td>{this.state.board[6]}</td>
							<td>{this.state.board[7]}</td>
							<td>{this.state.board[8]}</td>
							<td>{this.state.board[9]}</td>
						</tr>
						<tr>
							<td>{this.state.board[10]}</td>
							<td>{this.state.board[11]}</td>
							<td>{this.state.board[12]}</td>
							<td>{this.state.board[13]}</td>
							<td>{this.state.board[14]}</td>
						</tr>
						<tr>
							<td>{this.state.board[15]}</td>
							<td>{this.state.board[16]}</td>
							<td>{this.state.board[17]}</td>
							<td>{this.state.board[18]}</td>
							<td>{this.state.board[19]}</td>
						</tr>
						<tr>
							<td>{this.state.board[20]}</td>
							<td>{this.state.board[21]}</td>
							<td>{this.state.board[22]}</td>
							<td>{this.state.board[23]}</td>
							<td>{this.state.board[24]}</td>
						</tr>
					</tbody>
				</table>
				<div className="Buttons">
					<button onClick={this.handleClick}>New Game</button>
				</div>
			</div>
		);
	}
}

function App() {
	return (
		<div className="App">
			<Board></Board>
		</div>
	);
}

export default App;
