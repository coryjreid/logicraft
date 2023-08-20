@ECHO OFF

SET PACK_URL="https://logicraft.coryjreid.com/pack.toml"
SET BOOTSTRAP_JAR_SOURCE="https://github.com/packwiz/packwiz-installer-bootstrap/releases/download/v0.0.3/packwiz-installer-bootstrap.jar"
SET BOOTSTRAP_JAR="%CD%\packwiz-installer-bootstrap.jar"

IF [%1] NEQ [] (SET PACK_URL=%1)

IF NOT EXIST %BOOTSTRAP_JAR% (
  ECHO "Downloading packwiz bootstrap..."
  BITSADMIN /TRANSFER bootstrap /DOWNLOAD /PRIORITY FOREGROUND %BOOTSTRAP_JAR_SOURCE% %BOOTSTRAP_JAR%
)

"%INST_JAVA%" -jar %BOOTSTRAP_JAR% %PACK_URL%