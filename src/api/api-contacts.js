import instance from './api-user';

export const fetchContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const fetchAddContact = async obj => {
  const { data } = await instance.post('/contacts', obj);
  return data;
};

export const fetchDeleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
