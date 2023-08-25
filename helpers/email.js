import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //  Información del email

  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "UpTask - Confirma tu Cuenta",
    text: "Comprueba tu cuenta en UpTaks",
    html: `
        <p>Hola: ${nombre} Comprueba tu cuenta en UpTask</p>
        <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace: </p>

        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>

        <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
        `,
  });
};

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //  Información del email

  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "UpTask - Reestablece tu Contraseña",
    text: "Reestablece tu Contraseña",
    html: `
      <p>Hola: ${nombre} has solicitado reestablecer tu contraseña</p>
      <p>Sigue el siguiente enlace para generar una nueva contraseña: </p>

      <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Contraseña</a>

      <p>Si tu no solicitaste este email, puedes ignorar este mensaje</p>
      `,
  });
};
