import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { doctor, doctorId } from './doctor';
import type { medicine, medicineId } from './medicine';
import type { patient, patientId } from './patient';

export interface prescriptionAttributes {
  id: string;
  medicine_id?: string;
  count?: number;
  doctor_id?: string;
  patient_id?: string;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;
}

export type prescriptionPk = "id";
export type prescriptionId = prescription[prescriptionPk];
export type prescriptionOptionalAttributes = "medicine_id" | "count" | "doctor_id" | "patient_id" | "create_at" | "update_at" | "enable";
export type prescriptionCreationAttributes = Optional<prescriptionAttributes, prescriptionOptionalAttributes>;

export class prescription extends Model<prescriptionAttributes, prescriptionCreationAttributes> implements prescriptionAttributes {
  id!: string;
  medicine_id?: string;
  count?: number;
  doctor_id?: string;
  patient_id?: string;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;

  // prescription belongsTo doctor via doctor_id
  doctor!: doctor;
  getDoctor!: Sequelize.BelongsToGetAssociationMixin<doctor>;
  setDoctor!: Sequelize.BelongsToSetAssociationMixin<doctor, doctorId>;
  createDoctor!: Sequelize.BelongsToCreateAssociationMixin<doctor>;
  // prescription belongsTo medicine via medicine_id
  medicine!: medicine;
  getMedicine!: Sequelize.BelongsToGetAssociationMixin<medicine>;
  setMedicine!: Sequelize.BelongsToSetAssociationMixin<medicine, medicineId>;
  createMedicine!: Sequelize.BelongsToCreateAssociationMixin<medicine>;
  // prescription belongsTo patient via patient_id
  patient!: patient;
  getPatient!: Sequelize.BelongsToGetAssociationMixin<patient>;
  setPatient!: Sequelize.BelongsToSetAssociationMixin<patient, patientId>;
  createPatient!: Sequelize.BelongsToCreateAssociationMixin<patient>;

  static initModel(sequelize: Sequelize.Sequelize): typeof prescription {
    return prescription.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    medicine_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'medicine',
        key: 'id'
      }
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    doctor_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'doctor',
        key: 'id'
      }
    },
    patient_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'patient',
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
    tableName: 'prescription',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "prescription_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
