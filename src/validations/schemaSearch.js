const yup = require('yup');

const schemaSearch = yup.object().shape({
  searchBar: yup
    .string()
    .min(5)
    .max(50)
    .required(),
});

module.exports = {
  schemaSearch,
};
