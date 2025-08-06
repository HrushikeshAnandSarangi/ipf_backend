const Member = require('../models/Member');
const { sendCustomEmail } = require('../config/emailService');

const handleMembership = async (req, res) => {
  try {
    const membershipData = req.body;
    const savedMember = await Member.create(membershipData);

    await sendCustomEmail({
      to: membershipData.email,
      subject: 'Confirm your membership!',
      templateName: 'membershipEmail', // matches membershipTemplate.ejs
      templateData: {
        name: membershipData.name,
        interest: membershipData.interest,
        message: membershipData.message,
      },
    });

    res.status(200).json({ message: 'Membership request received', data: savedMember });
  } catch (error) {
    console.error('Membership Error:', error);
    res.status(500).json({ message: 'Failed to handle membership' });
  }
};

module.exports = {
  handleMembership,
};
