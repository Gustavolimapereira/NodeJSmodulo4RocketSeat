import { AnswersRepository } from "../repositories/answers-repository";

interface DeleteAnsweruseCaseRequest {
  authorId: string;
  answerId: string;
}

interface DeleteAnswernuseCaseResponse {}

export class DeleteAnswerUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    answerId,
    authorId,
  }: DeleteAnsweruseCaseRequest): Promise<DeleteAnswernuseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId);

    if (!answer) {
      throw new Error("Answer not found.");
    }

    if (authorId !== answer.authorId.toString()) {
      throw new Error("Not allowed");
    }

    await this.answersRepository.delete(answer);

    return {};
  }
}
