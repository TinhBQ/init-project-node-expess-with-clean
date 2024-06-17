import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { patientSchedule, patientScheduleCreationAttributes, patientScheduleId } from './patientSchedule';
import type { room, roomId } from './room';
import type { session, sessionId } from './session';

export interface scheduleAttributes {
  id: string;
  doctor_id?: string;
  room_id?: string;
  day?: string;
  session_id?: string;
}

export type schedulePk = "id";
export type scheduleId = schedule[schedulePk];
export type scheduleOptionalAttributes = "doctor_id" | "room_id" | "day" | "session_id";
export type scheduleCreationAttributes = Optional<scheduleAttributes, scheduleOptionalAttributes>;

export class schedule extends Model<scheduleAttributes, scheduleCreationAttributes> implements scheduleAttributes {
  id!: string;
  doctor_id?: string;
  room_id?: string;
  day?: string;
  session_id?: string;

  // schedule belongsTo room via room_id
  room!: room;
  getRoom!: Sequelize.BelongsToGetAssociationMixin<room>;
  setRoom!: Sequelize.BelongsToSetAssociationMixin<room, roomId>;
  createRoom!: Sequelize.BelongsToCreateAssociationMixin<room>;
  // schedule hasOne patientSchedule via schedule_id
  patient-schedule!: patientSchedule;
  getPatient-schedule!: Sequelize.HasOneGetAssociationMixin<patientSchedule>;
  setPatient-schedule!: Sequelize.HasOneSetAssociationMixin<patientSchedule, patientScheduleId>;
  createPatient-schedule!: Sequelize.HasOneCreateAssociationMixin<patientSchedule>;
  // schedule belongsTo session via session_id
  session!: session;
  getSession!: Sequelize.BelongsToGetAssociationMixin<session>;
  setSession!: Sequelize.BelongsToSetAssociationMixin<session, sessionId>;
  createSession!: Sequelize.BelongsToCreateAssociationMixin<session>;

  static initModel(sequelize: Sequelize.Sequelize): typeof schedule {
    return schedule.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    room_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'room',
        key: 'id'
      }
    },
    day: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    session_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'session',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'schedule',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "schedule_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
