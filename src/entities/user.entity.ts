import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("user")
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  userId: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 255, nullable: false, unique: true })
  email: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  password: string;

  @Column({ type: "boolean", default: false })
  deletedAt: boolean;
}
