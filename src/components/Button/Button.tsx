import React from 'react';

interface Props {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ label, onClick }) => {
  return (
    <div className="EsButton">
      <button type="button" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};
