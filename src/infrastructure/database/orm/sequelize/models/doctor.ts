import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { degree, degreeId } from './degree';
import type { department, departmentId } from './department';
import type { prescription, prescriptionId } from './prescription';
import type { user, userId } from './user';

export interface doctorAttributes {
  id: string;
  name?: string;
  male?: boolean;
  birth?: string;
  degree_id?: string;
  department_id?: string;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;
}

export type doctorPk = "id";
export type doctorId = doctor[doctorPk];
export type doctorOptionalAttributes = "name" | "male" | "birth" | "degree_id" | "department_id" | "create_at" | "update_at" | "enable";
export type doctorCreationAttributes = Optional<doctorAttributes, doctorOptionalAttributes>;

export class doctor extends Model<doctorAttributes, doctorCreationAttributes> implements doctorAttributes {
  id!: string;
  name?: string;
  male?: boolean;
  birth?: string;
  degree_id?: string;
  department_id?: string;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;

  // doctor belongsTo degree via degree_id
  degree!: degree;
  getDegree!: Sequelize.BelongsToGetAssociationMixin<degree>;
  setDegree!: Sequelize.BelongsToSetAssociationMixin<degree, degreeId>;
  createDegree!: Sequelize.BelongsToCreateAssociationMixin<degree>;
  // doctor belongsTo department via department_id
  department!: department;
  getDepartment!: Sequelize.BelongsToGetAssociationMixin<department>;
  setDepartment!: Sequelize.BelongsToSetAssociationMixin<department, departmentId>;
  createDepartment!: Sequelize.BelongsToCreateAssociationMixin<department>;
  // doctor hasMany prescription via doctor_id
  prescriptions!: prescription[];
  getPrescriptions!: Sequelize.HasManyGetAssociationsMixin<prescription>;
  setPrescriptions!: Sequelize.HasManySetAssociationsMixin<prescription, prescriptionId>;
  addPrescription!: Sequelize.HasManyAddAssociationMixin<prescription, prescriptionId>;
  addPrescriptions!: Sequelize.HasManyAddAssociationsMixin<prescription, prescriptionId>;
  createPrescription!: Sequelize.HasManyCreateAssociationMixin<prescription>;
  removePrescription!: Sequelize.HasManyRemoveAssociationMixin<prescription, prescriptionId>;
  removePrescriptions!: Sequelize.HasManyRemoveAssociationsMixin<prescription, prescriptionId>;
  hasPrescription!: Sequelize.HasManyHasAssociationMixin<prescription, prescriptionId>;
  hasPrescriptions!: Sequelize.HasManyHasAssociationsMixin<prescription, prescriptionId>;
  countPrescriptions!: Sequelize.HasManyCountAssociationsMixin;
  // doctor belongsTo user via id
  id_user!: user;
  getId_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setId_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createId_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof doctor {
    return doctor.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    male: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    birth: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    degree_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'degree',
        key: 'id'
      }
    },
    department_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'department',
        key: 'id'
      }
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
    }
  }, {
    sequelize,
    tableName: 'doctor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "doctor_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
