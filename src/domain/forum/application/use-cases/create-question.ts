import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { QuestionsRepository } from "../repositories/question-repository";
import { Question } from "../../enterprise/entities/question";

interface CreateQuestionuseCaseRequest {
  authorId: string;
  title: string;
  content: string;
}

interface CreateQuestionnuseCaseResponse {
  question: Question;
}

export class CreateQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    authorId,
    title,
    content,
  }: CreateQuestionuseCaseRequest): Promise<CreateQuestionnuseCaseResponse> {
    const question = Question.create({
      authorId: new UniqueEntityID(authorId),
      title,
      content,
    });

    await this.questionsRepository.create(question);

    return { question };
  }
}
