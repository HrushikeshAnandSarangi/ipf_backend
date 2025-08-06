// config/emailService.js
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const renderTemplate = async (templateName, data) => {
  const templatePath = path.join(__dirname, '..', 'views', 'templates', `${templateName}.ejs`);
  return await ejs.renderFile(templatePath, data);
};

const sendCustomEmail = async ({ to, subject, templateName, templateData }) => {
  const html = await renderTemplate(templateName, templateData);
  await transporter.sendMail({
    from: `"No Reply" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
};

module.exports = {
  sendCustomEmail,
};
