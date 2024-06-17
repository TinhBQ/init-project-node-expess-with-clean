import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { patient, patientId } from './patient';
import type { schedule, scheduleId } from './schedule';

export interface patientScheduleAttributes {
  schedule_id: string;
  patient_id?: string;
  serial?: number;
  create_at?: Date;
  update_at?: Date;
  enable?: string;
}

export type patientSchedulePk = "schedule_id";
export type patientScheduleId = patientSchedule[patientSchedulePk];
export type patientScheduleOptionalAttributes = "patient_id" | "serial" | "create_at" | "update_at" | "enable";
export type patientScheduleCreationAttributes = Optional<patientScheduleAttributes, patientScheduleOptionalAttributes>;

export class patientSchedule extends Model<patientScheduleAttributes, patientScheduleCreationAttributes> implements patientScheduleAttributes {
  schedule_id!: string;
  patient_id?: string;
  serial?: number;
  create_at?: Date;
  update_at?: Date;
  enable?: string;

  // patientSchedule belongsTo patient via patient_id
  patient!: patient;
  getPatient!: Sequelize.BelongsToGetAssociationMixin<patient>;
  setPatient!: Sequelize.BelongsToSetAssociationMixin<patient, patientId>;
  createPatient!: Sequelize.BelongsToCreateAssociationMixin<patient>;
  // patientSchedule belongsTo schedule via schedule_id
  schedule!: schedule;
  getSchedule!: Sequelize.BelongsToGetAssociationMixin<schedule>;
  setSchedule!: Sequelize.BelongsToSetAssociationMixin<schedule, scheduleId>;
  createSchedule!: Sequelize.BelongsToCreateAssociationMixin<schedule>;

  static initModel(sequelize: Sequelize.Sequelize): typeof patientSchedule {
    return patientSchedule.init({
    schedule_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'schedule',
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
    serial: {
      type: DataTypes.DECIMAL,
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
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'patient-schedule',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "patient-schedule_pkey",
        unique: true,
        fields: [
          { name: "schedule_id" },
        ]
      },
    ]
  });
  }
}
