import * as s from "./styled"
import { CardNoticiaProps } from "./types"

export function CardNoticia({ image, titulo, date, descriptionCurto, setModal }: CardNoticiaProps) {
    return (
        <s.CardNoticia>
            <s.ImageCardNoticia src={image} />
            <s.TituloCardNoticia>{titulo}</s.TituloCardNoticia>
            <s.DateCardNoticia>{date}</s.DateCardNoticia>
            <s.DescriptionCardNoticia>
                {descriptionCurto}
            </s.DescriptionCardNoticia>
            <s.BotaoLeitura onClick={setModal}>Ver mais</s.BotaoLeitura>
        </s.CardNoticia>
    )
}