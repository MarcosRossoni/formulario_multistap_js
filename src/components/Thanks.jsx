import React from 'react';
import './Thanks.css'
import {BsEmojiSmileFill, BsFillEmojiFrownFill, BsFillEmojiHeartEyesFill, BsFillEmojiNeutralFill} from "react-icons/bs";

const Thanks = ({data}) => {

    const emojiData = {
        unsatisfied: <BsFillEmojiFrownFill/>,
        neutral: <BsFillEmojiNeutralFill/>,
        satisfied: <BsEmojiSmileFill/>,
        very_satisfied: <BsFillEmojiHeartEyesFill/>
    }
    return (
        <div className="thanks-container">
            <h2>Falta pouco...</h2>
            <p>
                Sua opnião é muito importante para nós, em brve você receberá um
                cupom de 10% de desconto para a sua próxima compra
            </p>
            <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
            <h3>Aqui esta o resumo da sua avaliação {data.name}</h3>
            <p className="review-data">
                <span>Satisfação com o produto:</span>
                {emojiData[data.review]}
            </p>
            <p className="review-data">
                <span>Comentário:</span>
                {data.comment}
            </p>
        </div>
    );
};

export default Thanks;