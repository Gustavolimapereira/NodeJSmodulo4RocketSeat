import { QuestionsRepository } from "../repositories/question-repository";

interface DeleteQuestionuseCaseRequest {
  authorId: string;
  questionId: string;
}

interface DeleteQuestionnuseCaseResponse {}

export class DeleteQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    questionId,
    authorId,
  }: DeleteQuestionuseCaseRequest): Promise<DeleteQuestionnuseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId);

    if (!question) {
      throw new Error("Question not found.");
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error("Not allowed");
    }

    await this.questionsRepository.delete(question);

    return {};
  }
}
