import * as s from "./styled"
import { ModalProps } from "./types"

export function Modal({setModal, close, image, titulo, description}: ModalProps) {
    return (
        <s.ContainerModal>
            <s.CardModal>
                <s.CloseButton onClick={setModal}>
                    <img src={close} alt="close-button" />
                </s.CloseButton>
                <s.ImageModal src={image} alt="news-image" />
                <s.ContainerTexto>
                    <s.TituloModal>{titulo}</s.TituloModal>
                    <s.DescriptionModal>{description}</s.DescriptionModal>
                </s.ContainerTexto>
            </s.CardModal>
        </s.ContainerModal>
    )
}