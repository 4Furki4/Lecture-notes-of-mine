import colorNames from 'colornames'
import CardProps from '../models/CardProps'

export default function Card({ colorText }: CardProps) {
    return (
        <div className='container' style={{ backgroundColor: colorText, color: colorText === "white" ? "black" : "white" }}>
            <p>{colorText}</p>
            <p>{colorNames(colorText)}</p>
        </div>
    )
}
