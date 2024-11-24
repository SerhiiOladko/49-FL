import React, { useState, useEffect } from "react";
import styles from "./Homework10.module.css";
import Loader1 from "../../components/loader1/Loader1";
 

const Homework10: React.FC = () => {
  const [facts, setFacts] = useState<string[]>([]); 
  const [isLoading, setIsLoading] = useState(false); 
  
  const fetchCatFact = () => {
    setIsLoading(true);
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => {
        setFacts((prevFacts) => [...prevFacts, data.fact]);
      })
      .catch((error) => console.error("Ошибка при получении данных:", error))
      .finally(() => setIsLoading(false));
  };


  useEffect(() => {
    fetchCatFact();
  }, []);

  
  const handleDeleteAll = () => {
    setFacts([]);
  };

  return (
    <div className={styles.container}>
    
      <h1 className={styles.title}>Cat Facts</h1>

      
      <div className={styles.buttons}>
        <button className={styles.button} onClick={fetchCatFact}>
          GET MORE INFO
        </button>
        {facts.length > 0 && (
          <button className={styles.button} onClick={handleDeleteAll}>
            DELETE ALL DATA
          </button>
        )}
      </div>

      
      {isLoading && <Loader1 />}

      {facts.length > 0 && (
        <div className={styles.factBlock}>
          {facts.map((fact, index) => (
            <p key={index} className={styles.fact}>
              {fact}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homework10;
