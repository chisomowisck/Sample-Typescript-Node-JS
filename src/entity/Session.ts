import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, getRepository } from "typeorm"

@Entity({ name: 'sessions' })
class Session {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    level: number

    @Column()
    level2: number

    @Column()
    level3: number

    @CreateDateColumn()
    public created_at: Date;
  
    @UpdateDateColumn()
    public updated_at: Date;
}

const SessionRepository = () => getRepository(Session);
export { Session, SessionRepository };
