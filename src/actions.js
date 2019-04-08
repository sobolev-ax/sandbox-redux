export const dec = () => ({ type: 'DEC' });

export const inc = () => ({ type: 'INC' });

export const rnd = () => {
  return {
    type: 'RND',
    payload: Math.floor(Math.random() * 10),
  };
};
