import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { doctor, doctorId } from './doctor';

export interface degreeAttributes {
  id: string;
  name?: string;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;
}

export type degreePk = "id";
export type degreeId = degree[degreePk];
export type degreeOptionalAttributes = "name" | "create_at" | "update_at" | "enable";
export type degreeCreationAttributes = Optional<degreeAttributes, degreeOptionalAttributes>;

export class degree extends Model<degreeAttributes, degreeCreationAttributes> implements degreeAttributes {
  id!: string;
  name?: string;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;

  // degree hasMany doctor via degree_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof degree {
    return degree.init({
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
    tableName: 'degree',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "degree_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
