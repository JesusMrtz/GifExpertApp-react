import PropTypes from 'prop-types';


export function GifItemComponent({ image }) {
    return (
        <div className="card">
            <img src={ image.url } alt={ image.title } />
            <p>{ image.title }</p>
        </div>
    );
}


GifItemComponent.propTypes = {
    image: PropTypes.object.isRequired
}