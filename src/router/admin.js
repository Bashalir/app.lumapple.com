import React, { useState } from 'react';
import Input from '../components/Input';

const defaultFormValues = {
  introduction_date: '10/27/2016',
  description: 'Apple MacBook Pro 13-Inch "Core i5" 2.0',
  model: 'MLL42LL/A',
  id_model: 'A1708 (EMC 2978)',
  ram: 8,
  storage: '256 GB SSD',
  processor: 'Core i5 (I5-6360U)',
  screen: '13.3" Widescreen',
  video_card: 'Iris Graphics 540',
};

function AddProductForm() {
  const [values, setValues] = useState(defaultFormValues);

  function handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(values, null, 2));
  }

  function handleChange(event) {
    // console.log('event', event);
    const key = event.target.name;
    const value = event.target.value;

    setValues({ ...values, [key]: value });
  }

  const productKeys = [
    { label: 'Description', key: 'description', type: 'text' },
    { label: 'Introduction Date', key: 'introduction_date', type: 'date' },
    { label: 'Modèle', key: 'model', type: 'text' },
    { label: 'Id Modèle', key: 'id_model', type: 'text' },
    { label: 'Ram', key: 'ram', type: 'number' },
    { label: 'Storage', key: 'storage', type: 'text' },
    { label: 'Processeur', key: 'processor', type: 'text' },
    { label: 'Screen', key: 'screen', type: 'text' },
    { label: 'Carte Graphique', key: 'video_card', type: 'text' },
  ];

  return (
    <form onSubmit={handleSubmit}>
      {productKeys.map(({ label, key, type }, index) => {
        return (
          <Input
            key={index}
            label={label}
            type={type}
            value={values[key]}
            name={key}
            onChange={handleChange}
          />
        );
      })}
      <input type="submit" value="Envoyer" />
    </form>
  );
}

function Admin() {
  return (
    <>
      <h2>Admin</h2>
      <AddProductForm />
    </>
  );
}

export default Admin;
