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
                    <strong>Endereço:</strong> Rua Exemplo, 123, Centro, Cidade, Estado
                </p>
                <p className="contactInfo__text">
                    <strong>Telefone:</strong> (11) 1234-5678
                </p>
                <p className="contactInfo__text">
                    <strong>Email:</strong> exemplo@email.com
                </p>
            </div>

            <h3 className="contactInfo__subtitle">Horários de Recebimento</h3>
            <div className="contactInfo__section">
                <p className="contactInfo__text">
                    <strong>Segunda a Sexta:</strong> 9:00 - 18:00
                </p>
                <p className="contactInfo__text">
                    <strong>Sábados:</strong> 9:00 - 12:00
                </p>
                <p className="contactInfo__text">
                    <strong>Domingos e Feriados:</strong> Fechado
                </p>
            </div>

            <h3 className="contactInfo__subtitle">...</h3>
            <div className="contactInfo__section">
                <p className="contactInfo__text"></p>
            </div>
        </div>
    );
};

export default ContactInfo;
