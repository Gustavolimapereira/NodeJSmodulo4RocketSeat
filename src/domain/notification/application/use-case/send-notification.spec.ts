import { SendnotificationUseCase } from "./send-notification";
import { InMemoryNotificationsRepository } from "test/repositories/in-memory-notification-repository";

let inMemoryNotificationsRepository: InMemoryNotificationsRepository;
let sut: SendnotificationUseCase;

describe("Send Notification", () => {
  beforeEach(() => {
    inMemoryNotificationsRepository = new InMemoryNotificationsRepository();
    sut = new SendnotificationUseCase(inMemoryNotificationsRepository);
  });

  it("Deve ser possivel enviar uma notificação", async () => {
    const result = await sut.execute({
      recipientId: "1",
      title: "New Notification",
      content: "Conteudo da notificação",
    });

    expect(result.isRight()).toBe(true);
    expect(inMemoryNotificationsRepository.items[0]).toEqual(
      result.value?.notification,
    );
  });
});
