// controllers/contributeController.js
const Contribution = require('../models/Contribution');
const { sendCustomEmail } = require('../config/emailService');

const handleContribution = async (req, res) => {
  try {
    const contributionData = req.body;
    const savedContribution = await Contribution.create(contributionData);

    await sendCustomEmail({
      to: contributionData.email,
      subject: 'Confirm your contribution!',
      templateName: 'contributionEmail', // matches contributionTemplate.ejs
      templateData: {
        name: contributionData.name,
        amount: contributionData.amount,
        message: contributionData.message,
      },
    });

    res.status(200).json({ message: 'Contribution received', data: savedContribution });
  } catch (error) {
    console.error('Contribution Error:', error);
    res.status(500).json({ message: 'Failed to handle contribution' });
  }
};

module.exports = {
  handleContribution,
};
