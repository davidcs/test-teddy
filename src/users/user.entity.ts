import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity ({ name: 'users'})
export class Users{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: 'nome', nullable:false})
    nome: string;

    @Column({name: 'salario', nullable:false})
    salario: string;

    @Column({name: 'valor_empresa', nullable:false})
    valor_empresa: string;
}