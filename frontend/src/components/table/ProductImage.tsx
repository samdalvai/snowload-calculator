export const ProductImage = ({url, alt}: {url: string, alt?: string}) => {
    return (
        <img src={url} className="img-thumbnail shadow-sm rounded" alt={url} style={{maxWidth: "100px"}}/>
    )
}