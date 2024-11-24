import React, { useState } from "react";

const FormGender: React.FC = () => {
  const [name, setName] = useState(""); 
  const [genderData, setGenderData] = useState<any | null>(null); 
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    // Простая валидация строки
    if (!name.trim()) {
      setError("Имя не может быть пустым.");
      return;
    }
    if (/[^a-zA-Zа-яА-ЯёЁ]/.test(name)) {
      setError("Имя может содержать только буквы.");
      return;
    }

    setError(null);

    const url = `https://api.genderize.io/?name=${name}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка сети. Попробуйте позже.");
        }
        return response.json();
      })
      .then((data) => {
        setGenderData(data);
      })
      .catch((err) => {
        setError(err.message || "Ошибка при запросе данных.");
      });
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Определение пола по имени</h1>
      <form
        onSubmit={handleSubmit}
        style={{ position: "relative", display: "inline-block" }}
      >
        <input
          type="text"
          placeholder="Введите имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
          }}
        >
          Узнать пол
        </button>

        {error && (
          <div
            style={{
              position: "absolute",
              bottom: "-35px",
              left: "0",
              backgroundColor: "#ffdddd",
              color: "#d00",
              padding: "5px 10px",
              borderRadius: "5px",
              border: "1px solid #d00",
              fontSize: "14px",
              whiteSpace: "nowrap",
            }}
          >
            {error}
          </div>
        )}
      </form>

      {genderData && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            display: "inline-block",
            textAlign: "left",
          }}
        >
          <h3>Результат:</h3>
          <p>
            <strong>Имя:</strong> {genderData.name}
          </p>
          <p>
            <strong>Пол:</strong>{" "}
            {genderData.gender ? genderData.gender : "Не удалось определить"}
          </p>
          <p>
            <strong>Вероятность:</strong>{" "}
            {genderData.probability ? `${genderData.probability * 100}%` : "N/A"}
          </p>
          <p>
            <strong>Количество:</strong> {genderData.count || "N/A"}
          </p>
        </div>
      )}
    </div>
  );
};

export default FormGender;
