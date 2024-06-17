import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { doctor, doctorId } from './doctor';

export interface departmentAttributes {
  id: string;
  name?: string;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;
}

export type departmentPk = "id";
export type departmentId = department[departmentPk];
export type departmentOptionalAttributes = "name" | "create_at" | "update_at" | "enable";
export type departmentCreationAttributes = Optional<departmentAttributes, departmentOptionalAttributes>;

export class department extends Model<departmentAttributes, departmentCreationAttributes> implements departmentAttributes {
  id!: string;
  name?: string;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;

  // department hasMany doctor via department_id
  doctors!: doctor[];
  getDoctors!: Sequelize.HasManyGetAssociationsMixin<doctor>;
  setDoctors!: Sequelize.HasManySetAssociationsMixin<doctor, doctorId>;
  addDoctor!: Sequelize.HasManyAddAssociationMixin<doctor, doctorId>;
  addDoctors!: Sequelize.HasManyAddAssociationsMixin<doctor, doctorId>;
  createDoctor!: Sequelize.HasManyCreateAssociationMixin<doctor>;
  removeDoctor!: Sequelize.HasManyRemoveAssociationMixin<doctor, doctorId>;
  removeDoctors!: Sequelize.HasManyRemoveAssociationsMixin<doctor, doctorId>;
  hasDoctor!: Sequelize.HasManyHasAssociationMixin<doctor, doctorId>;
  hasDoctors!: Sequelize.HasManyHasAssociationsMixin<doctor, doctorId>;
  countDoctors!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof department {
    return department.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
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
    }
  }, {
    sequelize,
    tableName: 'department',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "department_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
