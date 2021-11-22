import React from 'react';

export const Token = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 gap">
        {tokenDisplay(1, 'moongray', '#4B5563')}
        {tokenDisplay(2, 'moonred', '#DC2626')}
        {tokenDisplay(3, 'moonyellow', '#D97706')}
        {tokenDisplay(4, 'moongreen', '#059669')}
        {tokenDisplay(5, 'moonblue', '#2563EB')}
        {tokenDisplay(6, 'moonindigo', '#4F46E5')}
        {tokenDisplay(7, 'moonpurple', '#7C3AED')}
        {tokenDisplay(8, 'moonpink', '#DB2777')}
      </div>
    </div>
  );
};

function tokenDisplay(id: number, token: string, hexcode: string) {
  return (
    <div className={`c-${id} flex`}>
      <div className={`w-20 h-20 bg-${token}`}></div>
      <div className="pl-3 c-body">
        <label htmlFor="token">
          <strong>{token}</strong>
        </label>
        <br />
        <label htmlFor="hexcode">{hexcode}</label>
      </div>
    </div>
  );
}
