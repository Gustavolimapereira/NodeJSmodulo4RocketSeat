import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"

interface QuestionProps {
    title: string
    content:string
    slug:Slug
    authorId:UniqueEntityID,
    bestAnswerId?: UniqueEntityID
    createdAt: Date
    updatedAr?: Date
}

class Questions extends Entity<QuestionProps> {
    
}

