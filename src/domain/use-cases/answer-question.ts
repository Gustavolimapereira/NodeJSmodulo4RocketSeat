import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Answer } from "../entities/answer"
import { AnswersRepository } from "../repositories/answers-repository"


interface AnswerQuestionuseCaseReuqest{
    InstructorId: string
    questionId: string
    content: string
}

export class AnswerQuestionUseCase{

    constructor(
        private answersRepository: AnswersRepository,
    ){}

    async execute({InstructorId, questionId, content}: AnswerQuestionuseCaseReuqest){
        const answer = Answer.create({
            content,
            authorId: new UniqueEntityID(InstructorId),
            questionId: new UniqueEntityID(questionId)
        })


        await this.answersRepository.create(answer)

        return answer
    }
}
