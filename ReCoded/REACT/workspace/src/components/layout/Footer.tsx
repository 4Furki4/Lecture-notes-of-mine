import FooterProps from "../../models/Footer.props";

export default function Footer({ length }: FooterProps) {
    return (
        <footer>
            <p className="item-count text-center">
                {length} {length === 1 ? 'item' : 'items'} left.
            </p>
        </footer>
    )
}