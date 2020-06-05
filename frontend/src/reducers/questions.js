import { ADD_QUESTION } from "../actions"

const questions = (state = [], action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return [
        ...state,
        {
          questionId: action.questionId,
          text: action.answers
        }
      ]
    default:
      return state
  }
}

export default questions