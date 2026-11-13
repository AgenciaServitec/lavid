import React, {useState} from "react";
import {theme} from "../../styles";

export const DistributorForm = ({ onSubmit }) => {
    const [focusedField, setFocusedField] = useState(null);
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        celular: "",
        dni: "",
        ruc: "",
        direccion: "",
        ubicacion: "",
        mensaje: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(formData);
    };

    const getInputStyle = (fieldName) => ({
        width: "100%",
        padding: `${theme.paddings.small} ${theme.paddings.medium}`,
        fontSize: theme.font_sizes.x_small,
        fontWeight: theme.font_weight.small,
        color: theme.colors.font1,
        backgroundColor: focusedField === fieldName ? theme.colors.secondary : "#FAFBFD",
        border: `1.5px solid ${
            focusedField === fieldName ? theme.colors.sextiary : theme.colors.white
        }`,
        borderRadius: theme.border_radius.small,
        outline: "none",
        transition: "all 0.2s ease",
        boxSizing: "border-box",
    });

    const labelStyle = {
        display: "block",
        fontSize: theme.font_sizes.xx_small,
        fontWeight: theme.font_weight.large,
        color: theme.colors.primary,
        letterSpacing: "0.04em",
        marginBottom: theme.paddings.xx_small,
        textTransform: "uppercase",
    };

    return (
        <div
            style={{
                maxWidth: "680px",
                margin: "0 auto",
                backgroundColor: theme.colors.secondary,
                borderRadius: theme.border_radius.xx_large,
                padding: `${theme.paddings.xxx_large} ${theme.paddings.xx_large}`,
                boxShadow: "0 10px 30px rgba(15, 25, 32, 0.05)",
                border: `1px solid ${theme.colors.white}`,
                color: theme.colors.font1,
            }}
        >
            {/* Encabezado limpio y natural */}
            <div style={{ textAlign: "center", marginBottom: theme.paddings.xx_large }}>
                <h2
                    style={{
                        fontSize: theme.font_sizes.xx_large,
                        fontWeight: theme.font_weight.large,
                        color: theme.colors.primary,
                        margin: `0 0 ${theme.paddings.small} 0`,
                    }}
                >
                    Conviértete en Partner de La Vid
                </h2>

                <div
                    style={{
                        width: "40px",
                        height: "3px",
                        backgroundColor: theme.colors.sextiary,
                        borderRadius: theme.border_radius.xx_small,
                        margin: `0 auto ${theme.paddings.medium} auto`,
                    }}
                />

                <p
                    style={{
                        fontSize: theme.font_sizes.x_small,
                        fontWeight: theme.font_weight.small,
                        color: theme.colors.font3,
                        margin: "0 auto",
                        maxWidth: "500px",
                        lineHeight: "1.5",
                    }}
                >
                    Lleva nuestra selección de vinos 100% sin alcohol a tu espacio,
                    restaurante o comunidad. Completa tus datos y conversemos.
                </p>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: theme.paddings.large,
                        marginBottom: theme.paddings.large,
                    }}
                >
                    <div>
                        <label style={labelStyle}>Nombre Completo</label>
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombres y Apellidos"
                            value={formData.nombre}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("nombre")}
                            onBlur={() => setFocusedField(null)}
                            style={getInputStyle("nombre")}
                            required
                        />
                    </div>

                    <div>
                        <label style={labelStyle}>Correo Electrónico</label>
                        <input
                            type="email"
                            name="correo"
                            placeholder="correo@ejemplo.com"
                            value={formData.correo}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("correo")}
                            onBlur={() => setFocusedField(null)}
                            style={getInputStyle("correo")}
                            required
                        />
                    </div>

                    <div>
                        <label style={labelStyle}>Celular</label>
                        <input
                            type="tel"
                            name="celular"
                            placeholder="999 999 999"
                            value={formData.celular}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("celular")}
                            onBlur={() => setFocusedField(null)}
                            style={getInputStyle("celular")}
                            required
                        />
                    </div>

                    <div>
                        <label style={labelStyle}>DNI</label>
                        <input
                            type="text"
                            name="dni"
                            placeholder="Número de DNI"
                            value={formData.dni}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("dni")}
                            onBlur={() => setFocusedField(null)}
                            style={getInputStyle("dni")}
                            required
                        />
                    </div>
                </div>

                {/* Campo RUC ancho completo */}
                <div style={{ marginBottom: theme.paddings.large }}>
                    <label style={labelStyle}>
                        RUC{" "}
                        <span
                            style={{
                                color: theme.colors.font3,
                                fontWeight: theme.font_weight.small,
                                textTransform: "none",
                            }}
                        >
                            (Opcional si aún no cuentas con empresa)
                        </span>
                    </label>
                    <input
                        type="text"
                        name="ruc"
                        placeholder="Número de RUC"
                        value={formData.ruc}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("ruc")}
                        onBlur={() => setFocusedField(null)}
                        style={getInputStyle("ruc")}
                    />
                </div>

                {/* Dirección y Ubicación */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: theme.paddings.large,
                        marginBottom: theme.paddings.large,
                    }}
                >
                    <div>
                        <label style={labelStyle}>Dirección</label>
                        <input
                            type="text"
                            name="direccion"
                            placeholder="Av/Calle/Jr..."
                            value={formData.direccion}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("direccion")}
                            onBlur={() => setFocusedField(null)}
                            style={getInputStyle("direccion")}
                            required
                        />
                    </div>

                    <div>
                        <label style={labelStyle}>Ubicación</label>
                        <input
                            type="text"
                            name="ubicacion"
                            placeholder="Ciudad, Distrito"
                            value={formData.ubicacion}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("ubicacion")}
                            onBlur={() => setFocusedField(null)}
                            style={getInputStyle("ubicacion")}
                            required
                        />
                    </div>
                </div>

                {/* Mensaje */}
                <div style={{ marginBottom: theme.paddings.small }}>
                    <label style={labelStyle}>Cuéntanos sobre tu proyecto</label>
                    <textarea
                        name="mensaje"
                        rows="3"
                        placeholder="Ej: Hola, quisiera hacer un pedido inicial de 2 cajas para ofrecer los vinos 100% sin alcohol de La Vid en mi local..."
                        value={formData.mensaje}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("mensaje")}
                        onBlur={() => setFocusedField(null)}
                        style={{
                            ...getInputStyle("mensaje"),
                            resize: "vertical",
                            fontFamily: "inherit",
                        }}
                        required
                    />
                </div>

                <p
                    style={{
                        fontSize: theme.font_sizes.xx_small,
                        color: theme.colors.font3,
                        margin: `0 0 ${theme.paddings.x_large} 0`,
                    }}
                >
                    * Los pedidos para partners aplican a partir de 2 cajas en adelante.
                </p>

                {/* Botón principal */}
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: theme.paddings.medium,
                        backgroundColor: theme.colors.primary,
                        color: theme.colors.secondary,
                        fontSize: theme.font_sizes.x_small,
                        fontWeight: theme.font_weight.large,
                        letterSpacing: "0.06em",
                        border: "none",
                        borderRadius: theme.border_radius.small,
                        cursor: "pointer",
                        transition: "background-color 0.2s ease, transform 0.1s ease",
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = theme.colors.sextiary)
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = theme.colors.primary)
                    }
                >
                    QUIERO SER PARTNER
                </button>
            </form>
        </div>
    );
};