import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Answer } from "../../enterprise/entities/answer";
import { AnswersRepository } from "../repositories/answers-repository";
import { Either, right } from "@/core/either";

interface AnswerQuestionUseCaseRequest {
  InstructorId: string;
  questionId: string;
  content: string;
}

type AnswerQuestionuseCaseResponse = Either<
  null,
  {
    answer: Answer;
  }
>;

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    InstructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest): Promise<AnswerQuestionuseCaseResponse> {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityID(InstructorId),
      questionId: new UniqueEntityID(questionId),
    });

    await this.answersRepository.create(answer);

    return right({ answer });
  }
}
