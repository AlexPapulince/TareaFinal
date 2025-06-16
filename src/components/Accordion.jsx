import { useState } from 'react';

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {item.region}
          </button>
          {openIndex === index && <p>{item.danza}</p>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
