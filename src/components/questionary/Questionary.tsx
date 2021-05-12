import { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

const Questionary = () => {
  const { t } = useTranslation('questionary');

  const [questions, setQuestions] = useState([
    'What is your name',
    'what is your age',
    'what is your size',
  ]);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const text = {
    name: 'app_name',
    bla: 'boulou',
  };

  const saveResponse = () => {
    const answerData = {
      question: questions[activeQuestion],
      answer: inputValue,
    };
    setAnswer([...answer, answerData]);
    setInputValue('');
    setActiveQuestion(activeQuestion + 1);
  };

  return (
    <>
      <Container>
        {questions.map((e) => {
          if (activeQuestion === questions.indexOf(e)) {
            return (
              <>
                <label htmlFor='question'>
                  {e}
                  <input
                    type='text'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </label>
                <button onClick={() => saveResponse()}>next</button>
              </>
            );
          }
        })}
      </Container>
      <p>{t('question1')}</p>
      Réponses:
      {answer.map((e) => {
        return (
          <>
            <h1>{e.question}</h1>
            <h3>{e.answer}</h3>
          </>
        );
      })}
    </>
  );
};

export default Questionary;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 3000px;
`;

const FormContainer = styled.form``;
