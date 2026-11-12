import React, { useState } from "react";
import styled from "styled-components";

export const DistributorForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        dni: "",
        ruc: "",
        address: "",
        location: "",
    });
    const [status, setStatus] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const detailedMessage = `Solicitud de Nuevo Distribuidor:
- RUC: ${formData.ruc}
- Dirección: ${formData.address}
- Ubicación: ${formData.location}`;

        const entryPayload = {
            category: "contact",
            hostname: "lavid.life",
            message: detailedMessage,
            client: {
                fullName: formData.name,
                email: formData.email,
                phone: {
                    prefix: "+51",
                    number: formData.phone,
                },
                document: {
                    type: "DNI",
                    number: formData.dni,
                },
            },
            distributorData: {
                ruc: formData.ruc,
                address: formData.address,
                location: formData.location,
            }
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
                throw new Error(result.error || "Error al enviar la solicitud");
            }

            setStatus("success");
            setFormData({ name: "", email: "", phone: "", dni: "", ruc: "", address: "", location: "" });
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage(error.message || "Hubo un problema al enviar los datos.");
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <FormWrapper>
                <SuccessMessage>
                    <div className="icon">✓</div>
                    <h3>¡Solicitud Recibida!</h3>
                    <p>Tus datos han sido registrados. Nuestro equipo se contactará contigo pronto para detallar los beneficios de ser distribuidor.</p>
                    <button onClick={() => setStatus("idle")}>Enviar otra solicitud</button>
                </SuccessMessage>
            </FormWrapper>
        );
    }

    return (
        <FormWrapper>
            <h2>Únete a nuestra red de distribuidores</h2>
            <p>Completa tus datos y nos pondremos en contacto contigo.</p>

            <form onSubmit={handleSubmit}>
                <div className="grid-2">
                    <div className="input-group">
                        <label>Nombre Completo</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Nombres y Apellidos" />
                    </div>
                    <div className="input-group">
                        <label>Correo Electrónico</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="correo@ejemplo.com" />
                    </div>
                </div>

                <div className="grid-2">
                    <div className="input-group">
                        <label>Celular</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="999 999 999" />
                    </div>
                    <div className="input-group">
                        <label>DNI</label>
                        <input type="text" name="dni" value={formData.dni} onChange={handleChange} required placeholder="Número de DNI" maxLength="8" />
                    </div>
                </div>

                <div className="input-group">
                    <label>RUC (Opcional o requerido)</label>
                    <input type="text" name="ruc" value={formData.ruc} onChange={handleChange} required placeholder="Número de RUC" maxLength="11" />
                </div>

                <div className="grid-2">
                    <div className="input-group">
                        <label>Dirección</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} required placeholder="Av/Calle/Jr..." />
                    </div>
                    <div className="input-group">
                        <label>Ubicación</label>
                        <input type="text" name="location" value={formData.location} onChange={handleChange} required placeholder="Ciudad, Distrito" />
                    </div>
                </div>

                {status === "error" && <ErrorText>{errorMessage}</ErrorText>}

                <SubmitButton type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Procesando..." : "Enviar Solicitud"}
                </SubmitButton>
            </form>
        </FormWrapper>
    );
};

const FormWrapper = styled.div`
  background: #f9fafb;
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin: 4rem auto;

  h2 {
    font-size: 2.2rem;
    color: #1a202c;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  
  p {
    color: #4a5568;
    margin-bottom: 2.5rem;
    text-align: center;
  }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
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

    input {
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
        border-bottom-color: ${({ theme }) => theme?.colors?.sextiary || '#2b6cb0'};
      }
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: #1a202c;
  color: white;
  padding: 1.2rem;
  margin-top: 1rem;
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
    width: 80px;
    height: 80px;
    background: #c6f6d5;
    color: #38a169;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    margin: 0 auto 1.5rem;
  }

  h3 { margin-bottom: 1rem; font-size: 2rem; }
  
  button {
    margin-top: 2rem;
    padding: 1rem 2rem;
    background: #1a202c;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 0.25rem;
  }
`;

const ErrorText = styled.p`
  color: #e53e3e !important;
  font-weight: 600;
`;