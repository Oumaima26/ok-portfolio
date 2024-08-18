import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from 'react-i18next';

function Type() {
  const { t } = useTranslation(); 

  return (
    <Typewriter
      options={{
        strings: [
          t('Full_Stack'),  // Utilisation correcte de t()
          t('MERN_Stack'),   // Utilisation correcte de t()
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
