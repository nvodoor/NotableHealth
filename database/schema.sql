CREATE DATABASE IF NOT EXISTS notable;

USE notable;

DROP TABLE IF EXISTS appointments;

CREATE TABLE appointments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  physician VARCHAR(100),
  patient VARCHAR(100),
  appt VARCHAR(50),
  kind VARCHAR(100)
);

DROP TABLE IF EXISTS physicians;

CREATE TABLE physicians (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  physician VARCHAR(100),
  email VARCHAR(100)
);

INSERT INTO appointments (physician, patient, appt, kind) VALUES ('Jack Reed', 'Joe Public', '8:00 AM', 'New Patient');
INSERT INTO appointments (physician, patient, appt, kind) VALUES ('Jack Reed', 'Jeff Public', '11:00 AM', 'New Patient');
INSERT INTO appointments (physician, patient, appt, kind) VALUES ('Jack Reed', 'Jack Public', '2:00 PM', 'Follow Up');
INSERT INTO appointments (physician, patient, appt, kind) VALUES ('Jack Reed', 'Jane Public', '5:00 PM', 'Follow Up');
INSERT INTO appointments (physician, patient, appt, kind) VALUES ('Jack Reed', 'Jill Public', '8:00 PM', 'New Patient');
INSERT INTO appointments (physician, patient, appt, kind) VALUES ('Alison Roar', 'Joe Public', '8:00 AM', 'New Patient');
INSERT INTO appointments (physician, patient, appt, kind) VALUES ('Alison Roar', 'Jeff Public', '11:00 AM', 'New Patient');
INSERT INTO appointments (physician, patient, appt, kind) VALUES ('Alison Roar', 'Jack Public', '2:00 PM', 'Follow Up');
INSERT INTO appointments (physician, patient, appt, kind) VALUES ('Alison Roar', 'Jane Public', '5:00 PM', 'Follow Up');
INSERT INTO appointments (physician, patient, appt, kind) VALUES ('Alison Roar', 'Jill Public', '8:00 PM', 'New Patient');
INSERT INTO appointments (physician, patient, appt, kind) VALUES ('Max Keller', 'Joe Public', '8:00 AM', 'New Patient');
INSERT INTO appointments (physician, patient, appt, kind) VALUES ('Max Keller', 'Jeff Public', '11:00 AM', 'New Patient');
INSERT INTO appointments (physician, patient, appt, kind) VALUES ('Max Keller', 'Jack Public', '2:00 PM', 'Follow Up');
INSERT INTO appointments (physician, patient, appt, kind) VALUES ('Max Keller', 'Jane Public', '5:00 PM', 'Follow Up');
INSERT INTO appointments (physician, patient, appt, kind) VALUES ('Max Keller', 'Jill Public', '8:00 PM', 'New Patient');

INSERT INTO physicians (physician, email) VALUES ('Jack Reed', 'jreed@notables.com');
INSERT INTO physicians (physician, email) VALUES ('Alison Roar', 'aroar@notables.com');
INSERT INTO physicians (physician, email) VALUES ('Max Keller', 'mkeller@notables.com');