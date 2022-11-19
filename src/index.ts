import { uniqueNamesGenerator, animals, colors } from 'unique-names-generator';

export const myComponent = () => {
  const name = uniqueNamesGenerator({
    dictionaries: [animals, colors],
  });

  return name;
};

export { Button } from './components/Button';
