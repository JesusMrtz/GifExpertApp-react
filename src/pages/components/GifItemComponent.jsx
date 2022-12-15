export function GifItemComponent({ image }) {
    return (
        <div className="card">
            <img src={ image.url } alt={ image.title } />
            <p>{ image.title }</p>
        </div>
    );
}