import React from 'react';


export const formatTextWithSpacing = (text) => {
  return text
    .split('.')  
    .filter(sentence => sentence.trim() !== '') 
    .map((sentence, index) => (
      <p key={index} style={{ marginBottom: '25px', lineHeight: '1.8' }}>
        {sentence.trim()}.
      </p>
    ));
};
