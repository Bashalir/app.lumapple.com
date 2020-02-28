const yup = require('yup');

const productSchema = yup.object().shape({
  description: yup
    .string()
    .min(5, 'more character')
    .max(50)
    .required(),
  introductionDate: yup.date().required(),
  model: yup.string().email('fuck'),
  idModel: yup
    .string()
    .min(5)
    .max(50)
    .required(),
  ram: yup
    .number()
    .required()
    .positive()
    .integer(),
  storage: yup
    .string()
    .min(5)
    .max(50)
    .required(),
  processor: yup
    .string()
    .min(5)
    .max(50)
    .required(),
  screen: yup
    .string()
    .min(5)
    .max(50)
    .required(),
  videoCard: yup
    .string()
    .min(5)
    .max(50)
    .required(),
});

const testSchema = yup.object().shape({
  email: yup.string().email('fuck'),
  email2: yup.string().email('You'),
});

module.exports = {
  productSchema,
  testSchema,
};

// { label: 'Description', key: 'description', type: 'text' },
//     { label: 'Introduction Date', key: 'introductionDate', type: 'date' },
//     { label: 'Modèle', key: 'model', type: 'text' },
//     { label: 'Id Modèle', key: 'idModel', type: 'text' },
//     { label: 'Ram', key: 'ram', type: 'number' },
//     { label: 'Storage', key: 'storage', type: 'text' },
//     { label: 'Processeur', key: 'processor', type: 'text' },
//     { label: 'Screen', key: 'screen', type: 'text' },
//     { label: 'Carte Graphique', key: 'videoCard', type: 'text' },
