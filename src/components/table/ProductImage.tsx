export const ProductImage = ({url, alt}: {url: string, alt?: string}) => {
    return (
        <img src={url} className="rounded" alt={url} style={{width: "100px", height: "75px"}}/>
    )
}