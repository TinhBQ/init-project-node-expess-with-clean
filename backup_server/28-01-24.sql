/*
PostgreSQL Backup
Database: mobile_advance_mkp2/public
Backup Time: 2024-01-27 15:39:16
*/

DROP TABLE IF EXISTS "public"."degree";
DROP TABLE IF EXISTS "public"."department";
DROP TABLE IF EXISTS "public"."doctor";
DROP TABLE IF EXISTS "public"."floor";
DROP TABLE IF EXISTS "public"."medicine";
DROP TABLE IF EXISTS "public"."patient";
DROP TABLE IF EXISTS "public"."patient-schedule";
DROP TABLE IF EXISTS "public"."prescription";
DROP TABLE IF EXISTS "public"."remider";
DROP TABLE IF EXISTS "public"."role";
DROP TABLE IF EXISTS "public"."room";
DROP TABLE IF EXISTS "public"."schedule";
DROP TABLE IF EXISTS "public"."session";
DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "degree" (
  "id" uuid NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "create_at" timestamp(6),
  "update_at" timestamp(6),
  "enable" bool
)
;
-- ALTER TABLE "degree" OWNER TO "postgress";
CREATE TABLE "department" (
  "id" uuid NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "create_at" timestamp(6),
  "update_at" timestamp(6),
  "enable" bool
)
;
-- ALTER TABLE "department" OWNER TO "postgress";
CREATE TABLE "doctor" (
  "id" uuid NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "male" bool,
  "birth" varchar(255) COLLATE "pg_catalog"."default",
  "degree_id" uuid,
  "department_id" uuid,
  "create_at" timestamp(6),
  "update_at" timestamp(6),
  "enable" bool
)
;
-- ALTER TABLE "doctor" OWNER TO "postgress";
CREATE TABLE "floor" (
  "id" uuid NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "create_at" timestamp(6),
  "update_at" timestamp(6),
  "enable" bool
)
;
-- ALTER TABLE "floor" OWNER TO "postgress";
CREATE TABLE "medicine" (
  "id" uuid NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "type" varchar(255) COLLATE "pg_catalog"."default",
  "amount" varchar(255) COLLATE "pg_catalog"."default",
  "description" varchar(255) COLLATE "pg_catalog"."default",
  "create_at" timestamp(6),
  "update_at" timestamp(6),
  "enable" bool
)
;
-- ALTER TABLE "medicine" OWNER TO "postgress";
CREATE TABLE "patient" (
  "id" uuid NOT NULL,
  "first_name" varchar(255) COLLATE "pg_catalog"."default",
  "last_name" varchar(255) COLLATE "pg_catalog"."default",
  "phone" varchar(10) COLLATE "pg_catalog"."default",
  "email" varchar(255) COLLATE "pg_catalog"."default",
  "citizen_id" varchar(255) COLLATE "pg_catalog"."default",
  "birth" varchar(255) COLLATE "pg_catalog"."default",
  "male" bool,
  "nation" varchar(255) COLLATE "pg_catalog"."default",
  "ethnicity" varchar(255) COLLATE "pg_catalog"."default",
  "job" varchar(255) COLLATE "pg_catalog"."default",
  "province" varchar(255) COLLATE "pg_catalog"."default",
  "district" varchar(255) COLLATE "pg_catalog"."default",
  "wards" varchar(255) COLLATE "pg_catalog"."default",
  "address" varchar(255) COLLATE "pg_catalog"."default",
  "create_at" timestamp(6),
  "update_at" timestamp(6),
  "enable" bool
)
;
-- ALTER TABLE "patient" OWNER TO "postgress";
CREATE TABLE "patient-schedule" (
  "schedule_id" uuid NOT NULL,
  "patient_id" uuid,
  "serial" numeric,
  "create_at" timestamp(6),
  "update_at" timestamp(6),
  "enable" uuid
)
;
-- ALTER TABLE "patient-schedule" OWNER TO "postgress";
CREATE TABLE "prescription" (
  "id" uuid NOT NULL,
  "medicine_id" uuid,
  "count" int4,
  "doctor_id" uuid,
  "patient_id" uuid,
  "create_at" timestamp(6),
  "update_at" timestamp(6),
  "enable" bool
)
;
-- ALTER TABLE "prescription" OWNER TO "postgress";
CREATE TABLE "remider" (
  "id" uuid NOT NULL,
  "patient_id" uuid,
  "medicine_name" varchar(255) COLLATE "pg_catalog"."default",
  "time" varchar(255) COLLATE "pg_catalog"."default",
  "count" int4,
  "create_at" timestamp(6),
  "update_at" timestamp(6),
  "enable" bool
)
;
-- ALTER TABLE "remider" OWNER TO "postgress";
CREATE TABLE "role" (
  "id" uuid NOT NULL,
  "role_name" varchar(255) COLLATE "pg_catalog"."default",
  "create_at" timestamp(6),
  "update_at" timestamp(6)
)
;
-- ALTER TABLE "role" OWNER TO "postgress";
CREATE TABLE "room" (
  "id" uuid NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "floor_id" uuid,
  "create_at" timestamp(6),
  "update_at" timestamp(6),
  "enable" bool
)
;
ALTER TABLE "room" OWNER TO "postgress";
CREATE TABLE "schedule" (
  "id" uuid NOT NULL,
  "doctor_id" uuid,
  "room_id" uuid,
  "day" varchar(255) COLLATE "pg_catalog"."default",
  "session_id" uuid
)
;
-- ALTER TABLE "schedule" OWNER TO "postgress";
CREATE TABLE "session" (
  "id" uuid NOT NULL,
  "content" varchar(255) COLLATE "pg_catalog"."default",
  "create_at" timestamp(6),
  "update_at" timestamp(6),
  "enable" bool
)
;
-- ALTER TABLE "session" OWNER TO "postgress";
CREATE TABLE "users" (
  "id" uuid NOT NULL,
  "phone" varchar(10) COLLATE "pg_catalog"."default",
  "password" varchar(255) COLLATE "pg_catalog"."default",
  "full_name" varchar(255) COLLATE "pg_catalog"."default",
  "role" uuid,
  "email" varchar(255) COLLATE "pg_catalog"."default",
  "avatar" varchar COLLATE "pg_catalog"."default",
  "birthday" varchar COLLATE "pg_catalog"."default",
  "male" bool,
  "create_at" timestamp(6),
  "update_at" timestamp(6),
  "enable" bool,
  "active" bool
)
;
-- ALTER TABLE "users" OWNER TO "postgress";
BEGIN;
LOCK TABLE "public"."degree" IN SHARE MODE;
DELETE FROM "public"."degree";
COMMIT;
BEGIN;
LOCK TABLE "public"."department" IN SHARE MODE;
DELETE FROM "public"."department";
COMMIT;
BEGIN;
LOCK TABLE "public"."doctor" IN SHARE MODE;
DELETE FROM "public"."doctor";
COMMIT;
BEGIN;
LOCK TABLE "public"."floor" IN SHARE MODE;
DELETE FROM "public"."floor";
COMMIT;
BEGIN;
LOCK TABLE "public"."medicine" IN SHARE MODE;
DELETE FROM "public"."medicine";
COMMIT;
BEGIN;
LOCK TABLE "public"."patient" IN SHARE MODE;
DELETE FROM "public"."patient";
COMMIT;
BEGIN;
LOCK TABLE "public"."patient-schedule" IN SHARE MODE;
DELETE FROM "public"."patient-schedule";
COMMIT;
BEGIN;
LOCK TABLE "public"."prescription" IN SHARE MODE;
DELETE FROM "public"."prescription";
COMMIT;
BEGIN;
LOCK TABLE "public"."remider" IN SHARE MODE;
DELETE FROM "public"."remider";
COMMIT;
BEGIN;
LOCK TABLE "public"."role" IN SHARE MODE;
DELETE FROM "public"."role";
COMMIT;
BEGIN;
LOCK TABLE "public"."room" IN SHARE MODE;
DELETE FROM "public"."room";
COMMIT;
BEGIN;
LOCK TABLE "public"."schedule" IN SHARE MODE;
DELETE FROM "public"."schedule";
COMMIT;
BEGIN;
LOCK TABLE "public"."session" IN SHARE MODE;
DELETE FROM "public"."session";
COMMIT;
BEGIN;
LOCK TABLE "public"."users" IN SHARE MODE;
DELETE FROM "public"."users";
COMMIT;
ALTER TABLE "degree" ADD CONSTRAINT "degree_pkey" PRIMARY KEY ("id");
ALTER TABLE "department" ADD CONSTRAINT "department_pkey" PRIMARY KEY ("id");
ALTER TABLE "doctor" ADD CONSTRAINT "doctor_pkey" PRIMARY KEY ("id");
ALTER TABLE "floor" ADD CONSTRAINT "floor_pkey" PRIMARY KEY ("id");
ALTER TABLE "medicine" ADD CONSTRAINT "medicine_pkey" PRIMARY KEY ("id");
ALTER TABLE "patient" ADD CONSTRAINT "patient_pkey" PRIMARY KEY ("id");
ALTER TABLE "patient-schedule" ADD CONSTRAINT "patient-schedule_pkey" PRIMARY KEY ("schedule_id");
ALTER TABLE "prescription" ADD CONSTRAINT "prescription_pkey" PRIMARY KEY ("id");
ALTER TABLE "remider" ADD CONSTRAINT "remider_pkey" PRIMARY KEY ("id");
ALTER TABLE "role" ADD CONSTRAINT "role_pkey" PRIMARY KEY ("id");
ALTER TABLE "room" ADD CONSTRAINT "room_pkey" PRIMARY KEY ("id");
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_pkey" PRIMARY KEY ("id");
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("id");
ALTER TABLE "users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
ALTER TABLE "doctor" ADD CONSTRAINT "fk_doctor_degree_1" FOREIGN KEY ("degree_id") REFERENCES "public"."degree" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "doctor" ADD CONSTRAINT "fk_doctor_department_1" FOREIGN KEY ("department_id") REFERENCES "public"."department" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "doctor" ADD CONSTRAINT "fk_doctor_users_1" FOREIGN KEY ("id") REFERENCES "public"."users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "patient" ADD CONSTRAINT "fk_patient_users_1" FOREIGN KEY ("id") REFERENCES "public"."users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "patient-schedule" ADD CONSTRAINT "fk_patient-schedule_patient_1" FOREIGN KEY ("patient_id") REFERENCES "public"."patient" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "patient-schedule" ADD CONSTRAINT "fk_patient-schedule_schedule_1" FOREIGN KEY ("schedule_id") REFERENCES "public"."schedule" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "prescription" ADD CONSTRAINT "fk_prescription_doctor_1" FOREIGN KEY ("doctor_id") REFERENCES "public"."doctor" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "prescription" ADD CONSTRAINT "fk_prescription_medicine_1" FOREIGN KEY ("medicine_id") REFERENCES "public"."medicine" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "prescription" ADD CONSTRAINT "fk_prescription_patient_1" FOREIGN KEY ("patient_id") REFERENCES "public"."patient" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "remider" ADD CONSTRAINT "fk_remider_patient_1" FOREIGN KEY ("patient_id") REFERENCES "public"."patient" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "room" ADD CONSTRAINT "fk_room_floor_1" FOREIGN KEY ("floor_id") REFERENCES "public"."floor" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "schedule" ADD CONSTRAINT "fk_schedule_room_1" FOREIGN KEY ("room_id") REFERENCES "public"."room" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "schedule" ADD CONSTRAINT "fk_schedule_session_1" FOREIGN KEY ("session_id") REFERENCES "public"."session" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "users" ADD CONSTRAINT "fk_users_role_1" FOREIGN KEY ("role") REFERENCES "public"."role" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
