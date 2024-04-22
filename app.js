require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { Company } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Get 2 website rows with fields- id, and email which are not sent previously
app.get('/api/companies', async (req, res) => {
  try {
    const companies = await Company.findAll({
      where: {
        verified: false,
        emailSent: false
      },
      attributes: ['id', 'email'],
      limit: 2
    });

    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Mark the corresponding company email as verified
app.put('/api/companies/:id/verify', async (req, res) => {
  const { id } = req.params;

  try {
    const company = await Company.findByPk(id);

    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    await company.update({ verified: true, emailSent: true });

    res.json({ message: 'Company email verified successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
