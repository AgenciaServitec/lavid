import React, { useState } from "react";
import styled from "styled-components";

export const HeroContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const entryPayload = {
            category: "contact",
            hostname: "lavid.life",
            message: formData.message,
            client: {
                fullName: formData.name,
                email: formData.email,
                phone: {
                    prefix: "+51",
                    number: formData.phone,
                },
                document: {
                    type: "DNI",
                    number: "",
                },
            },
        };

        try {
            const response = await fetch("https://api-servitec-peru.web.app/entries/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(entryPayload),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Error al enviar el mensaje");
            }

            setStatus("success");
            setFormData({ name: "", phone: "", email: "", message: "" });
        } catch (error) {
            console.error("Error detallado:", error);
            setErrorMessage(error.message || "Hubo un problema al enviar el mensaje.");
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <FormWrapper>
                <SuccessMessage>
                    <div className="icon">✓</div>
                    <h3>¡Solicitud Enviada!</h3>
                    <p>Hemos recibido sus datos correctamente. Nuestro equipo se pondrá en contacto a la brevedad.</p>
                    <button onClick={() => setStatus("idle")}>Enviar otro mensaje</button>
                </SuccessMessage>
            </FormWrapper>
        );
    }

    return (
        <FormWrapper>
            <h3>Consulte aqui.</h3>
            <p>Estamos listos para atender sus desafíos.</p>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Nombre Completo</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Nombre y Apellidos"
                    />
                </div>

                <div className="input-group">
                    <label>Nro. Teléfono</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="999 999 999"
                    />
                </div>

                <div className="input-group">
                    <label>Correo Electrónico</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ejemplo@correo.com"
                    />
                </div>

                <div className="input-group">
                    <label>Detalles del Requerimiento</label>
                    <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Describa brevemente su consulta..."
                    ></textarea>
                </div>

                {status === "error" && <ErrorText>{errorMessage}</ErrorText>}

                <SubmitButton type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Enviando..." : "Enviar Solicitud"}
                </SubmitButton>
            </form>
        </FormWrapper>
    );
};

const FormWrapper = styled.div`
  background: #f9fafb;
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 2rem;
    color: #1a202c;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  
  p {
    color: #4a5568;
    margin-bottom: 2rem;
  }

  .input-group {
    margin-bottom: 1.5rem;
    
    label {
      display: block;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #2d3748;
      margin-bottom: 0.5rem;
    }

    input, textarea {
      width: 100%;
      background: transparent;
      border: none;
      border-bottom: 1px solid #e2e8f0;
      padding: 0.75rem 0;
      font-size: 1rem;
      color: #1a202c;
      outline: none;
      transition: border-color 0.2s;

      &:focus {
        border-bottom-color: #2b6cb0;
      }
    }
    textarea {
      resize: none;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: #1a202c;
  color: white;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1em;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: opacity 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    opacity: 0.9;
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  
  .icon {
    width: 60px;
    height: 60px;
    background: #c6f6d5;
    color: #38a169;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin: 0 auto 1.5rem;
  }

  h3 { margin-bottom: 1rem; }
  
  button {
    margin-top: 2rem;
    padding: 0.75rem 1.5rem;
    background: #1a202c;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: bold;
  }
`;

const ErrorText = styled.p`
  color: #e53e3e !important;
  font-size: 0.875rem;
  margin-bottom: 1rem !important;
`;