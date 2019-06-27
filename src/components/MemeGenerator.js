import React from 'react'


class MemeGenerator extends React.Component{
    constructor(){
        super();
        this.state={
            topText: "",
            bottomText: "",
            randomImage: "https://i.imgflip.com/1bh3.jpg",
            allMemeImgs: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleButton = this.handleButton.bind(this);
    };

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(response => {
                const {memes} = response.data;
                this.setState({
                    allMemeImgs: memes
                });
            });
    }

    handleChange(event){
        const {name, value} =  event.target
        this.setState({
            [name]: value 
        });
    }

    handleButton(event){
        event.preventDefault();
        let num = Math.floor(Math.random() * this.state.allMemeImgs.length)
        let ranUrl = this.state.allMemeImgs[num].url;
        this.setState({
            randomImage: ranUrl
        });

    }

    render(){
        return(
            <div>
                <form  onSubmit ={this.handleButton}>
                    <input 
                        name="topText" 
                        type="text"
                        value = {this.state.topText}
                        onChange = {this.handleChange}

                    />

                    <input 
                        name = "bottomText" 
                        type="text"
                        value = {this.state.bottomText}
                        onChange ={this.handleChange}
                    />
                    <br/>
                    <button>Generate!</button>
                </form>

                <div className = "btm">
                    <img alt = "randomImage" src={this.state.randomImage} />
                    <h2 className = "top">{this.state.topText} </h2>
                    <h2 className = "bottom">{this.state.bottomText} </h2>
                </div>
            </div>    
        );
    }
}

export default MemeGenerator;