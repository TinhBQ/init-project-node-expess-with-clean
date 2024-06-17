import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { doctor, doctorCreationAttributes, doctorId } from './doctor';
import type { patient, patientCreationAttributes, patientId } from './patient';
import type { role, roleId } from './role';

export interface userAttributes {
  id: string;
  phone?: string;
  password?: string;
  full_name?: string;
  role?: string;
  email?: string;
  avatar?: string;
  birthday?: string;
  male?: boolean;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;
  active?: boolean;
}

export type userPk = "id";
export type userId = user[userPk];
export type userOptionalAttributes = "phone" | "password" | "full_name" | "role" | "email" | "avatar" | "birthday" | "male" | "create_at" | "update_at" | "enable" | "active";
export type userCreationAttributes = Optional<userAttributes, userOptionalAttributes>;

export class user extends Model<userAttributes, userCreationAttributes> implements userAttributes {
  id!: string;
  phone?: string;
  password?: string;
  full_name?: string;
  role?: string;
  email?: string;
  avatar?: string;
  birthday?: string;
  male?: boolean;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;
  active?: boolean;

  // user belongsTo role via role
  role_role!: role;
  getRole_role!: Sequelize.BelongsToGetAssociationMixin<role>;
  setRole_role!: Sequelize.BelongsToSetAssociationMixin<role, roleId>;
  createRole_role!: Sequelize.BelongsToCreateAssociationMixin<role>;
  // user hasOne doctor via id
  doctor!: doctor;
  getDoctor!: Sequelize.HasOneGetAssociationMixin<doctor>;
  setDoctor!: Sequelize.HasOneSetAssociationMixin<doctor, doctorId>;
  createDoctor!: Sequelize.HasOneCreateAssociationMixin<doctor>;
  // user hasOne patient via id
  patient!: patient;
  getPatient!: Sequelize.HasOneGetAssociationMixin<patient>;
  setPatient!: Sequelize.HasOneSetAssociationMixin<patient, patientId>;
  createPatient!: Sequelize.HasOneCreateAssociationMixin<patient>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user {
    return user.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    role: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'role',
        key: 'id'
      }
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: true
    },
    male: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    enable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
