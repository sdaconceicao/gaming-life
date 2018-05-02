import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as image from './placeholder.png';
import styles from './PlaceholderImage.scss';


export class PlaceholderImage extends Component {

    constructor(props) {
        super(props);
        this.state = { loading: true, loaded: false, src: image.default };
        this.onLoad = this.onLoad.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.src !== nextProps.src) {
            this.setState({
                loading: true,
                loaded: false,
                src: image.default
            });
        }
    }

    onLoad() {
        this.setState({
            loading: false,
            loaded: true,
            src: this.props.src,
            orientation: this.refs.loadedImage.naturalWidth > this.refs.loadedImage.naturalHeight
                ? 'landscape'
                : 'portrait'
        });
    }

    render() {
        const {className, src, alt} = this.props,
            {orientation} = this.state;

        return (
            <span className={`${orientation}`}>
                { ! this.state.loaded &&
                    <img key={this.state.src} className={className} src={this.state.src} alt={alt}/>
                }
                <img className={`${className} ${this.state.loading ? styles.loading : ''}`}
                     onLoad={this.onLoad}
                     ref="loadedImage"
                     src={src}
                     alt={alt}/>

            </span>
        );
    }

}

PlaceholderImage.propTypes = {
    /* Image uri */
    src: PropTypes.string.isRequired,
    /* Alt text to display */
    alt: PropTypes.string
};

export default PlaceholderImage;