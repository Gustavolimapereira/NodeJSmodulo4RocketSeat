import {expect, test} from 'vitest'
import { AnswerQuestionuseCase } from './answer-question'

test('Create an answer', () => {
    const answerQuestion = new AnswerQuestionuseCase()

    const answer = answerQuestion.execute({
        questionId: '1',
        InstructorId: '1',
        content: 'Nova resposta'
    })

    expect(answer.content).toEqual('Nova resposta')
})