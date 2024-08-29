import {expect, test} from 'vitest'
import { AnswerQuestionuseCase } from './answer-question'
import { AnswersRepository } from '../repositories/answers-repository'
import { Answer } from '../entities/answer'

const fakeAnswersRepository: AnswersRepository = {
    create:async (answer:Answer) => {
        return;
    }
}

test('Create an answer', async () => {
    const answerQuestion = new AnswerQuestionuseCase(fakeAnswersRepository)

    const answer = await answerQuestion.execute({
        questionId: '1',
        InstructorId: '1',
        content: 'Nova resposta'
    })

    expect(answer.content).toEqual('Nova resposta')
})