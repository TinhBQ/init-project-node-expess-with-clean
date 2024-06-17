import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { patientSchedule, patientScheduleId } from './patientSchedule';
import type { prescription, prescriptionId } from './prescription';
import type { remider, remiderId } from './remider';
import type { user, userId } from './user';

export interface patientAttributes {
  id: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  email?: string;
  citizen_id?: string;
  birth?: string;
  male?: boolean;
  nation?: string;
  ethnicity?: string;
  job?: string;
  province?: string;
  district?: string;
  wards?: string;
  address?: string;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;
}

export type patientPk = "id";
export type patientId = patient[patientPk];
export type patientOptionalAttributes = "first_name" | "last_name" | "phone" | "email" | "citizen_id" | "birth" | "male" | "nation" | "ethnicity" | "job" | "province" | "district" | "wards" | "address" | "create_at" | "update_at" | "enable";
export type patientCreationAttributes = Optional<patientAttributes, patientOptionalAttributes>;

export class patient extends Model<patientAttributes, patientCreationAttributes> implements patientAttributes {
  id!: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  email?: string;
  citizen_id?: string;
  birth?: string;
  male?: boolean;
  nation?: string;
  ethnicity?: string;
  job?: string;
  province?: string;
  district?: string;
  wards?: string;
  address?: string;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;

  // patient hasMany patientSchedule via patient_id
  patient-schedules!: patientSchedule[];
  getPatient-schedules!: Sequelize.HasManyGetAssociationsMixin<patientSchedule>;
  setPatient-schedules!: Sequelize.HasManySetAssociationsMixin<patientSchedule, patientScheduleId>;
  addPatient-schedule!: Sequelize.HasManyAddAssociationMixin<patientSchedule, patientScheduleId>;
  addPatient-schedules!: Sequelize.HasManyAddAssociationsMixin<patientSchedule, patientScheduleId>;
  createPatient-schedule!: Sequelize.HasManyCreateAssociationMixin<patientSchedule>;
  removePatient-schedule!: Sequelize.HasManyRemoveAssociationMixin<patientSchedule, patientScheduleId>;
  removePatient-schedules!: Sequelize.HasManyRemoveAssociationsMixin<patientSchedule, patientScheduleId>;
  hasPatient-schedule!: Sequelize.HasManyHasAssociationMixin<patientSchedule, patientScheduleId>;
  hasPatient-schedules!: Sequelize.HasManyHasAssociationsMixin<patientSchedule, patientScheduleId>;
  countPatient-schedules!: Sequelize.HasManyCountAssociationsMixin;
  // patient hasMany prescription via patient_id
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
  // patient hasMany remider via patient_id
  remiders!: remider[];
  getRemiders!: Sequelize.HasManyGetAssociationsMixin<remider>;
  setRemiders!: Sequelize.HasManySetAssociationsMixin<remider, remiderId>;
  addRemider!: Sequelize.HasManyAddAssociationMixin<remider, remiderId>;
  addRemiders!: Sequelize.HasManyAddAssociationsMixin<remider, remiderId>;
  createRemider!: Sequelize.HasManyCreateAssociationMixin<remider>;
  removeRemider!: Sequelize.HasManyRemoveAssociationMixin<remider, remiderId>;
  removeRemiders!: Sequelize.HasManyRemoveAssociationsMixin<remider, remiderId>;
  hasRemider!: Sequelize.HasManyHasAssociationMixin<remider, remiderId>;
  hasRemiders!: Sequelize.HasManyHasAssociationsMixin<remider, remiderId>;
  countRemiders!: Sequelize.HasManyCountAssociationsMixin;
  // patient belongsTo user via id
  id_user!: user;
  getId_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setId_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createId_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof patient {
    return patient.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    citizen_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    birth: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    male: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    nation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ethnicity: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    job: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    province: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    district: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wards: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
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
    tableName: 'patient',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "patient_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
