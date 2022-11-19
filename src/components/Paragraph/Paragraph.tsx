import React from 'react';

interface Props {
  copy: string;
  type: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
}

export const Paragraph: React.FC<Props> = ({ copy, type = 'p' }) => {
  const renderParagraph = (input: string) => {
    switch (type) {
      case 'h1':
        return <h1>{input}</h1>;
      case 'h2':
        return <h2>{input}</h2>;
      case 'h3':
        return <h3>{input}</h3>;
      case 'h4':
        return <h4>{input}</h4>;
      case 'h5':
        return <h5>{input}</h5>;
      case 'h6':
        return <h6>{input}</h6>;
      case 'span':
        return <span>{input}</span>;
      default:
        return <p>{input}</p>;
    }
  };

  return <div className="EsButton">{renderParagraph(copy)}</div>;
};
