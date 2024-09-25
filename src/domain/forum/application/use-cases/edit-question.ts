import { QuestionsRepository } from "../repositories/question-repository";

interface EditQuestionuseCaseRequest {
  authorId: string;
  title: string;
  content: string;
  questionId: string;
}

interface EditQuestionnuseCaseResponse {}

export class EditQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    title,
    content,
    authorId,
    questionId,
  }: EditQuestionuseCaseRequest): Promise<EditQuestionnuseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId);

    if (!question) {
      throw new Error("Question not found.");
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error("Not allowed");
    }

    question.title = title;
    question.content = content;

    await this.questionsRepository.save(question);

    return {};
  }
}
