/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getQuestions } from '../../actions/questionnaireActions';
import { Container, AnswerContainer, AnswerOption } from './styles.css';
import { Button } from '../../components';

const Questionnaire = () => {
  const history = useHistory();
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState('');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getQuestions();
        setQuestions(response.questions);
        setQuestionNumber(0);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (questions.length > questionNumber + 1) {
      return setQuestionNumber(questionNumber + 1);
    }
    const isBadNews = [...answers, answer].find((an) => an === true);
    if (isBadNews) {
      return setResult('Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which maybe used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication');
    }
    return setResult('Great news! We have the perfect treatment for your hair loss. Proceed to www.manual.co, and prepare to say hello to your new hair!');
  };

  return (
    <Container>
      {result ? (
        <>
          <h2>{result}</h2>
          <Button onClick={() => history.push('/')} width="300px">BACK TO THE HOME PAGE</Button>

        </>
      ) : (
        <>
          <h2>
            {questions[questionNumber]?.question}
          </h2>
          <AnswerContainer>
            {questions[questionNumber]?.options.map((op) => (
              <AnswerOption
                key={Object.keys(op)[0]}
                onClick={() => handleAnswer(Object.values(op)[0])}
              >
                <div dangerouslySetInnerHTML={{ __html: Object.keys(op)[0] }} />
                <span>{Object.values(op)[0]}</span>
              </AnswerOption>
            ))}
          </AnswerContainer>
        </>
      )}
    </Container>
  );
};

export default Questionnaire;
