export const ProductImage = ({url, alt}: {url: string, alt?: string}) => {
    return (
        <img src={url} className="img-thumbnail" alt={url} style={{maxWidth: "200px"}}/>
    )
}