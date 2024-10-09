import { WatchedList } from "@/core/entities/watched-list";
import { AnswerAttachment } from "./answer-attachmento";

export class AnswerAttachmentList extends WatchedList<AnswerAttachment> {
  compareItems(a: AnswerAttachment, b: AnswerAttachment): boolean {
    return a.attachmentId === b.attachmentId;
  }
}
