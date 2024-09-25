import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";
import { makeQuestion } from "test/factories/make-question";
import { EditQuestionUseCase } from "./edit-question";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: EditQuestionUseCase;

describe("Edit Question", () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new EditQuestionUseCase(inMemoryQuestionsRepository);
  });

  it("deve ser possivel editar uma pergunta", async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityID("author-1"),
      },
      new UniqueEntityID("question-1"),
    );

    await inMemoryQuestionsRepository.create(newQuestion);

    await sut.execute({
      authorId: "author-1",
      title: "Pergunta teste editada",
      content: "Conteudo teste editado",
      questionId: newQuestion.id.toValue(),
    });

    expect(inMemoryQuestionsRepository.items[0]).toMatchObject({
      title: "Pergunta teste editada",
      content: "Conteudo teste editado",
    });
  });

  it("não deve ser possivel editar uma pergunta de outro usuario", async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityID("author-1"),
      },
      new UniqueEntityID("question-1"),
    );

    await inMemoryQuestionsRepository.create(newQuestion);

    expect(() => {
      return sut.execute({
        authorId: "author-2",
        title: "Pergunta teste editada",
        content: "Conteudo teste editado",
        questionId: newQuestion.id.toValue(),
      });
    }).rejects.toBeInstanceOf(Error);
  });
});
