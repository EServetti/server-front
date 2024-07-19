import React, { useEffect, useRef } from "react";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.us";

function CreditCardInput() {
  const cleaveRef = useRef(null);

  useEffect(() => {
    const cleaveInstance = cleaveRef.current;
    if (cleaveInstance) {
      cleaveInstance.element.addEventListener('input', (event) => {
      });

      return () => {
        if (cleaveInstance && cleaveInstance.element) {
          cleaveInstance.element.removeEventListener('input', () => {});
        }
      };
    }
  }, []);

  return (
    <Cleave
      id="card-number"
      placeholder="0000 0000 0000 0000"
      options={{ creditCard: true }}
      ref={cleaveRef}
      className="credit-card-input"
    />
  );
}

export default CreditCardInput;
