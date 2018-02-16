CREATE TABLE FORMS(
ID INT IDENTITY(1,1) PRIMARY KEY,
UID VARCHAR(MAX) NOT NULL,
BSCID INT NOT NULL,
FIRST_NAME VARCHAR(MAX) NOT NULL,
LAST_NAME VARCHAR(MAX) NOT NULL,
MANAGER_EMAIL VARCHAR(MAX) NOT NULL,
REQUEST VARCHAR(MAX) NOT NULL,
TIME_STAMP DATETIME NOT NULL,
STATUS INT NOT NULL,
APPROVED_BY VARCHAR(MAX) NULL,
DENIED_BY VARCHAR(MAX) NULL,
COMMENTS VARCHAR(MAX) NULL
);

CREATE PROCEDURE dbo.STORE_FORM_DATA
  @UID VARCHAR(MAX) = NULL,
  @BSCID INT,
  @FIRST_NAME VARCHAR(MAX) = NULL,
  @LAST_NAME VARCHAR(MAX) = NULL,
  @MANAGER_EMAIL VARCHAR(MAX) = NULL,
  @REQUEST VARCHAR(MAX) = NULL,
  @TIME_STAMP DATETIME,
  @STATUS INT
  AS
  INSERT INTO FORMS(
    UID, BSCID, FIRST_NAME, LAST_NAME, MANAGER_EMAIL, REQUEST, TIME_STAMP, STATUS
  )
  VALUES(
    @UID,
    @BSCID,
    @FIRST_NAME,
    @LAST_NAME,
    @MANAGER_EMAIL,
    @REQUEST,
    @TIME_STAMP,
    @STATUS
  )
GO

CREATE PROCEDURE dbo.SEND_FORM_DATA
  @UID VARCHAR(MAX) = NULL
  AS
  SELECT(
  SELECT * FROM FORMS WHERE UID = @UID
  FOR JSON AUTO) AS FORM
GO

CREATE PROCEDURE dbo.SEND_ALL_FORM_DATA
  AS
  SELECT(
  SELECT * FROM FORMS
  FOR JSON AUTO) AS FORMS
GO

CREATE PROCEDURE dbo.DELETE_FORM_DATA
  @UID VARCHAR(MAX) = NULL
  AS
  DELETE FROM FORMS WHERE UID = @UID
GO


-- CREATE PROCEDURE dbo.UPDATE_FORM_DATA
--   @APPROVER VARCHAR,
--   @APPROVAL VARCHAR,
--   @UID VARCHAR
--   AS
--   IF (@APPROVAL = 'YES')
--     UPDATE FORMS SET APPROVED_BY = @APPROVER WHERE GUID = @GUID
--   ELSE
--     UPDATE FORMS SET DENIED_BY = @APPROVER WHERE GUID = @GUID
-- GO


DROP TABLE forms;
DROP PROC STORE_FORM_DATA;
DROP PROC SEND_FORM_DATA;
DROP PROC SEND_ALL_FORM_DATA;
DROP PROC DELETE_FORM_DATA;
