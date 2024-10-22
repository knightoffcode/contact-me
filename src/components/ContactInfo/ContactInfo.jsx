import React from 'react';

/**
 *
 * @returns
 */

function ContactInfo() {
    return (
        <div className="contactInfo">
            <h3 className="contactInfo__title">Informações de Contato</h3>
            <div className="contactInfo__section">
                <p className="contactInfo__text">
                    Preencha o formulário abaixo com suas dúvidas, sugestões ou solicitações. Nossa equipe analisará sua mensagem e retornará o mais breve possível. Por favor, certifique-se de inserir um e-mail válido para que possamos responder adequadamente.
                </p>
                <p className="contactInfo__text">
                    <strong>Observação:</strong> Respondemos em até 48 horas úteis. Seus dados serão tratados com sigilo e não serão compartilhados com terceiros.
                </p>
            </div>
            <h3 className="contactInfo__subtitle">Horário de retorno</h3>
            <div className="contactInfo__section">
                <p className="contactInfo__text">
                    <strong>Segunda a Sexta:</strong> 9:00 - 12:00
                </p>
            </div>
            <h3 className="contactInfo__subtitle">...</h3>
        </div>
    );
};

export default ContactInfo;
