import { Answer } from "../entities/answer"


interface AnswerQuestionuseCaseReuqest{
    InstructorId: string
    questionId: string
    content: string
}

export class AnswerQuestionuseCase{
    execute({InstructorId, questionId, content}: AnswerQuestionuseCaseReuqest){
        const answer = new Answer(content)

        return answer
    }
}
