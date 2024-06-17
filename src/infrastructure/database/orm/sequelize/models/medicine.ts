import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { prescription, prescriptionId } from './prescription';

export interface medicineAttributes {
  id: string;
  name?: string;
  type?: string;
  amount?: string;
  description?: string;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;
}

export type medicinePk = "id";
export type medicineId = medicine[medicinePk];
export type medicineOptionalAttributes = "name" | "type" | "amount" | "description" | "create_at" | "update_at" | "enable";
export type medicineCreationAttributes = Optional<medicineAttributes, medicineOptionalAttributes>;

export class medicine extends Model<medicineAttributes, medicineCreationAttributes> implements medicineAttributes {
  id!: string;
  name?: string;
  type?: string;
  amount?: string;
  description?: string;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;

  // medicine hasMany prescription via medicine_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof medicine {
    return medicine.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
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
    tableName: 'medicine',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "medicine_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
