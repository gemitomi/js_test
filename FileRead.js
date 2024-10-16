import React, { Component } from "react";
import { createRoot } from 'react-dom/client';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: '',
            fileContent: ''
        };
    }

    handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            this.setState({ fileName: file.name, fileContent: reader.result });
        };
        reader.onerror = () => {
            console.log('file error', reader.error);
        };
    };

    render() {
        return (
            <div>
                <h1>File Reader</h1>
                <input type="file" onChange={this.handleFileChange} />
                <br />
                <p>{this.state.fileName}</p>
                <p>{this.state.fileContent}</p>
            </div>
        );
    }
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);