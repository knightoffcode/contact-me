import React, { useState } from 'react';
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

        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const userID = process.env.REACT_APP_EMAILJS_USER_ID;

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('SUCESSO!', response.status, response.text);
                setIsSent(true);
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((err) => {
                console.error('Erro ao enviar o email:', err);
                setError('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
            });
    };

    return (
        <div className="contact">
            {isSent ? (
                <p className="contact__success">Sua mensagem foi enviada com sucesso!</p>
            ) : (
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
                            required
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
                        />
                    </div>
                    <div className="contact__field">
                        <label className="contact__label">Mensagem: <span className="contact__required">*</span></label>
                        <textarea
                            className="contact__textarea"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {error && <p className="contact__error">{error}</p>}
                    <button className="contact__button" type="submit">Enviar</button>
                </form>
            )}
        </div>
    );
}

export default Contact;
