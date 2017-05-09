import React, {Component} from 'react';
import * as spinner from './spinner.gif';
import * as image from './placeholder.png';

export class PlaceholderImage extends Component {

    constructor(props) {
        super(props);
        this.state = { loading: true, loaded: false, src: this.props.placeholder === 'spinner' ? spinner.default : image.default };
        this.onLoad = this.onLoad.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if (this.props.src !== nextProps.src){
            this.state = { loading: true, loaded: false, src: nextProps.placeholder === 'spinner' ? spinner.default : image.default };
        }
    }

    onLoad() {
        this.setState({loading: false, loaded: true, src: this.props.src});
    }

    render(){
        const {className, src, alt} = this.props;
        return (

            <span className="placeholder-image">

                {!this.state.loaded && <img key={this.state.src} className={className} src={this.state.src} alt={alt}/>}
                <img className={`${this.state.loading ? 'hidden' : 'fadeIn-enter fadeIn-enter-active '}  ${className}`} onLoad={this.onLoad} src={src} alt={alt}/>
            </span>

        )
    }

};