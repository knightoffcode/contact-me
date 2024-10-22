import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

/**
 *
 * @returns
 */

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState('');
    const [fadeOut, setFadeOut] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.message) {
            setError('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const userID = import.meta.env.VITE_EMAILJS_USER_ID;

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('SUCESSO!', response.status, response.text);
                setIsSent(true);
                setFadeOut(false);

                setTimeout(() => {
                    setFadeOut(true);
                }, 3000);
            })
            .catch((err) => {
                console.error('Erro ao enviar o email:', err);
                setError('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
            });
    };

    return (
        <div className="contact">
            <form className="contact__form" onSubmit={handleSubmit}>
                <h2 className="contact__title">Contato</h2>
                <div className="contact__field">
                    <label className="contact__label">Nome: <span className="contact__required">*</span></label>
                    <input
                        className="contact__input"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Digite aqui."
                        required
                        disabled={isSent}
                    />
                </div>
                <div className="contact__field">
                    <label className="contact__label">Email:</label>
                    <input
                        className="contact__input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Seu e-mail"
                        disabled={isSent}
                    />
                </div>
                <div className="contact__field">
                    <label className="contact__label">Mensagem: <span className="contact__required">*</span></label>
                    <textarea
                        className="contact__textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Sua mensagem"
                        required
                        disabled={isSent}
                    />
                </div>
                {error && <p className="contact__error">{error}</p>}
                {!isSent && <button className="contact__button" type="submit">Enviar</button>} {/* Esconde o botão após envio */}
            </form>
            {isSent && (
                <div className={`contact__success ${fadeOut ? 'fade-out' : ''}`}>
                    <p>Sua mensagem foi enviada com sucesso!</p>
                </div>
            )}
        </div>
    );
}

export default Contact;
