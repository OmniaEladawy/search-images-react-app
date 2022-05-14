import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.imageRef = React.createRef();
        this.state = {spans: 0};
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans)
       
    }

    setSpans = () =>{
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10); 
        this.setState({spans: spans});
    }

    render(){
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} src={this.props.src}  alt={this.props.alt}/>
            </div>
          );
    }
  
}

export default ImageCard;
