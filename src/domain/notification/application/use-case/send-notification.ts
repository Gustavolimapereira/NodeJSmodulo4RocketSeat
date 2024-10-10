import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Either, right } from "@/core/either";
import { Notification } from "../../enterprise/entities/notification";
import { NotificationsRepository } from "../repositories/notifications-repository";

interface SendnotificationuseCaseRequest {
  recipientId: string;
  title: string;
  content: string;
}

type SendnotificationUseCaseResponse = Either<
  null,
  {
    notification: Notification;
  }
>;

export class SendnotificationUseCase {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute({
    recipientId,
    title,
    content,
  }: SendnotificationuseCaseRequest): Promise<SendnotificationUseCaseResponse> {
    const notification = Notification.create({
      recipientId: new UniqueEntityID(recipientId),
      title,
      content,
    });

    await this.notificationsRepository.create(notification);

    return right({ notification });
  }
}
