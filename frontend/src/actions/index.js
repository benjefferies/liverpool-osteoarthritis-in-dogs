export const ADD_QUESTION = "ADD_QUESTION";

export const addQuestion = (questionId, answers) => {
  return {
    type: ADD_QUESTION,
    questionId: questionId,
    answers,
  };
};
