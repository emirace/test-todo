import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("todo")
export class TodoEntity {
  @PrimaryGeneratedColumn("uuid")
  todoid: string;

  @Column({ type: "varchar", nullable: false })
  userId: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  title: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "boolean", default: false })
  status: boolean;

  @Column({ type: "timestamp", nullable: true })
  dueDate: Date;
}
